import { Building2, CalendarDays, GraduationCap, Lightbulb, Sparkles, Target } from "lucide-react";

import { careerInterests, education } from "@/lib/portfolio-data";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    icon: Lightbulb,
    title: "Problem-first thinking",
    text: "I start by understanding the real problem, then break it into clear steps before choosing tools.",
  },
  {
    icon: Target,
    title: "Practical builds",
    text: "I learn best by shipping working projects — from ML models to end-to-end automation workflows.",
  },
  {
    icon: Sparkles,
    title: "AI with purpose",
    text: "I use AI where it genuinely saves time or improves decisions, not just because it's new.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-soft-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="About me" title="Turning curiosity about AI into things that actually work." />
          <Reveal delay={100} className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted-foreground">
            <p>
              I'm a <strong className="font-semibold text-navy">BS Computer Science student</strong> at the{" "}
              <strong className="font-semibold text-navy">University of Management and Technology (UMT)</strong>,
              expected to graduate in 2027. My coursework gave me a strong base in data structures, algorithms,
              databases and operating systems — and a real appetite for building on top of it.
            </p>
            <p>
              Most of my energy goes into <strong className="font-semibold text-navy">Artificial Intelligence,
              Machine Learning and automation</strong>. I've trained and evaluated predictive models with Python and
              scikit-learn, and designed n8n workflows where AI agents read documents, retrieve knowledge and handle
              repetitive tasks across tools like Gmail, Google Sheets and Google Drive.
            </p>
            <p>
              I enjoy taking a messy, manual process and turning it into a clean, reliable system. Every project I
              build is a chance to sharpen that skill — and to create something people can actually use.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={150 + i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <p.icon className="h-5 w-5 text-teal" />
                  <h3 className="mt-3 text-sm font-semibold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150} className="lg:pt-14">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-on-dark shadow-lift sm:p-10">
            <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal/25 blur-3xl" aria-hidden />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">At a glance</p>
              <dl className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <dt className="text-sm text-on-dark-muted">Degree</dt>
                    <dd className="font-semibold">{education.degree}</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <dt className="text-sm text-on-dark-muted">University</dt>
                    <dd className="font-semibold">{education.university}</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <dt className="text-sm text-on-dark-muted">Expected graduation</dt>
                    <dd className="font-semibold">{education.expectedGraduation}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 border-t border-on-dark/10 pt-6">
                <p className="text-sm text-on-dark-muted">Career interests</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {careerInterests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-on-dark/15 bg-on-dark/5 px-3 py-1.5 text-xs font-medium"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
