"use client";

import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-light-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Featured Work"
          subtitle="Real results from real projects. Here's how we've helped businesses build, launch, and grow."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-card-light-border bg-white p-8 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent tracking-wide">
                    {study.category}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-text-dark-muted/30 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-text-dark-muted leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                {/* Metric badge */}
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 border border-accent/10 self-start">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-accent">
                    {study.metric}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-card-light-border">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-light-primary text-text-dark-muted font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
