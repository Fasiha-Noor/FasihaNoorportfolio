import type { MouseEvent } from "react";

/**
 * Opens an external URL in a new tab. If the browser blocks the new tab —
 * which happens inside restricted preview frames — it walks the page up to
 * the top-level window and navigates there, so the link is never dead.
 */
export function openExternalUrl(href: string) {
  const opened = window.open(href, "_blank");
  if (opened) {
    try {
      opened.opener = null;
    } catch {
      // Cross-origin windows can't be touched; the popup already opened.
    }
    return;
  }

  // Popup blocked: try the top-level window first so a preview frame can't trap the link.
  try {
    const top = window.top;
    if (top) {
      top.location.href = href;
      return;
    }
  } catch {
    // Top window is cross-origin; fall through to navigating this frame.
  }

  window.location.href = href;
}

/** Anchor click handler that keeps modifier-clicks (new tab, save-as) native. */
export function externalClickHandler(href: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    openExternalUrl(href);
  };
}
