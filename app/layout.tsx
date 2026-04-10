import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          <Script
            src="https://cdn.jsdelivr.net/gh/adryd325/oneko@main/oneko.js"
            strategy="afterInteractive"
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:border focus:bg-[var(--bg-card)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          >
            Skip to main content
          </a>
          <div className="mx-auto min-h-screen max-w-[680px] px-6">
            <SiteHeader />
            <main id="main-content" className="motion-page-enter pb-16">{children}</main>
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
