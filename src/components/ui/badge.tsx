import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type BadgeTone = "emerald" | "lime" | "blue" | "neutral";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  icon?: ReactNode;
};

const toneMap: Record<BadgeTone, string> = {
  emerald: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  lime: "bg-lime-400/15 text-lime-200 border border-lime-400/30",
  blue: "bg-sky-500/15 text-sky-200 border border-sky-500/30",
  neutral: "bg-white/5 text-gray-300 border border-white/10",
};

export function Badge({ tone = "neutral", icon, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide",
        toneMap[tone],
        className,
      )}
      {...props}
    >
      {icon && <span aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}
