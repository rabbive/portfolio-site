import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Script
            src="https://cdn.jsdelivr.net/gh/adryd325/oneko@main/oneko.js"
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
