import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "border-b border-border bg-soft-white/85 shadow-soft backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-[72px]" aria-label="Main">
        <a
          href="#home"
          className={cn("group flex items-center gap-2.5 font-bold tracking-tight transition-colors", solid ? "text-navy" : "text-on-dark")}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-gradient font-mono text-sm text-primary-foreground shadow-soft transition-transform duration-300 group-hover:rotate-6">
            FN
          </span>
          <span className="text-[17px]">Fasiha Noor</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    solid
                      ? isActive
                        ? "text-navy"
                        : "text-muted-foreground hover:text-navy"
                      : isActive
                        ? "text-on-dark"
                        : "text-on-dark-muted hover:text-on-dark",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-teal transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-teal-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift lg:inline-flex"
        >
          Let's talk
        </a>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            solid ? "text-navy hover:bg-accent" : "text-on-dark hover:bg-on-dark/10",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <ul className="min-h-0 space-y-1 px-5 pb-5 sm:px-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  active === item.id ? "bg-accent text-navy" : "text-muted-foreground hover:bg-accent hover:text-navy",
                )}
              >
                {item.label}
                {active === item.id ? <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden /> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
