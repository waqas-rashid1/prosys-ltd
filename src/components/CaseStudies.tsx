"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const gradients = [
  "from-accent/30 via-cyan-500/20 to-teal-400/30",
  "from-cyan-400/30 via-accent/15 to-emerald-400/25",
  "from-teal-300/30 via-accent/20 to-cyan-500/30",
  "from-emerald-400/25 via-cyan-400/20 to-accent/30",
];

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
              <div className="group rounded-2xl border border-card-light-border bg-white overflow-hidden hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
                {/* Image placeholder with gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${gradients[i % gradients.length]} bg-dark-secondary overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                    <div className="absolute w-12 h-12 rounded-xl bg-white/15 -rotate-12 translate-x-8 translate-y-4 group-hover:rotate-12 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/90 text-dark-primary tracking-wide">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ArrowUpRight
                      size={20}
                      className="text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-text-dark-muted leading-relaxed mb-6 flex-grow">
                    {study.description}
                  </p>

                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 border border-accent/10 self-start">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-accent">{study.metric}</span>
                  </div>

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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
