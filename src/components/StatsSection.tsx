"use client";

import { stats } from "@/lib/constants";
import StatsCounter from "./ui/StatsCounter";
import ScrollReveal from "./ui/ScrollReveal";

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-light-primary border-y border-card-light-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs text-text-dark-muted/60 tracking-[0.2em] uppercase font-medium mb-12">
            Delivering measurable impact since 2024
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-text-dark-muted text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
