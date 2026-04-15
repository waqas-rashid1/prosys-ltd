"use client";

import Link from "next/link";
import {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase, ArrowRight,
} from "lucide-react";
import { industries } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase,
};

export default function Industries() {
  return (
    <section id="industries" className="py-28 lg:py-36 bg-light-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-4">
              Discover Our Impact
              <span className="gradient-text"> Across Industries</span>
            </h2>
            <p className="text-text-dark-muted text-lg max-w-2xl mx-auto">
              Deep domain expertise across sectors that demand precision, compliance, and innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <ScrollReveal key={industry.title} delay={i * 0.06}>
                <Link href="/industries" className="block group">
                  <div className="bg-white p-8 hover:bg-light-primary transition-all duration-400 h-full">
                    <div className="w-12 h-12 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {Icon && <Icon size={22} />}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-2 group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-text-dark-muted text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
