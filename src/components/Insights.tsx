"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { insights } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import ScrollReveal from "./ui/ScrollReveal";

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-light-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Featured Insights"
          subtitle="Stay ahead with our latest thinking on technology, innovation, and digital transformation."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <ScrollReveal key={insight.title} delay={i * 0.1}>
              <Card variant="light" className="group h-full flex flex-col">
                {/* Category badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent tracking-wide">
                    {insight.category}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-text-dark mb-3 tracking-wide group-hover:text-accent transition-colors duration-300 leading-snug">
                  {insight.title}
                </h3>

                <p className="text-text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                  {insight.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                  <div className="flex items-center gap-2 text-text-dark-muted text-xs">
                    <Calendar size={12} />
                    {insight.date}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:gap-2.5 transition-all duration-300"
                  >
                    Read More <ArrowRight size={12} />
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
