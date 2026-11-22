import { Brain, Code2, Database, Globe, Workflow, Wrench, type LucideIcon } from "lucide-react";

import { skillCategories, type SkillCategory } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<SkillCategory["icon"], LucideIcon> = {
  brain: Brain,
  workflow: Workflow,
  code: Code2,
  globe: Globe,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-cream/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical skills"
          title="A toolkit built around AI, data and automation."
          description="The languages, frameworks and platforms I use to take ideas from a dataset or a manual process to a working solution."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon];
            const featured = i < 2;
            return (
              <Reveal key={cat.title} delay={i * 70} className={featured ? "lg:col-span-6" : "lg:col-span-3"}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7",
                    featured
                      ? "border-transparent bg-navy text-on-dark shadow-lift"
                      : "border-border bg-card shadow-soft hover:shadow-lift",
                  )}
                >
                  {featured ? <div className="grid-lines absolute inset-0 opacity-50" aria-hidden /> : null}
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                          featured ? "bg-teal text-on-dark" : "bg-accent text-teal",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className={cn("text-base font-semibold leading-snug", featured ? "text-on-dark" : "text-navy")}>
                        {cat.title}
                      </h3>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <li
                          key={skill}
                          className={cn(
                            "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                            featured
                              ? "border border-on-dark/15 bg-on-dark/5 text-on-dark hover:border-teal hover:bg-teal/20"
                              : "border border-border bg-muted text-navy hover:border-teal/50 hover:bg-accent",
                          )}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
