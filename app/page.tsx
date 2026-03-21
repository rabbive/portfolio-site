import Link from "next/link";
import Image from "next/image";
import { siteConfig, experiences, blogPosts } from "@/lib/site-data";
import { ExperienceCard } from "@/components/experience-card";
import { BlogCard } from "@/components/blog-card";
import { SocialIcon, SpotifyIcon } from "@/components/icons";
import { CopyEmailButton } from "@/components/copy-email";

export default function HomePage() {
  const previewExperiences = experiences.slice(0, 3);
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-16 pt-8">
      {/* Hero */}
      <section className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full border p-0.5" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
            <Image src="/assets/ram.webp" alt="Ramkrishna avatar" width={64} height={64} className="h-full w-full rounded-full object-cover" />
          </div>
          <div>
            <h1 className="text-[40px] leading-[1.06] font-semibold tracking-[-0.02em] sm:text-[42px]">{siteConfig.name}</h1>
            <p className="flex items-center gap-1 text-sm" style={{ color: "var(--text-secondary)" }}>
              {siteConfig.tagline} ·{" "}
              <CopyEmailButton email={siteConfig.email} />
            </p>
          </div>
        </div>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {siteConfig.description}
        </p>

        {/* Spotify */}
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <SpotifyIcon size={16} />
          <span>Last played</span>
          <span>—</span>
          <span className="truncate" style={{ color: "var(--text-secondary)" }}>
            Maula Mere Maula · Roop Kumar Rathod, Sayeed Quadri
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5">
          {siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-lift-colors hover:-translate-y-px hover:opacity-70"
              style={{ color: "var(--text-secondary)" }}
              aria-label={social.name}
            >
              <SocialIcon name={social.icon} size={15} />
            </a>
          ))}
        </div>

        <hr style={{ borderColor: "var(--border)" }} />
      </section>

      {/* Experience */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold">Experience</h2>
        <div className="space-y-6">
          {previewExperiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} showDetails longMeta />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/work"
              className="motion-lift-colors rounded-lg border px-4 py-2 text-sm font-medium hover:-translate-y-px hover:bg-[var(--bg-hover)]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            Show all work experiences
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold">Blog</h2>
        <div className="space-y-6">
          {previewPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/blog"
              className="motion-lift-colors rounded-lg border px-4 py-2 text-sm font-medium hover:-translate-y-px hover:bg-[var(--bg-hover)]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            Show all blogs
          </Link>
        </div>
      </section>

      {/* Development */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold">Development</h2>
        <div className="space-y-3">
          {[
            { title: "Gears", desc: "Tools, devices, and software I use to get work done.", href: "/gears" },
            { title: "Setup", desc: "VSCode / Cursor configuration and extensions guide.", href: "/setup" },
            { title: "Terminal", desc: "Zsh, Starship, Fastfetch, and shell configuration.", href: "/terminal" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="motion-lift-colors block rounded-xl border p-4 hover:-translate-y-px hover:bg-[var(--bg-hover)]"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold">Personal</h2>
        <div className="space-y-3">
          {[
            { title: "Books", desc: "Books that have influenced my thinking and growth.", href: "/books" },
            { title: "Movies", desc: "Films and shows that have inspired and entertained me.", href: "/movies" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="motion-lift-colors block rounded-xl border p-4 hover:-translate-y-px hover:bg-[var(--bg-hover)]"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section>
        <blockquote
          className="relative overflow-hidden rounded-xl border p-6"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
        >
          <span className="pointer-events-none absolute left-4 top-4 text-8xl font-semibold opacity-5">“</span>
          <p className="font-mono text-sm italic" style={{ color: "var(--text-secondary)" }}>
            &ldquo;{siteConfig.quote.text}&rdquo;
          </p>
          <footer className="mt-2 text-right font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            — {siteConfig.quote.author}, {siteConfig.quote.source}
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
