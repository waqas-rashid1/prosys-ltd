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

const accentColors = [
  "bg-emerald-50 text-emerald-600 border-emerald-100",
  "bg-rose-50 text-rose-600 border-rose-100",
  "bg-amber-50 text-amber-600 border-amber-100",
  "bg-violet-50 text-violet-600 border-violet-100",
  "bg-sky-50 text-sky-600 border-sky-100",
  "bg-teal-50 text-teal-600 border-teal-100",
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <ScrollReveal key={industry.title} delay={i * 0.08}>
                <Link href="/industries" className="block group">
                  <div className="rounded-2xl border border-card-light-border bg-white p-7 hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1 transition-all duration-500 h-full">
                    {/* Icon with unique color per industry */}
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 ${accentColors[i]} group-hover:scale-110 transition-transform duration-300`}>
                      {Icon && <Icon size={24} />}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-dark mb-2 group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-text-dark-muted text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Explore <ArrowRight size={14} />
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
