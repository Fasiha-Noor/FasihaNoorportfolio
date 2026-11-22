import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { links, profile } from "@/lib/portfolio-data";

import { ExternalAction } from "./ExternalAction";
import { SocialLinks } from "./SocialLinks";
import { WorkflowBackground } from "./WorkflowBackground";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero text-on-dark">
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-0 -z-10 opacity-90">
        <WorkflowBackground />
      </div>
      <div
        className="absolute -right-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-teal/20 blur-[120px]"
        aria-hidden
      />

      <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 lg:pb-32 lg:pt-40">
        <div>
          <p className="animate-in fade-in slide-in-from-bottom-3 inline-flex items-center gap-2 rounded-full border border-on-dark/15 bg-on-dark/5 px-4 py-1.5 font-mono text-xs tracking-wide text-on-dark-muted backdrop-blur duration-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Open to internships & collaborations
          </p>

          <h1 className="animate-in fade-in slide-in-from-bottom-4 mt-7 text-5xl font-extrabold tracking-tight duration-700 sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-teal">Fasiha Noor.</span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 mt-6 max-w-xl text-xl font-semibold leading-snug text-on-dark delay-100 duration-700 fill-mode-both sm:text-2xl">
            {profile.heroSubheading}
          </p>
          <p className="animate-in fade-in slide-in-from-bottom-4 mt-5 max-w-xl text-base leading-relaxed text-on-dark-muted delay-200 duration-700 fill-mode-both sm:text-lg">
            {profile.heroSupporting}
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 mt-9 flex flex-wrap items-center gap-3 delay-300 duration-700 fill-mode-both">
            <Button asChild variant="teal" size="xl">
              <a href="#projects">
                Explore My Projects <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <ExternalAction href={links.resume} pendingLabel="CV download">
                <Download /> Download CV
              </ExternalAction>
            </Button>
          </div>

          <div className="animate-in fade-in mt-10 flex flex-wrap items-center gap-6 delay-500 duration-700 fill-mode-both">
            <SocialLinks tone="dark" />
            <span className="hidden h-8 w-px bg-on-dark/15 sm:block" aria-hidden />
            <p className="text-sm text-on-dark-muted">{profile.title.split(" | ").slice(0, 2).join(" · ")}</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" aria-hidden />
    </section>
  );
}
