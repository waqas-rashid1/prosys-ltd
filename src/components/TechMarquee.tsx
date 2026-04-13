"use client";

import { techStack } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-16 bg-dark-primary border-y border-card-dark-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-8">
        <ScrollReveal>
          <p className="text-center text-xs text-text-light-muted/60 tracking-[0.2em] uppercase font-medium">
            Technologies We Work With
          </p>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-primary to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
              <span className="font-heading text-sm md:text-base font-bold text-text-light-muted/40 tracking-wider whitespace-nowrap hover:text-accent transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
