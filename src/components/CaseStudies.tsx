"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const caseImages = [
  "/images/case-saas.jpg",
  "/images/case-health.jpg",
  "/images/case-automation.jpg",
  "/images/case-web.jpg",
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-28 lg:py-36 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                Featured Work
              </h2>
              <p className="text-text-dark-muted text-lg mt-3 max-w-xl">
                Real results from real projects.
              </p>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300">
              View All Work <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-card-light-border">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.08}>
              <div className="group bg-white hover:bg-light-primary transition-colors duration-500 h-full flex flex-col">
                {/* Image - no rounded corners */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={caseImages[i % caseImages.length]}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-3 py-1 text-[11px] font-semibold bg-accent text-white tracking-wide uppercase">
                      {study.category}
                    </span>
                  </div>
                  <div className="absolute top-5 right-5">
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-card-light-border">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-sm font-semibold text-accent">{study.metric}</span>
                    </div>
                    <div className="flex gap-2">
                      {study.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[11px] text-text-dark-muted font-medium">{tag}</span>
                      ))}
                    </div>
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
