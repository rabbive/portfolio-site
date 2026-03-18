"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { SearchIcon } from "./icons";

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
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
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
          <button
            className="flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition-colors hover:bg-[var(--bg-hover)]"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            aria-label="Open command palette (⌘K)"
          >
            <SearchIcon size={12} />
            <span className="hidden sm:inline">⌘</span>
            <span className="hidden sm:inline">K</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
