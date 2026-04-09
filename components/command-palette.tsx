"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { SearchIcon } from "./icons";
import {
  House,
  BriefcaseBusiness,
  NotebookText,
  FileText,
  Cpu,
  BookOpen,
  Clapperboard,
  Wrench,
  TerminalSquare,
  SunMoon,
  Command,
  ArrowUpToLine,
  Copy,
  Share2,
  Github,
  Music2,
  Volume2,
  LucideIcon,
} from "lucide-react";
import { playUiClick } from "@/lib/ui-sound";
import { toggleUiSoundsStoredPreference } from "@/lib/ui-sound-settings";

type CommandItem = {
  id: string;
  title: string;
  description: string;
  shortcut?: string;
  icon: LucideIcon;
  run: () => void;
};

const UI_SOUNDS_STORAGE = "portfolio-ui-sounds";

export function CommandPalette() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [uiSoundsStoredOff, setUiSoundsStoredOff] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem(UI_SOUNDS_STORAGE) === "off",
  );
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const listboxId = "command-palette-listbox";
  const overlayRef = useRef<HTMLDivElement>(null);

  const closePalette = useCallback(() => {
    const duration = reducedMotion ? 0 : 220;
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
      setQuery("");
      setSelected(0);
    }, duration);
  }, [reducedMotion]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const commands = useMemo<CommandItem[]>(() => {
    const navigate = (href: string) => () => {
      router.push(href);
      closePalette();
    };

    const effectiveTheme = resolvedTheme ?? "light";
    const toggleTheme = () => {
      playUiClick();
      setTheme(effectiveTheme === "dark" ? "light" : "dark");
    };

    const base: CommandItem[] = [
      { id: "home", title: "Go to Home", description: "Navigate to the homepage", shortcut: "H", icon: House, run: navigate("/") },
      { id: "work", title: "Go to Work", description: "View work experience", shortcut: "W", icon: BriefcaseBusiness, run: navigate("/work") },
      { id: "blog", title: "Go to Blog", description: "Browse all blog posts", shortcut: "B", icon: NotebookText, run: navigate("/blog") },
      { id: "resume", title: "Go to Resume", description: "View and download resume", shortcut: "R", icon: FileText, run: navigate("/resume") },
      { id: "gears", title: "Go to Gears", description: "View hardware and equipment setup", shortcut: "G", icon: Cpu, run: navigate("/gears") },
      { id: "books", title: "Go to Books", description: "View recommended books and reading list", shortcut: "K", icon: BookOpen, run: navigate("/books") },
      { id: "movies", title: "Go to Movies", description: "View favorite movies and shows", shortcut: "M", icon: Clapperboard, run: navigate("/movies") },
      { id: "setup", title: "Go to Setup", description: "View development setup and tools", shortcut: "S", icon: Wrench, run: navigate("/setup") },
      { id: "terminal", title: "Go to Terminal", description: "Terminal setup guide", icon: TerminalSquare, run: navigate("/terminal") },
      {
        id: "theme",
        title: "Toggle Theme",
        description: "Switch between light and dark mode",
        shortcut: "T",
        icon: SunMoon,
        run: toggleTheme,
      },
      {
        id: "palette",
        title: "Command Palette",
        description: "Open the command palette",
        shortcut: "⌘K",
        icon: Command,
        run: () => {
          playUiClick();
          setOpen(true);
        },
      },
      {
        id: "top",
        title: "Scroll to Top",
        description: "Scroll to the top of the page",
        shortcut: "⇧↑",
        icon: ArrowUpToLine,
        run: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      },
      {
        id: "copy-email",
        title: "Copy Email",
        description: "Copy email address to clipboard",
        shortcut: "⇧E",
        icon: Copy,
        run: async () => {
          await navigator.clipboard.writeText("ashwanthkumaravel@gmail.com");
          closePalette();
        },
      },
      {
        id: "share",
        title: "Share Page",
        description: "Share the current page",
        shortcut: "⇧S",
        icon: Share2,
        run: async () => {
          if (navigator.share) {
            await navigator.share({ title: document.title, url: window.location.href });
          } else {
            await navigator.clipboard.writeText(window.location.href);
          }
          closePalette();
        },
      },
      {
        id: "github",
        title: "View GitHub Profile",
        description: "Open GitHub profile in a new tab",
        shortcut: "⇧G",
        icon: Github,
        run: () => window.open("https://github.com/rabbive", "_blank", "noopener,noreferrer"),
      },
      {
        id: "spotify",
        title: "Open Spotify Song",
        description: "Open the currently playing Spotify song",
        shortcut: "⇧M",
        icon: Music2,
        run: () => window.open("https://open.spotify.com/", "_blank", "noopener,noreferrer"),
      },
    ];

    const soundCmd: CommandItem = {
      id: "ui-sounds",
      title: uiSoundsStoredOff ? "Enable UI sounds" : "Disable UI sounds",
      description: reducedMotion
        ? "Stored preference only while reduced motion is on (sounds stay muted)"
        : "Subtle click on theme toggle and opening the command palette",
      shortcut: "⇧U",
      icon: Volume2,
      run: () => {
        toggleUiSoundsStoredPreference();
        setUiSoundsStoredOff(typeof window !== "undefined" && window.localStorage.getItem(UI_SOUNDS_STORAGE) === "off");
        playUiClick();
      },
    };

    return [...base, soundCmd];
  }, [router, setTheme, resolvedTheme, closePalette, uiSoundsStoredOff, reducedMotion]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return commands;
    return commands.filter((c) => `${c.title} ${c.description}`.toLowerCase().includes(q));
  }, [commands, query]);

  const maxIdx = Math.max(0, filtered.length - 1);
  const safeIdx = Math.min(selected, maxIdx);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isCmdK) {
        e.preventDefault();
        if (open) {
          closePalette();
        } else if (!isClosing) {
          queueMicrotask(() => playUiClick());
          setOpen(true);
        }
        return;
      }
      if (!open && !isClosing) return;
      if (e.key === "Escape") closePalette();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => {
          const cur = Math.min(s, Math.max(0, filtered.length - 1));
          return Math.min(cur + 1, Math.max(0, filtered.length - 1));
        });
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => {
          const cur = Math.min(s, Math.max(0, filtered.length - 1));
          return Math.max(cur - 1, 0);
        });
      }
      if (e.key === "Enter") {
        const idx = Math.min(selected, Math.max(0, filtered.length - 1));
        if (filtered[idx]) {
          e.preventDefault();
          filtered[idx].run();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered, open, isClosing, selected, closePalette]);

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !overlayRef.current) return;
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    );
    const list = Array.from(focusable).filter((el) => el.offsetParent !== null);
    if (list.length === 0) return;
    const first = list[0];
    const last = list[list.length - 1];
    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          playUiClick();
          setOpen(true);
        }}
        className="motion-lift-colors flex items-center gap-1 rounded-[11px] border px-2 py-1 text-[11px] hover:bg-[var(--bg-hover)] hover:-translate-y-px"
        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
        aria-label="Open command palette (⌘K)"
      >
        <SearchIcon size={11} />
        <span className="hidden h-4 w-4 items-center justify-center rounded-[4px] border text-[10px] sm:flex" style={{ borderColor: "var(--border)" }}>⌘</span>
        <span className="hidden h-4 w-4 items-center justify-center rounded-[4px] border text-[10px] sm:flex" style={{ borderColor: "var(--border)" }}>K</span>
      </button>

      {(open || isClosing) && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className={`fixed inset-0 z-[120] bg-black/30 px-4 pt-20${isClosing ? " pointer-events-none" : ""}`}
          style={{
            animation: isClosing
              ? "fade-overlay-out var(--motion-duration-overlay-out) var(--motion-ease-exit) forwards"
              : "fade-overlay var(--motion-duration-overlay-in) var(--motion-ease-enter) forwards",
          }}
          onClick={closePalette}
          onKeyDownCapture={handleOverlayKeyDown}
        >
          <div
            className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border bg-[var(--bg-card)] shadow-xl"
            style={{
              borderColor: "var(--border)",
              animation: isClosing
                ? "palette-exit var(--motion-duration-panel-out) var(--motion-ease-exit) forwards"
                : "palette-enter var(--motion-duration-panel-in) var(--motion-ease-enter) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelected(0);
              }}
              placeholder="Type a command or search..."
              className="w-full appearance-none border-0 bg-transparent px-4 py-3 text-sm outline-none ring-0 shadow-none focus:outline-none focus:ring-0 focus-visible:outline-none"
              style={{ color: "var(--text-primary)", boxShadow: "none", WebkitAppearance: "none" }}
              role="combobox"
              aria-expanded="true"
              aria-controls={listboxId}
            />
            <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
            <div id={listboxId} role="listbox" className="max-h-80 overflow-y-auto p-1">
              {filtered.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelected(idx)}
                  onClick={() => item.run()}
                  className="motion-colors flex w-full items-start justify-between rounded-lg px-3 py-2 text-left"
                  style={{
                    backgroundColor: idx === safeIdx ? "var(--bg-hover)" : "transparent",
                  }}
                  role="option"
                  aria-selected={idx === safeIdx}
                >
                  <span className="flex items-start gap-2.5">
                    <item.icon size={15} strokeWidth={1.75} style={{ color: "var(--text-secondary)", marginTop: 1 }} />
                    <span>
                      <span className="block text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.title}</span>
                      <span className="block text-xs" style={{ color: "var(--text-secondary)" }}>{item.description}</span>
                    </span>
                  </span>
                  {item.shortcut && (
                    <span className="ml-4 text-xs" style={{ color: "var(--text-muted)" }}>{item.shortcut}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
