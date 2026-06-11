"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import MagneticButton from "./ui/MagneticButton";

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
  eyebrow = "Move AI from pilot to production safely",
  title = "Move AI from pilot to production safely.",
  primary = { label: "Book an AI Readiness Call", href: "/contact" },
  secondary = { label: "See Case Studies", href: "/work" },
}: Props) {
  return (
    <section className="relative bg-dark-primary border-t border-card-dark-border overflow-hidden grain-overlay">
      {/* Subtle ambient green — bounded so it doesn't bleed empty halo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 500px 180px at 70% 50%, rgba(6,182,212,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
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
              <MagneticButton strength={6}>
                <Link
                  href={primary.href}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white font-semibold px-7 py-4 rounded-md text-sm uppercase tracking-widest shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98]"
                >
                  {primary.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </MagneticButton>
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-7 py-4 rounded-md text-sm uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
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
