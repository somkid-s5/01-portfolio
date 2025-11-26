import { Calendar } from "lucide-react";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  items: string[];
  active?: boolean;
};

export function TimelineItem({ title, subtitle, period, items, active = false }: TimelineItemProps) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full border border-white/10 bg-emerald-500" />
      <div className="rounded-xl border-l-4 border-emerald-500/60 bg-white/5 p-6 shadow-card">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title}{" "}
              {active ? (
                <span className="align-middle rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-mono text-emerald-300">
                  Current
                </span>
              ) : null}
            </h3>
            <p className="text-sm font-mono text-primary">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-text-muted">
            <Calendar size={14} />
            {period}
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-text-muted">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary" aria-hidden>
                ▸
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
