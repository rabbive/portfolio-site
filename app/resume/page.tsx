import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Resume - Ashwanth Kumaravel",
  description: "View and download my professional resume.",
};

export default function ResumePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-8 pt-8 text-center">
      <div>
        <h1 className="text-2xl font-bold">Resume</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          View and download my professional resume.
        </p>
      </div>
      <div className="flex gap-3">
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="motion-lift-colors rounded-lg border px-4 py-2 text-sm font-medium hover:-translate-y-px hover:bg-[var(--bg-hover)]"
          style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
        >
          View Resume ↗
        </a>
        <a
          href="/assets/resume.pdf"
          download
          className="motion-lift-colors rounded-lg border px-4 py-2 text-sm font-medium hover:-translate-y-px hover:bg-[var(--bg-hover)]"
          style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
        >
          Download PDF ↓
        </a>
      </div>
      <blockquote className="max-w-md">
        <p className="font-mono text-sm italic" style={{ color: "var(--text-secondary)" }}>
          &ldquo;{siteConfig.resumeQuote.text}&rdquo;
        </p>
        <footer className="mt-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          — {siteConfig.resumeQuote.author}, {siteConfig.resumeQuote.source}
        </footer>
      </blockquote>
    </div>
  );
}
