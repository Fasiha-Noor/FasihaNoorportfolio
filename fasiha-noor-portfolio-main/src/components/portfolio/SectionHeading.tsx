import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em]",
          dark ? "text-teal" : "text-primary",
        )}
      >
        <span className={cn("h-px w-8", dark ? "bg-teal" : "bg-primary")} aria-hidden />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-on-dark" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-on-dark-muted" : "text-muted-foreground")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
