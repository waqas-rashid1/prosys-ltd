"use client";

import Link from "next/link";
import {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase,
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
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-wide mb-4">
              Discover Our Impact
              <span className="gradient-text"> Across Industries</span>
            </h2>
            <p className="text-text-dark-muted text-lg max-w-2xl mx-auto">
              Deep domain expertise across sectors that demand precision, compliance, and innovation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <Link
                  key={industry.title}
                  href="/industries"
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-card-light-border bg-white hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300 flex-shrink-0">
                    {Icon && <Icon size={20} />}
                  </div>
                  <span className="font-heading text-base font-bold text-text-dark tracking-wide group-hover:text-accent transition-colors duration-300">
                    {industry.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
