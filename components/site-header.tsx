"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { CommandPalette } from "./command-palette";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto flex h-14 max-w-[680px] items-center justify-between px-6">
        <nav className="flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="motion-lift-colors text-[15px] font-medium hover:-translate-y-px"
                style={{
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <CommandPalette />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
