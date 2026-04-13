"use client";

import { techPartners } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";

export default function Partners() {
  return (
    <section id="partners" className="py-28 lg:py-36 bg-dark-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
            <span className="text-xs text-accent tracking-widest uppercase font-medium">
              Ecosystem
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-wide mb-4">
            Our Strategic Partners
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-light-muted mb-16">
            We collaborate with industry leaders to deliver best-in-class
            solutions powered by cutting-edge technology.
          </p>
        </ScrollReveal>

        {/* Partner logos grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {techPartners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center h-20 rounded-xl border border-card-dark-border bg-card-dark/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
              >
                <span className="font-heading text-sm md:text-base font-bold text-text-light-muted group-hover:text-accent transition-colors tracking-wider">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="pt-12 border-t border-card-dark-border">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-light mb-4 tracking-wide">
              Let&apos;s Build Something
              <span className="gradient-text"> Extraordinary</span>
            </h3>
            <p className="text-text-light-muted mb-8 max-w-lg mx-auto">
              Ready to transform your business with technology? Let&apos;s start
              the conversation.
            </p>
            <Button href="/contact" size="lg">
              Start Your Project
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
