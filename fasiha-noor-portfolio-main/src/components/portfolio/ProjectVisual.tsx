import { Database, ImageIcon, LineChart, Smartphone } from "lucide-react";

import type { Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const coverIcons: Record<string, typeof LineChart> = {
  "bike-rental": LineChart,
  dbms: Database,
  "android-app": Smartphone,
};

/** Real screenshot inside a window frame, a "coming soon" frame for pending screenshots, or a typographic cover. */
export function ProjectVisual({ project, size = "lg" }: { project: Project; size?: "lg" | "sm" }) {
  if (project.screenshot || project.screenshotPending) {
    return (
      <div className="overflow-hidden rounded-2xl border border-on-dark/10 bg-navy shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-on-dark/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-on-dark/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-on-dark/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-on-dark/25" />
          <span className="ml-3 truncate font-mono text-[11px] text-on-dark-muted">n8n · {project.title}</span>
        </div>
        {project.screenshot ? (
          <div className={cn("flex items-center justify-center bg-navy", size === "lg" ? "aspect-[5/2]" : "aspect-video")}>
            <img
              src={project.screenshot}
              alt={`${project.title} n8n workflow`}
              loading="lazy"
              className="max-h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className={cn("relative flex items-center justify-center", size === "lg" ? "aspect-[16/10]" : "aspect-video")}>
            <div className="grid-lines absolute inset-0" aria-hidden />
            <div className="relative flex flex-col items-center gap-3 px-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-on-dark/30 text-teal">
                <ImageIcon className="h-5 w-5" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-dark-muted">Workflow screenshot coming soon</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  const Icon = coverIcons[project.id] ?? LineChart;
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden rounded-2xl bg-hero p-6",
        size === "lg" ? "aspect-[16/10]" : "aspect-[16/9]",
      )}
    >
      <div className="grid-lines absolute inset-0" aria-hidden />
      <span className="absolute -right-2 -top-6 font-mono text-[7rem] font-bold leading-none text-on-dark/[0.06]" aria-hidden>
        {project.number}
      </span>
      <span className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/90 text-on-dark shadow-lift transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-teal">{project.category}</p>
    </div>
  );
}
