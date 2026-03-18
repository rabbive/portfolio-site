import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Guide - VS Code Configuration",
  description: "Complete guide to setting up VSCode / Cursor with my settings.",
};

function Step({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-medium"
        style={{ backgroundColor: "var(--bg-hover)", color: "var(--text-muted)" }}
      >
        {number}
      </span>
      <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {children}
      </div>
    </div>
  );
}

export default function SetupPage() {
  return (
    <div className="space-y-10 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Setup</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          Complete guide to setting up VSCode / Cursor with my settings.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Download necessary files</h2>
        <div className="space-y-3">
          <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Fira-code.zip</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Unzip the font&apos;s file</p>
          </div>
          <Step number="1.2">Select all the fonts, right click, and click to Install</Step>
          <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>vsc-extensions.txt</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Place this file in downloads</p>
          </div>
          <Step number="1.4">Open VSCode / Cursor in downloads directory</Step>
          <Step number="1.5">Install VSC Export &amp; Import extension in VSCode / Cursor.</Step>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Installing all the extensions</h2>
        <div className="space-y-3">
          <Step number="2.1">Open Command Palette by pressing the keyboard shortcut</Step>
          <div className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 font-mono text-xs" style={{ borderColor: "var(--border)" }}>
            Ctrl + ⇧ + P
          </div>
          <Step number="2.3">Enter the text in prompt and press Enter ⏎</Step>
          <code className="block rounded-lg border px-3 py-2 font-mono text-xs" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
            VSC Export &amp; Import
          </code>
          <Step number="2.5">All extensions will start to install</Step>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">VSCode / Cursor Settings</h2>
        <div className="space-y-3">
          <Step number="3.1">Open Command Palette by pressing the keyboard shortcut</Step>
          <div className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 font-mono text-xs" style={{ borderColor: "var(--border)" }}>
            Ctrl + ⇧ + P
          </div>
          <Step number="3.3">Enter the text in prompt and press Enter ⏎</Step>
          <code className="block rounded-lg border px-3 py-2 font-mono text-xs" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
            Preferences: Open Settings (JSON)
          </code>
          <Step number="3.5">Copy the settings.json from the below window</Step>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Complete Setup</h2>
        <div className="space-y-3">
          <Step number="1">Paste the code in the settings.json file in VSCode / Cursor</Step>
          <Step number="2">Save the settings.json file with <kbd className="font-mono">Ctrl + S</kbd> and restart VSCode / Cursor</Step>
          <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
            Done! Your editor is now configured.
          </p>
        </div>
      </section>
    </div>
  );
}
