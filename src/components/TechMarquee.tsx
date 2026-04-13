"use client";

import { techStack } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function TechMarquee() {
  return (
    <section className="py-28 lg:py-36 bg-dark-primary relative overflow-hidden">
      {/* Teal radial glow in bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.06] blur-[200px] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light tracking-wide mb-4">
              Our Tech Stack
            </h2>
            <p className="text-text-light-muted text-lg max-w-2xl mx-auto">
              Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="group flex items-center justify-center h-16 md:h-20 rounded-xl bg-white hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="font-heading text-xs md:text-sm font-bold text-text-dark tracking-wide group-hover:text-accent transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
