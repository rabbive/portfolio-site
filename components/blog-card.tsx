import Link from "next/link";
import type { BlogPost } from "@/lib/site-data";
import { CalendarIcon } from "./icons";

export function BlogCard({ post, showTags = false }: { post: BlogPost; showTags?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold group-hover:underline" style={{ color: "var(--text-primary)" }}>
            {post.title}
          </h3>
          <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            {post.description}
          </p>
          <div className="mt-2 flex items-center gap-3">
            {showTags && post.tags.length > 0 && (
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border px-2 py-0.5 text-xs"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
              <CalendarIcon size={12} />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
        <span
          className="mt-1 shrink-0 text-sm transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          Read more →
        </span>
      </div>
    </Link>
  );
}
