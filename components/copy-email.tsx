"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = async () => {
    setError(false);
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="motion-lift-colors inline-flex items-center gap-1 hover:-translate-y-px hover:underline"
      style={{ color: "var(--text-secondary)" }}
      aria-label="Copy email"
    >
      <span className="text-[15px]">
        {error ? "Copy failed" : copied ? "Copied" : email}
      </span>
      {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
    </button>
  );
}
