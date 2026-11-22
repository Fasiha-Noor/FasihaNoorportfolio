import { BookOpen, CalendarDays, GraduationCap, TrendingUp, Trophy } from "lucide-react";

import { achievements, coreCoursework, education } from "@/lib/portfolio-data";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const achievementIcons = [TrendingUp, Trophy];

export function Education() {
  return (
    <section id="education" className="relative bg-cream/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education & achievements" title="A strong academic foundation, still growing." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal/10" aria-hidden />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-on-dark">
                <GraduationCap className="h-6 w-6" />
              </span>
              <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">{education.status}</p>
              <h3 className="relative mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{education.degree}</h3>
              <p className="relative mt-2 text-lg text-muted-foreground">{education.university}</p>
              <p className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-navy">
                <CalendarDays className="h-4 w-4 text-teal" /> Expected graduation {education.expectedGraduation}
              </p>

              <div className="relative mt-8 border-t border-border pt-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <BookOpen className="h-4 w-4 text-teal" /> Strong foundation in
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {coreCoursework.map((c) => (
                    <li key={c} className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm font-medium text-navy">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            {achievements.map((a, i) => {
              const Icon = achievementIcons[i] ?? Trophy;
              return (
                <Reveal key={a.title} delay={100 + i * 90}>
                  <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-muted-foreground">{a.title}</p>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-teal transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="mt-4 text-4xl font-extrabold tracking-tight text-navy">{a.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
