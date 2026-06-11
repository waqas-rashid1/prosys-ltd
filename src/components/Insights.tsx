"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";

export default function Insights() {
  // Surface the most on-brand AI deployment articles first, then backfill
  // with the next available posts so the section always renders three cards.
  const preferredSlugs = [
    "why-every-startup-needs-ai-strategy-2026",
    "building-ai-agents-production",
    "mvp-to-scale-architecture-decisions",
  ];
  const preferred = preferredSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  const featured = [
    ...preferred,
    ...blogPosts.filter((p) => !preferredSlugs.includes(p.slug)),
  ].slice(0, 3);

  return (
    <section id="insights" className="py-14 lg:py-20 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-4">
                Field Notes
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight mb-5">
                Insights from{" "}
                <span className="gradient-text">delivered engagements.</span>
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed">
                Safe AI deployment lessons, agent and governance patterns, and what works in production — written by the engineers actually doing the work.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-text-dark/10 text-text-dark text-sm font-medium transition-all duration-300 self-start md:self-auto shrink-0 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Read all articles
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
          {featured.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <SpotlightCard variant="light" className="h-full">
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="bg-white p-8 hover:bg-light-primary transition-colors duration-400 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="h-px flex-grow bg-card-light-border" />
                    <span className="flex items-center gap-1.5 text-text-dark-muted text-xs">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-text-dark-muted text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 pt-5 border-t border-card-light-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all duration-300">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
