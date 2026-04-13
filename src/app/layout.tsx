import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROSYS LTD | Engineering Digital Excellence",
  description:
    "PROSYS LTD is a global technology company delivering cutting-edge software solutions, AI transformation, and digital innovation to enterprises worldwide.",
  keywords: [
    "software house",
    "digital transformation",
    "AI solutions",
    "cloud services",
    "enterprise software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
