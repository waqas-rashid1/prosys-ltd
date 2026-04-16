import type { Metadata } from "next";
import { inter, roboto } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prosysltd.com"),
  title: {
    default:
      "PROSYS LTD | Web Development, AI Development, SaaS & MVP Experts",
    template: "%s | PROSYS LTD",
  },
  description:
    "PROSYS LTD is a full-spectrum software development company specializing in AI development, SaaS platforms, MVP engineering, web applications, SEO, AIEO, and digital marketing. We build what others only plan.",
  keywords: [
    "PROSYS LTD",
    "web development company",
    "AI development",
    "software development",
    "MVP development",
    "SaaS development",
    "SEO services",
    "AIEO",
    "AI Engine Optimization",
    "AI automations",
    "digital marketing",
    "custom software",
    "Next.js development",
    "React development",
    "startup development partner",
    "software house Pakistan",
    "software house Lahore",
  ],
  authors: [{ name: "PROSYS LTD", url: "https://prosysltd.com" }],
  creator: "PROSYS LTD",
  publisher: "PROSYS LTD",
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
    canonical: "https://prosysltd.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prosysltd.com",
    siteName: "PROSYS LTD",
    title: "PROSYS LTD | We Build What Others Only Plan",
    description:
      "Full-spectrum software development: AI, SaaS, MVPs, web apps, SEO, AIEO & digital marketing. Enterprise-quality engineering at startup speed.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PROSYS LTD - Engineering Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROSYS LTD | We Build What Others Only Plan",
    description:
      "Full-spectrum software development: AI, SaaS, MVPs, web apps, SEO, AIEO & digital marketing.",
    images: ["/og-image.svg"],
    creator: "@prosysltd",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${roboto.variable} h-full`}>
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-full antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-dark-primary focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
        <StickyCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
