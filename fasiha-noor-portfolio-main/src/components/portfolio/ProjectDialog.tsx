import { Check, Github } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { externalClickHandler } from "@/lib/external-link";
import type { Project } from "@/lib/portfolio-data";

import { ProjectVisual } from "./ProjectVisual";

export function ProjectDialog({ project, trigger }: { project: Project; trigger: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl border-border p-0 sm:rounded-3xl">
        <div className="p-6 pb-0 sm:p-8 sm:pb-0">
          <ProjectVisual project={project} />
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {project.number} · {project.category}
          </p>
          <DialogTitle className="mt-2 text-2xl font-bold tracking-tight text-navy">{project.title}</DialogTitle>
          <DialogDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </DialogDescription>

          <h4 className="mt-7 text-sm font-semibold text-navy">Key features</h4>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-7 text-sm font-semibold text-navy">Technologies</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li key={t} className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-navy">
                {t}
              </li>
            ))}
          </ul>

          {project.github ? (
            <Button asChild variant="navy" size="xl" className="mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={externalClickHandler(project.github)}
              >
                <Github /> View on GitHub
              </a>
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
