import type { Metadata } from "next";
import { books } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Books - My Reading List",
  description: "A collection of books that have influenced my thinking and growth.",
};

export default function BooksPage() {
  const categories = Array.from(new Set(books.map((b) => b.category)));

  return (
    <div className="space-y-10 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Books</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          A collection of books that have influenced my thinking and growth.
        </p>
      </div>
      {categories.map((cat) => (
        <section key={cat} className="space-y-4">
          <h2 className="text-lg font-semibold">{cat}</h2>
          <div className="space-y-3">
            {books
              .filter((b) => b.category === cat)
              .map((book) => (
                <div
                  key={book.title}
                  className="rounded-xl border p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {book.title}
                  </h3>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
                    {book.author}
                  </p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
