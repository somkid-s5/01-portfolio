import type { ReactNode } from "react";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  badgeTone?: "emerald" | "lime" | "blue" | "neutral";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  badgeTone = "emerald",
}: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-4", align === "center" ? "text-center" : "")}>
      {eyebrow ? (
        <div className={clsx("flex", align === "center" ? "justify-center" : "")}>
          <Badge tone={badgeTone} className="font-mono tracking-[0.2em]">
            {eyebrow}
          </Badge>
        </div>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">{title}</h2>
      {description ? (
        <p className={clsx("text-sm md:text-base text-text-muted", align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
