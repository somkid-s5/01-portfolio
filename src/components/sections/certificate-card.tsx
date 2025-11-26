import Image from "next/image";
import { CheckCircle, Hash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CertificateCardProps = {
  title: string;
  issuer: string;
  id: string;
  date: string;
  logo: string;
  tone?: "emerald" | "blue" | "orange" | "red";
};

const toneMap: Record<
  NonNullable<CertificateCardProps["tone"]>,
  { badge: "emerald" | "blue" | "neutral" | "lime"; accent: string }
> = {
  emerald: { badge: "emerald", accent: "text-emerald-300" },
  blue: { badge: "blue", accent: "text-sky-300" },
  orange: { badge: "neutral", accent: "text-orange-300" },
  red: { badge: "neutral", accent: "text-rose-300" },
};

export function CertificateCard({
  title,
  issuer,
  id,
  date,
  logo,
  tone = "emerald",
}: CertificateCardProps) {
  const toneConfig = toneMap[tone];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface/90 shadow-card transition hover:-translate-y-1 hover:border-primary/40">
      <div className="relative flex items-center justify-center border-b border-white/5 bg-white/5 px-6 py-8">
        <Image
          src={logo}
          alt={`${issuer} badge`}
          width={160}
          height={160}
          className="h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge tone={toneConfig.badge}>{issuer}</Badge>
            <span className="text-xs font-mono text-text-muted">{date}</span>
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs text-text-muted">
          <div className="flex items-center gap-1">
            <Hash size={12} aria-hidden />
            <span className="font-mono">{id}</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <CheckCircle size={14} aria-hidden />
            <span className="text-[11px] font-semibold text-primary">Verified</span>
          </div>
        </div>
      </div>
      <span className={`sr-only ${toneConfig.accent}`}>Certificate tone</span>
    </article>
  );
}
