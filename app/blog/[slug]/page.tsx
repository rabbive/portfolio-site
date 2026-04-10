import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts, siteConfig } from "@/lib/site-data";
import { CalendarIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
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
          className="motion-lift-colors text-sm hover:underline hover:-translate-y-px"
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
      <div
        className="prose prose-sm max-w-none leading-relaxed dark:prose-invert prose-p:text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--text-secondary)] prose-a:underline prose-a:decoration-[var(--border)] hover:prose-a:opacity-80"
      >
        <p>{post.content}</p>
      </div>
    </article>
  );
}
