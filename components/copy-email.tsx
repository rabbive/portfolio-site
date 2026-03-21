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
      className="motion-lift-colors inline-flex items-center gap-1 hover:-translate-y-px hover:underline"
      style={{ color: "var(--text-secondary)" }}
      aria-label="Copy email"
    >
      <span className="text-[15px]">{copied ? "Copied" : email}</span>
      {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
    </button>
  );
}
