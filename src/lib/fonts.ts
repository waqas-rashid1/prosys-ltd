import { Manrope, Open_Sans } from "next/font/google";

/**
 * Heading font — Manrope.
 * Modern, enterprise-grade geometric sans. Loads the full weight range
 * (200 – 800) so we can use everything from thin editorial titles to
 * bold display headlines.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * Body font — Open Sans. Neutral, highly legible workhorse.
 */
export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
