import { ArrowUp } from "lucide-react";

import { navItems, profile } from "@/lib/portfolio-data";

import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-on-dark/10 bg-navy text-on-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-2.5 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-gradient font-mono text-sm">FN</span>
              {profile.name}
            </a>
            <p className="mt-3 text-sm text-on-dark-muted">{profile.shortTitle}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-on-dark-muted transition-colors hover:text-teal">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks tone="dark" />
        </div>
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-on-dark/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-on-dark-muted">
            © <span suppressHydrationWarning>{year}</span> {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-on-dark-muted transition-colors hover:text-teal"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
