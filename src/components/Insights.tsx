"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { insights } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                Latest Insights
              </h2>
              <p className="text-text-dark-muted text-lg mt-3 max-w-xl">
                Perspectives on technology, strategy, and digital transformation.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300">
              View All <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
          {insights.map((insight, i) => (
            <ScrollReveal key={insight.title} delay={i * 0.08}>
              <Link href="/blog" className="block group">
                <div className="bg-white p-8 hover:bg-light-primary transition-colors duration-400 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      {insight.category}
                    </span>
                    <span className="h-px flex-grow bg-card-light-border" />
                    <span className="flex items-center gap-1.5 text-text-dark-muted text-xs">
                      <Calendar size={11} />
                      {insight.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-text-dark-muted text-sm leading-relaxed flex-grow">
                    {insight.excerpt}
                  </p>

                  <div className="mt-6 pt-5 border-t border-card-light-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all duration-300">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
