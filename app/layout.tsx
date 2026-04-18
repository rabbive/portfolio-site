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
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          <Script
            src="/oneko.js"
            strategy="afterInteractive"
          />
          <div className="mx-auto min-h-screen max-w-[680px] px-6">
            <SiteHeader />
            <main className="motion-page-enter pb-16">{children}</main>
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
