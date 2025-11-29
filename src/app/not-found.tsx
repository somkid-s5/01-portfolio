import Link from 'next/link'
import { AlertTriangle, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 pointer-events-none"></div>
            <div className="absolute inset-0 matrix-bg pointer-events-none opacity-20"></div>

            <div className="relative z-10 max-w-lg">
                <div className="flex justify-center mb-8">
                    <div className="p-6 bg-red-900/10 border border-red-500/30 rounded-full animate-pulse">
                        <AlertTriangle size={48} className="text-red-500" />
                    </div>
                </div>

                <h1 className="text-6xl font-bold mb-4 font-mono text-red-500">404</h1>
                <h2 className="text-2xl font-bold mb-6 text-white">SYSTEM ERROR: RESOURCE NOT FOUND</h2>

                <p className="text-gray-400 mb-12 font-mono text-sm leading-relaxed border-l-2 border-red-900/50 pl-4 text-left">
                // The requested URL was not found on this server.<br />
                // Check your input vectors or return to base.<br />
                // Error Code: 0x404_NOT_FOUND
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    RETURN TO HOME
                </Link>
            </div>
        </div>
    )
}
