"use client";

import { approach } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

export default function Approach() {
  return (
    <section id="approach" className="py-28 lg:py-36 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Our Approach"
          subtitle="A proven, agile methodology that ensures transparency, quality, and results at every stage."
          light
        />

        <div className="max-w-3xl mx-auto">
          {approach.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.15}>
              <div className="relative flex gap-6 md:gap-10 pb-12 last:pb-0 group">
                {/* Timeline line */}
                {i < approach.length - 1 && (
                  <div className="absolute left-[27px] md:left-[35px] top-16 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
                )}

                {/* Step number */}
                <div className="flex-shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] rounded-2xl border-2 border-accent/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <span className="font-heading text-lg md:text-xl font-bold text-accent tracking-wider">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-text-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
