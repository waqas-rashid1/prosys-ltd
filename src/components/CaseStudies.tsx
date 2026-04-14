"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

export default function CaseStudies() {
  return (
    <section id="work" className="py-28 lg:py-36 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-wide leading-tight">
                Featured Work
              </h2>
              <p className="text-text-dark-muted text-lg mt-3 max-w-xl">
                Real results from real projects. Here&apos;s how we&apos;ve helped businesses build, launch, and grow.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300 self-start md:self-auto"
            >
              View All Work <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-card-light-border bg-white overflow-hidden hover:shadow-2xl hover:shadow-accent/[0.06] hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
                {/* Dark header with teal glow */}
                <div className="relative h-48 bg-dark-primary overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-accent/[0.08] blur-[80px] rounded-full translate-x-1/4 translate-y-1/4 group-hover:bg-accent/[0.15] transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-xl bg-white/[0.06] rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute w-8 h-8 rounded-lg bg-white/[0.08] -rotate-12 translate-x-6 translate-y-3 group-hover:rotate-12 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-lg bg-accent text-dark-primary tracking-wide">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight
                      size={18}
                      className="text-white/20 group-hover:text-accent transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                    {study.description}
                  </p>

                  <div className="mb-5 inline-flex items-center gap-2 self-start">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-accent">{study.metric}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-card-light-border">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg bg-light-primary text-text-dark-muted font-medium"
                      >
                        {tag}
                      </span>
                    ))}
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
