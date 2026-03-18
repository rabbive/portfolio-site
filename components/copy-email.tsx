"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 transition-colors hover:underline"
      style={{ color: "var(--text-secondary)" }}
      aria-label="Copy email"
    >
      Email {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
    </button>
  );
}
