import type { Metadata } from "next";
import { movies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Movies - My Favorites",
  description: "Movies and shows that have inspired and entertained me.",
};

export default function MoviesPage() {
  return (
    <div className="space-y-8 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Movies</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          Movies and shows that have inspired and entertained me.
        </p>
      </div>
      <div className="space-y-3">
        {movies.map((movie) => (
          <div
            key={movie.title}
            className="flex items-center justify-between rounded-xl border p-4"
            style={{ borderColor: "var(--border)" }}
          >
            <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {movie.title}
            </h3>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {movie.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
