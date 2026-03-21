import type { Metadata } from "next";
import { gears } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gears - My Setup & Tools",
  description: "My gears and tools I use to get my work done.",
};

export default function GearsPage() {
  const categories = Array.from(new Set(gears.map((g) => g.category)));

  return (
    <div className="space-y-10 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Gears</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          My gears and tools I use to get my work done.
        </p>
      </div>
      {categories.map((cat) => (
        <section key={cat} className="space-y-4">
          <h2 className="text-lg font-semibold">{cat}</h2>
          <div className="space-y-3">
            {gears
              .filter((g) => g.category === cat)
              .map((gear) => (
                <div
                  key={gear.name}
                  className="flex items-center gap-3 rounded-xl border p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  {gear.index && (
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-medium"
                      style={{ backgroundColor: "var(--bg-hover)", color: "var(--text-muted)" }}
                    >
                      {gear.index}
                    </span>
                  )}
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {gear.name}
                  </h3>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
