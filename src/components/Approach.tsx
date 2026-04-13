"use client";

import { approach } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function Approach() {
  return (
    <section id="approach" className="py-28 lg:py-36 bg-dark-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light tracking-wide mb-4">
              How We Deliver
            </h2>
            <p className="text-text-light-muted text-lg max-w-2xl mx-auto">
              A proven, agile methodology that ensures transparency, quality, and results at every stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {approach.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-card-dark-border bg-card-dark p-7 hover:border-accent/50 hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden">
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="font-heading text-5xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500 block mb-4">
                  //{item.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-text-light tracking-wide mb-3 group-hover:text-accent transition-colors duration-300">
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
