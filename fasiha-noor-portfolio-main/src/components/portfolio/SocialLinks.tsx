import { Github, Linkedin, Mail } from "lucide-react";

import { links } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

import { ExternalAction } from "./ExternalAction";

export function SocialLinks({ tone = "dark", withEmail = false }: { tone?: "dark" | "light"; withEmail?: boolean }) {
  const cls = cn(
    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
    tone === "dark"
      ? "border-on-dark/20 text-on-dark hover:border-teal hover:bg-teal hover:text-on-dark"
      : "border-border text-navy hover:border-teal hover:bg-teal hover:text-primary-foreground",
  );
  return (
    <div className="flex items-center gap-3">
      <ExternalAction href={links.linkedin} pendingLabel="LinkedIn profile" ariaLabel="LinkedIn" className={cls}>
        <Linkedin className="h-[18px] w-[18px]" />
      </ExternalAction>
      <ExternalAction href={links.github} pendingLabel="GitHub profile" ariaLabel="GitHub" className={cls}>
        <Github className="h-[18px] w-[18px]" />
      </ExternalAction>
      {withEmail ? (
        <ExternalAction
          href={links.email ? `mailto:${links.email}` : null}
          pendingLabel="Email address"
          ariaLabel="Email"
          className={cls}
        >
          <Mail className="h-[18px] w-[18px]" />
        </ExternalAction>
      ) : null}
    </div>
  );
}
