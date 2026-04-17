"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

type Props = {
  eyebrow?: string;
  title?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/**
 * Reusable final-page CTA band. Drop in above <Footer /> on pages that
 * don't already have a dedicated conversion section.
 */
export default function FinalCTA({
  eyebrow = "Let's build something that lasts",
  title = "Ready to ship enterprise-grade software?",
  primary = { label: "Book a Call", href: "/contact" },
  secondary = { label: "See Our Work", href: "/work" },
}: Props) {
  return (
    <section className="relative bg-dark-primary border-t border-card-dark-border overflow-hidden grain-overlay">
      {/* Ambient green glow — matches footer/hero aesthetic */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(12,108,54,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.05] blur-[200px] rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent-light font-semibold mb-5">
                {eyebrow}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-2xl">
                {title}
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                href={primary.href}
                className="group inline-flex items-center justify-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white font-semibold px-7 py-4 rounded-md text-sm uppercase tracking-widest transition-all duration-300"
              >
                {primary.label}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-white/60 font-medium px-7 py-4 rounded-md text-sm uppercase tracking-widest transition-all duration-300"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
