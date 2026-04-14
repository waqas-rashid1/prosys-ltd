"use client";

import { techPartners } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function Partners() {
  const row1 = [...techPartners, ...techPartners, ...techPartners];
  const row2 = [...techPartners.slice().reverse(), ...techPartners.slice().reverse(), ...techPartners.slice().reverse()];

  return (
    <section id="partners" className="py-20 lg:py-28 bg-dark-secondary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light text-center">
            Our Strategic
            <span className="gradient-text"> Partners</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Row 1: scrolls left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-secondary to-transparent z-10" />
        <div className="flex animate-marquee">
          {row1.map((partner, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 mx-3 flex items-center justify-center h-16 px-8 rounded-xl border border-card-dark-border bg-card-dark/40"
            >
              <span className="font-heading text-sm font-bold text-text-light-muted/50 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-secondary to-transparent z-10" />
        <div className="flex animate-marquee-reverse">
          {row2.map((partner, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 mx-3 flex items-center justify-center h-16 px-8 rounded-xl border border-card-dark-border bg-card-dark/40"
            >
              <span className="font-heading text-sm font-bold text-text-light-muted/50 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
