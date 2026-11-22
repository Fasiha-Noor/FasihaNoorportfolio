import { ArrowUpRight, Check, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { externalClickHandler } from "@/lib/external-link";
import { projects, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

import { ProjectDialog } from "./ProjectDialog";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function TechList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={cn(
            "rounded-md px-2.5 py-1 font-mono text-[11px] font-medium",
            tone === "dark" ? "border border-on-dark/15 bg-on-dark/5 text-on-dark" : "border border-border bg-muted text-navy",
          )}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Actions({ project, tone }: { project: Project; tone: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3">
      <ProjectDialog
        project={project}
        trigger={
          <Button variant="teal" size="xl">
            View Project <ArrowUpRight />
          </Button>
        }
      />
      {project.github ? (
        <Button asChild variant={tone === "dark" ? "onDark" : "outline"} size="xl">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={externalClickHandler(project.github)}
            aria-label={`${project.title} on GitHub`}
          >
            <Github /> GitHub
          </a>
        </Button>
      ) : null}
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <Reveal as="article">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy p-6 text-on-dark shadow-lift sm:p-10 lg:p-12">
        <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
        <div
          className={cn(
            "absolute top-0 h-80 w-80 rounded-full bg-teal/20 blur-[100px]",
            reverse ? "-left-20" : "-right-20",
          )}
          aria-hidden
        />
        <div className={cn("relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
          <div className="transition-transform duration-500 hover:scale-[1.015]">
            <ProjectVisual project={project} />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-teal">{project.number}</span>
              <span className="h-px w-10 bg-teal/50" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-dark-muted">{project.category}</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-on-dark-muted">{project.description}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {project.features.slice(0, 6).map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-on-dark/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {f}
                </li>
              ))}
            </ul>
            {project.features.length > 6 ? (
              <p className="mt-2.5 text-sm text-on-dark-muted">+ {project.features.length - 6} more in project details</p>
            ) : null}
            <div className="mt-7">
              <TechList items={project.technologies} tone="dark" />
            </div>
            <div className="mt-8">
              <Actions project={project} tone="dark" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={index * 90} className="h-full">
      <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-4 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
        <ProjectVisual project={project} size="sm" />
        <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
          <h3 className="text-xl font-bold tracking-tight text-navy">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <ul className="mt-5 space-y-2">
            {project.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <TechList items={project.technologies} />
          </div>
          <div className="mt-auto pt-7">
            <Actions project={project} tone="light" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="relative bg-soft-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured projects"
            title="Practical builds in AI, automation and machine learning."
            description="Real projects — from AI agents that write ATS-ready resumes to models that forecast demand."
          />
          <Reveal delay={100}>
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-3xl font-bold text-navy">0{projects.length}</span> projects
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-8">
          {featured.map((p, i) => (
            <FeaturedProject key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
