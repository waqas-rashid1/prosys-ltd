"use client";

import {
  Code2,
  Cpu,
  BrainCircuit,
  Rocket,
  Cloud,
  Bot,
  Search,
  Sparkles,
  Megaphone,
  Palette,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import ScrollReveal from "./ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  BrainCircuit,
  Rocket,
  Cloud,
  Bot,
  Search,
  Sparkles,
  Megaphone,
  Palette,
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-light-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="What We Build"
          subtitle="Full-spectrum software development and digital growth services — from concept to scale."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.06}>
                <Card variant="light" className="group h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="font-heading text-base font-bold text-text-dark mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:gap-2.5 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={12} />
                  </a>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
