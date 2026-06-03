import type { Metadata, Viewport } from "next";
import { manrope } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import ConsentGate from "@/components/ConsentGate";
import ScrollProgress from "@/components/ScrollProgress";
import CommandMenu from "@/components/CommandMenu";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prosysltd.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "PROSYS LTD | Deploy AI Safely Into Real Business Operations",
    template: "%s | PROSYS LTD",
  },
  description:
    "PROSYS LTD helps companies deploy AI safely into real business operations — secure agents, governed workflows, enterprise knowledge systems, integrations, and production monitoring.",
  keywords: [
    "PROSYS LTD",
    "safe AI deployment",
    "AI deployment company",
    "secure AI agents",
    "AI workflow automation",
    "AI governance",
    "enterprise AI knowledge systems",
    "secure RAG",
    "AI integration",
    "AI security testing",
    "prompt injection testing",
    "AI monitoring",
    "production AI",
    "AI consulting Pakistan",
    "AI consulting Lahore",
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "PROSYS LTD",
    title: "PROSYS LTD | Deploy AI safely, from pilots to production.",
    description:
      "Secure AI agents, governed workflows, enterprise knowledge systems, integrations, and monitoring — AI deployed safely into real operations.",
    // Explicit OG image so previewers (Slack, WhatsApp, LinkedIn,
    // iMessage, Twitter, Facebook) reliably surface the social card.
    // The path resolves against metadataBase, so it becomes an
    // absolute URL like https://<host>/opengraph-image.
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PROSYS LTD — Deploy AI safely into real business operations.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROSYS LTD | Deploy AI safely, from pilots to production.",
    description:
      "Secure AI agents, governed workflows, enterprise knowledge systems, integrations, and monitoring — AI deployed safely into real operations.",
    creator: "@prosysltd",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PROSYS LTD — Deploy AI safely into real business operations.",
      },
    ],
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
      className={`${manrope.variable} h-full`}
    >
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
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
        <ConsentGate />
      </body>
    </html>
  );
}
