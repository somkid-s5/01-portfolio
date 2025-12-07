import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 5 // 5 minutes
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function applyRateLimit(ip: string) {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count += 1
  rateLimitStore.set(ip, entry)
  return true
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.CONTACT_TURNSTILE_SECRET
  if (!secret) return true
  if (!token) return false

  const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  })

  if (!resp.ok) return false
  const data = (await resp.json()) as { success?: boolean }
  return Boolean(data.success)
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('cf-connecting-ip') ||
    'unknown'

  const body = await req.json().catch(() => null)
  const name = String(body?.name || '').trim()
  const email = String(body?.email || '').trim().toLowerCase()
  const message = String(body?.message || '').trim()
  const honeypot = String(body?.company || '').trim()
  const turnstileToken = typeof body?.token === 'string' ? body.token : undefined

  // Durable rate limiting via Supabase (Email-based)
  // We check how many messages this email has sent in the last 15 minutes.
  // Note: IP-based limiting would require a separate table or Redis.
  if (email) {
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString()
    const { count, error: countError } = await supabaseAdmin
      .from('messages')
      .select('*', { count: 'exact', head: true })
      .eq('email', email)
      .gte('created_at', fifteenMinutesAgo)

    if (!countError && count !== null && count >= 5) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
  }

  // Fallback in-memory IP rate limit (for non-email spam or if email is missing)
  if (!applyRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  if (honeypot) {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  if (name.length > 120 || message.length > 5000) {
    return NextResponse.json({ error: 'Input too long.' }, { status: 400 })
  }

  const captchaOk = await verifyTurnstile(turnstileToken, ip)
  if (!captchaOk) {
    return NextResponse.json({ error: 'Captcha verification failed.' }, { status: 401 })
  }

  const { error } = await supabaseAdmin.from('messages').insert([
    {
      name,
      email,
      message,
      created_at: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error('Contact form insert failed', error)
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
