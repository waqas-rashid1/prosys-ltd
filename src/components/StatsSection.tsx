"use client";

import { stats } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-light-primary border-y border-card-light-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "radial-gradient(ellipse 800px 300px at 50% 100%, rgba(12,108,54,0.04) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-4">
              By the numbers
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark leading-tight tracking-tight max-w-2xl mx-auto">
              Measurable impact, not vanity metrics.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-card-light-border border border-card-light-border rounded-md overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white py-10 px-6 group hover:bg-light-primary transition-colors duration-300">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-3 tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                  />
                </div>
                <div className="text-text-dark-muted text-xs uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </div>
                <div className="mt-4 mx-auto h-[2px] w-8 bg-card-light-border group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
