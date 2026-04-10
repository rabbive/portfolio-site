import type { MetadataRoute } from "next";
import { siteConfig, blogPosts } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/work",
    "/blog",
    "/resume",
    "/books",
    "/movies",
    "/gears",
    "/setup",
    "/terminal",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.siteUrl}${path}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((p) => ({
      url: `${siteConfig.siteUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
  ];
}
