"use client";

import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Briefcase,
} from "lucide-react";
import { industries } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Briefcase,
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Deep domain expertise across sectors that demand precision, compliance, and innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <ScrollReveal key={industry.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-card-dark-border bg-card-dark p-6 transition-all duration-500 hover:border-accent/40 hover:bg-gradient-to-br hover:from-accent/10 hover:to-transparent h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-light mb-2 tracking-wide">
                    {industry.title}
                  </h3>
                  <p className="text-text-light-muted text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
