import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal Setup - Zsh Configuration Guide",
  description: "Below is my terminal setup configuration.",
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

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      className="overflow-x-auto rounded-lg border p-4 font-mono text-xs leading-relaxed"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)", color: "var(--text-secondary)" }}
    >
      <code>{children}</code>
    </pre>
  );
}

export default function TerminalPage() {
  return (
    <div className="space-y-10 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Terminal Setup</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          Below is my terminal setup configuration.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Prerequisites</h2>
        <div className="space-y-3">
          <Step number="1">
            <strong>Zsh</strong> — Modern shell (pre-installed on macOS, install on Linux)
          </Step>
          <Step number="2">
            <strong>Git</strong> — Version control system
          </Step>
          <Step number="3">
            <strong>Homebrew</strong> — Package manager for macOS/Linux (brew.sh)
          </Step>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Install Required Packages</h2>
        <Step number="1.1">Run this one-liner to install all required packages:</Step>
        <CodeBlock>{`brew install \\
  starship \\
  eza \\
  fzf \\
  zoxide \\
  fd \\
  fastfetch \\
  tree \\
  oven-sh/bun/bun \\
  node@22 \\
  nvm \\
  unzip \\
  unrar \\
  p7zip \\
  gzip \\
  bzip2 \\
  git \\
  net-tools`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Configure Zsh</h2>
        <Step number="2.1">Backup your existing .zshrc (if any):</Step>
        <CodeBlock>{`[ -f ~/.zshrc ] && mv ~/.zshrc ~/.zshrc.backup`}</CodeBlock>
        <Step number="2.3">Create a new .zshrc file and paste the configuration below:</Step>
        <CodeBlock>{`nano ~/.zshrc`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Configure Fastfetch</h2>
        <Step number="3.1">Create the fastfetch config directory:</Step>
        <CodeBlock>{`mkdir -p ~/.config/fastfetch`}</CodeBlock>
        <Step number="3.3">Create the config file:</Step>
        <CodeBlock>{`nano ~/.config/fastfetch/config.jsonc`}</CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Apply Configuration</h2>
        <Step number="1">Reload your shell configuration:</Step>
        <CodeBlock>{`source ~/.zshrc`}</CodeBlock>
        <Step number="2">Or simply restart your terminal</Step>
        <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
          Done! Your terminal is now configured.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Source Repository</h2>
        <a
          href="https://github.com/rabbive"
          target="_blank"
          rel="noopener noreferrer"
          className="motion-lift-colors block rounded-xl border p-4 hover:-translate-y-px hover:bg-[var(--bg-hover)]"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            rabbive on GitHub
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Configuration files and other projects
          </p>
        </a>
      </section>
    </div>
  );
}
