import { Award, BadgeCheck, Briefcase } from "lucide-react";

import { internship } from "@/lib/portfolio-data";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-hero py-24 text-on-dark sm:py-32">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Experience"
          title="Hands-on experience in AI & Machine Learning."
        />

        <div className="relative mt-14 pl-8 sm:pl-12">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-teal via-teal/40 to-transparent sm:left-[15px]" aria-hidden />
          <Reveal>
            <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal shadow-lift ring-4 ring-navy sm:h-8 sm:w-8">
              <Briefcase className="h-3 w-3 text-on-dark sm:h-4 sm:w-4" />
            </span>
            <article className="rounded-3xl border border-on-dark/10 bg-on-dark/[0.04] p-6 backdrop-blur sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{internship.role}</h3>
                  <p className="mt-1 text-lg font-medium text-teal">{internship.company}</p>
                </div>
                <span className="rounded-full border border-on-dark/15 px-4 py-1.5 font-mono text-xs text-on-dark-muted">
                  {internship.duration}
                </span>
              </div>
              <p className="mt-5 max-w-2xl leading-relaxed text-on-dark-muted">{internship.summary}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {internship.stats.map((s, i) => (
                  <Reveal key={s.label} delay={100 + i * 80}>
                    <div className="h-full rounded-2xl border border-on-dark/10 bg-navy/60 p-5">
                      <Award className="h-5 w-5 text-teal" />
                      <p className="mt-3 text-4xl font-extrabold tracking-tight">{s.value}</p>
                      <p className="mt-1 text-sm text-on-dark-muted">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
                {internship.highlights.map((h, i) => (
                  <Reveal key={h} delay={260 + i * 80}>
                    <div className="flex h-full flex-col justify-between rounded-2xl bg-teal-gradient p-5 shadow-lift">
                      <BadgeCheck className="h-5 w-5 text-on-dark" />
                      <p className="mt-3 text-lg font-semibold leading-snug">{h}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
