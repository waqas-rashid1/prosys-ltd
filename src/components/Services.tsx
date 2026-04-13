"use client";

import {
  BrainCircuit,
  BarChart3,
  Monitor,
  Cloud,
  ShieldCheck,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import ScrollReveal from "./ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  BarChart3,
  Monitor,
  Cloud,
  ShieldCheck,
  Workflow,
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-light-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Driving innovation and transforming businesses with intelligent, scalable technology solutions."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <Card variant="light" className="group h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-text-dark-muted leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={14} />
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
