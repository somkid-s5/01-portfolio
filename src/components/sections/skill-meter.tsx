type Skill = {
  name: string;
  level: number;
  tone?: "emerald" | "lime";
};

type SkillMeterProps = {
  title: string;
  skills: Skill[];
};

export function SkillMeter({ title, skills }: SkillMeterProps) {
  return (
    <div className="glass h-full rounded-2xl border border-white/5 bg-surface/80">
      <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3 text-xs font-mono uppercase tracking-wide text-text-muted">
        <span className="h-2 w-2 rounded-full bg-emerald-500/70" aria-hidden />
        {title}
      </div>
      <div className="space-y-4 p-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-white">
              <span>{skill.name}</span>
              <span className="font-mono text-xs text-primary">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/5">
              <div
                className={`h-2 rounded-full ${skill.tone === "lime" ? "bg-accent-lime" : "bg-primary"}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
