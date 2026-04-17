"use client";

import { approach } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-dark-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4">
              How We Deliver
            </h2>
            <p className="text-text-light-muted text-lg max-w-2xl mx-auto">
              A proven, agile methodology that ensures transparency, quality, and results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-card-dark-border">
          {approach.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.1}>
              <div className="group relative bg-card-dark p-8 hover:bg-accent/[0.06] transition-all duration-500 h-full">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <span className="font-heading text-5xl font-bold text-accent-light/[0.06] group-hover:text-accent-light/[0.15] transition-colors duration-500 block mb-6">
                  //{item.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-text-light mb-3 group-hover:text-accent-light transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-light-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
