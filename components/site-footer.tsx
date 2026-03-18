import Link from "next/link";
import { siteConfig, footerNav } from "@/lib/site-data";
import { SocialIcon } from "./icons";

export function SiteFooter() {
  const navigateLinks = footerNav;
  const connectLinks = siteConfig.socials;

  return (
    <footer className="mt-16 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Navigate
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navigateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:underline"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {connectLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:bg-[var(--bg-hover)]"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            You&apos;re the <strong style={{ color: "var(--text-primary)" }}>32,874</strong>
            <sup>th</sup> visitor
          </p>
        </div>
      </div>
    </footer>
  );
}
