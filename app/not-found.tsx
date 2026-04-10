import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 pt-8 text-center">
      <p
        className="text-[80px] font-bold leading-none tracking-tight"
        style={{ color: "var(--border)" }}
      >
        404
      </p>
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">Page not found</h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          This page doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="motion-lift-colors rounded-lg border px-4 py-2 text-sm font-medium hover:-translate-y-px hover:bg-[var(--bg-hover)]"
        style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
      >
        ← Back to home
      </Link>
    </div>
  );
}
