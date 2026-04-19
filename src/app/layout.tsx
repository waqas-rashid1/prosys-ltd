import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { montserrat, openSans } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import ScrollProgress from "@/components/ScrollProgress";
import CommandMenu from "@/components/CommandMenu";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prosysltd.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PROSYS LTD | Enterprise-grade Product Engineering, AI & Growth Systems",
    template: "%s | PROSYS LTD",
  },
  description:
    "PROSYS LTD is a senior-staffed product engineering firm building enterprise-grade software, AI systems, and growth platforms for funded startups and mid-market teams.",
  keywords: [
    "PROSYS LTD",
    "enterprise product engineering",
    "AI development",
    "SaaS development",
    "MVP development",
    "cloud architecture",
    "software development",
    "SEO",
    "AIEO",
    "AI Engine Optimization",
    "digital marketing",
    "Next.js agency",
    "React development",
    "startup development partner",
    "software house Pakistan",
    "software house Lahore",
  ],
  authors: [{ name: "PROSYS LTD", url: SITE_URL }],
  creator: "PROSYS LTD",
  publisher: "PROSYS LTD",
  applicationName: "PROSYS LTD",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "PROSYS LTD",
    title: "PROSYS LTD | Architecting scalable systems, end-to-end.",
    description:
      "Enterprise-grade product engineering, AI, and growth systems — delivered by senior teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROSYS LTD | Architecting scalable systems, end-to-end.",
    description:
      "Enterprise-grade product engineering, AI, and growth systems — delivered by senior teams.",
    creator: "@prosysltd",
  },
  category: "Technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${openSans.variable} h-full`}
    >
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        {children}
        <StickyCTA />
        <CookieConsent />
        <CommandMenu />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
