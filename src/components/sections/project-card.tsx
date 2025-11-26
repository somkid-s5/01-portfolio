import type { ReactNode } from "react";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  badge: string;
  icon?: ReactNode;
  span?: "wide" | "tall" | "default";
};

export function ProjectCard({
  title,
  description,
  tags,
  badge,
  icon,
  span = "default",
}: ProjectCardProps) {
  const spanClass =
    span === "wide"
      ? "md:col-span-2"
      : span === "tall"
        ? "md:row-span-2"
        : "md:col-span-1";

  return (
    <article
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface/90 p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/50",
        spanClass,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-60 transition group-hover:opacity-30" />
      <div className="flex items-start justify-between gap-3">
        <Badge tone="emerald">{badge}</Badge>
        {icon ? (
          <span className="rounded-full bg-white/5 p-2 text-primary shadow-glow" aria-hidden>
            {icon}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition group-hover:opacity-100" />
    </article>
  );
}
