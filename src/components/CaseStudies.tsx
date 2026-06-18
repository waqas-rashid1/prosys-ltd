"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";
import SectionHeading from "./ui/SectionHeading";

export default function CaseStudies() {
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <section id="work" className="py-14 lg:py-20 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Work"
          aside={
            <Link href="/work" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300">
              View All Work <ArrowRight size={16} />
            </Link>
          }
          className="mb-14"
        />

        {/* Featured - full width cinematic card */}
        <ScrollReveal>
          <Link href={`/work/${featured.slug}`} className="group block mb-8">
            <div className="relative h-72 md:h-[28rem] overflow-hidden">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-1000" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <span className="px-3 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider mb-4 inline-block">
                    {featured.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-5 max-w-xl hidden md:block">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm font-semibold text-accent-light">{featured.metric}</span>
                    </div>
                    <div className="flex gap-3">
                      {featured.tags.map((t) => (
                        <span key={t} className="text-xs text-white/40">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* 3 smaller cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
          {rest.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.08}>
              <Link href={`/work/${study.slug}`} className="group block bg-white hover:bg-light-primary transition-colors h-full">
                <div className="relative h-44 overflow-hidden">
                  <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-base font-bold text-text-dark mb-2 group-hover:text-accent transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-xs font-semibold text-accent">{study.metric}</span>
                    </div>
                    <span className="text-[11px] text-text-dark-muted">{study.tags[0]}</span>
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
