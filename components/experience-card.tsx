"use client";

import { useState } from "react";
import type { Experience } from "@/lib/site-data";
import { ChevronDownIcon } from "./icons";

export function ExperienceCard({
  experience,
  showDetails = false,
  longMeta = false,
}: {
  experience: Experience;
  showDetails?: boolean;
  longMeta?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              {experience.company}
            </h3>
            {experience.current && (
              <span className="flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium" style={{ borderColor: "var(--border)", color: "var(--accent)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Working
              </span>
            )}
          </div>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {experience.role}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {longMeta ? experience.dateLong : experience.dateShort}
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {longMeta ? experience.locationLong : experience.locationShort}
          </p>
        </div>
      </div>

      {showDetails && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="motion-colors mt-2 flex items-center gap-1 text-[11px] hover:underline"
            style={{ color: "var(--text-muted)" }}
            aria-expanded={expanded}
            aria-label="Expand details"
          >
            <span
              className="motion-lift"
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ChevronDownIcon size={14} />
            </span>
            <span>{expanded ? "Hide" : "Expand"} details</span>
          </button>

          <div
            className="grid"
            style={{
              gridTemplateRows: expanded ? "1fr" : "0fr",
              opacity: expanded ? 1 : 0,
              marginTop: expanded ? 16 : 0,
              transitionProperty: "grid-template-rows, opacity, margin-top",
              transitionDuration: expanded
                ? "var(--motion-duration-expand-open)"
                : "var(--motion-duration-expand-close)",
              transitionTimingFunction: "var(--motion-ease-standard)",
            }}
          >
            <div className="space-y-4 overflow-hidden" style={{ color: "var(--text-secondary)" }}>
              <div>
                <p className="mb-1 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  {experience.dateLong}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {experience.locationLong}
                </p>
              </div>
              {experience.technologies.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                    Technologies &amp; Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border px-2 py-0.5 text-xs"
                        style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {experience.highlights.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                    What I&apos;ve done
                  </h4>
                  <ul className="space-y-1.5">
                    {experience.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--text-muted)" }}>•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
