import type { ReactNode } from "react";
import { toast } from "sonner";

import { externalClickHandler } from "@/lib/external-link";
import type { ExternalLink } from "@/lib/portfolio-data";

type ExternalActionProps = {
  href: ExternalLink;
  /** Shown in a toast when the link hasn't been provided yet. */
  pendingLabel: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

/** A link that falls back to a friendly "coming soon" notice when its URL is still a placeholder. */
export function ExternalAction({ href, pendingLabel, className, children, ariaLabel }: ExternalActionProps) {
  if (href) {
    const isInPage = href.startsWith("#");
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        {...(isInPage
          ? {}
          : { target: "_blank", rel: "noopener noreferrer", onClick: externalClickHandler(href) })}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel ? `${ariaLabel} (coming soon)` : undefined}
      onClick={() => toast(`${pendingLabel} coming soon`, { description: "This link will be added shortly." })}
    >
      {children}
    </button>
  );
}
