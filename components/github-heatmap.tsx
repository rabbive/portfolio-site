"use client";

import { useEffect, useState } from "react";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Payload = { contributions: Contribution[]; total: Record<string, number> };

const CELL_SIZE = 10;
const CELL_GAP = 2;
const DAYS_PER_WEEK = 7;

const LEVEL_COLORS: Record<number, string> = {
  0: "var(--bg-hover)",
  1: "color-mix(in srgb, var(--accent) 25%, var(--bg-hover))",
  2: "color-mix(in srgb, var(--accent) 50%, var(--bg-hover))",
  3: "color-mix(in srgb, var(--accent) 75%, var(--bg-hover))",
  4: "var(--accent)",
};

function groupIntoWeeks(contributions: Contribution[]): Contribution[][] {
  const weeks: Contribution[][] = [];
  for (let i = 0; i < contributions.length; i += DAYS_PER_WEEK) {
    weeks.push(contributions.slice(i, i + DAYS_PER_WEEK));
  }
  return weeks;
}

function SkeletonGrid() {
  const fakeWeeks = Array.from({ length: 53 }, () =>
    Array.from({ length: DAYS_PER_WEEK }),
  );
  return (
    <div style={{ overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: CELL_GAP,
          width: "fit-content",
        }}
      >
        {fakeWeeks.map((week, wi) => (
          <div key={wi} style={{ display: "flex", flexDirection: "column", gap: CELL_GAP }}>
            {week.map((_, di) => (
              <div
                key={di}
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  borderRadius: 2,
                  backgroundColor: "var(--bg-hover)",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function GitHubHeatmap() {
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github/contributions")
      .then((r) => r.json())
      .then((j: Payload) => {
        if (!cancelled) {
          setData(j);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <SkeletonGrid />;
  if (!data || data.contributions.length === 0) return null;

  const weeks = groupIntoWeeks(data.contributions);
  const totalYear = Object.values(data.total).reduce((s, n) => s + n, 0);

  return (
    <div className="space-y-2">
      <div style={{ overflowX: "auto" }}>
        <div
          style={{
            display: "flex",
            gap: CELL_GAP,
            width: "fit-content",
          }}
          role="img"
          aria-label="GitHub contribution calendar"
        >
          {weeks.map((week, wi) => (
            <div
              key={wi}
              style={{ display: "flex", flexDirection: "column", gap: CELL_GAP }}
            >
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                  style={{
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    borderRadius: 2,
                    backgroundColor: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                    cursor: "default",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {totalYear > 0 && (
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {totalYear.toLocaleString("en-US")} contributions in the last year
        </p>
      )}
    </div>
  );
}
