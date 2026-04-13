"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { insights } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function Insights() {
  return (
    <section id="insights" className="py-28 lg:py-36 bg-light-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-wide leading-tight">
                Featured Insights
              </h2>
              <p className="text-text-dark-muted text-lg mt-3 max-w-xl">
                Stay ahead with our latest thinking on technology, innovation, and digital growth.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300 self-start lg:self-auto"
            >
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory">
          {insights.map((insight, i) => (
            <ScrollReveal key={insight.title} delay={i * 0.1} className="min-w-[320px] lg:min-w-0 snap-start">
              <div className="group rounded-2xl border border-card-light-border bg-white overflow-hidden hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-dark-secondary to-dark-primary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl gradient-bg opacity-20 rotate-12" />
                    <div className="absolute w-10 h-10 rounded-xl gradient-bg opacity-40 -rotate-12 translate-x-6 translate-y-4" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/90 text-dark-primary tracking-wide">
                      {insight.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
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
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:gap-2.5 transition-all duration-300"
                    >
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
