import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";
import { CalendarIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="space-y-8 pt-8">
      <div>
        <Link
          href="/blog"
          className="motion-colors text-sm hover:underline"
          style={{ color: "var(--text-muted)" }}
        >
          ← Back to blog
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          {post.description}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
            <CalendarIcon size={12} />
            <span>{post.date}</span>
          </div>
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
        </div>
      </div>
      <hr style={{ borderColor: "var(--border)" }} />
      <div className="prose max-w-none text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
