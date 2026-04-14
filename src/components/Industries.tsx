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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <ScrollReveal key={industry.title} delay={i * 0.08}>
                <Link href="/industries" className="block group">
                  <div className="rounded-2xl border border-card-light-border bg-white p-7 hover:shadow-xl hover:shadow-accent/[0.05] hover:border-accent/30 transition-all duration-500 h-full">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {Icon && <Icon size={22} />}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-heading text-lg font-bold text-text-dark mb-2 group-hover:text-accent transition-colors duration-300">
                          {industry.title}
                        </h3>
                        <p className="text-text-dark-muted text-sm leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pl-[68px]">
                      Learn more <ArrowRight size={12} />
                    </div>
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
