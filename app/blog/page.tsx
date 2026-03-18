"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/site-data";
import { BlogCard } from "@/components/blog-card";

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags))).sort();

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <div className="space-y-8 pt-8">
      <div>
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          Thoughts, tutorials, and insights on engineering and programming.
        </p>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors"
          style={{
            borderColor: activeTag === null ? "var(--text-primary)" : "var(--border)",
            backgroundColor: activeTag === null ? "var(--text-primary)" : "transparent",
            color: activeTag === null ? "var(--bg)" : "var(--text-secondary)",
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              borderColor: activeTag === tag ? "var(--text-primary)" : "var(--border)",
              backgroundColor: activeTag === tag ? "var(--text-primary)" : "transparent",
              color: activeTag === tag ? "var(--bg)" : "var(--text-secondary)",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} showTags />
        ))}
      </div>
    </div>
  );
}
