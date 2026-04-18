"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/lib/blog-data";

export default function BlogListing() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div id="articles" className="scroll-mt-20">
      {/* Featured */}
      {featured && (
        <section className="bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14 lg:py-20">
            <ScrollReveal>
              <div className="flex items-center justify-between gap-6 mb-8 flex-wrap">
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium">Featured</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all cursor-pointer ${
                        activeCategory === cat
                          ? "bg-accent border-accent text-white"
                          : "bg-white border-card-light-border text-text-dark-muted hover:border-accent/50 hover:text-accent"
                      }`}
                      aria-pressed={activeCategory === cat}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="relative overflow-hidden">
                  <div className="relative h-72 md:h-[28rem] overflow-hidden">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-1000" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        <span className="px-3 py-1 text-[11px] font-semibold bg-accent text-white uppercase tracking-wider">{featured.category}</span>
                        <span className="text-white/60 text-xs flex items-center gap-1.5"><Calendar size={11} />{featured.date}</span>
                        <span className="text-white/60 text-xs flex items-center gap-1.5"><Clock size={11} />{featured.readTime}</span>
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-snug">
                        {featured.title}
                      </h2>
                      <p className="text-white/70 leading-relaxed mb-5 hidden md:block max-w-xl">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        {featured.author && (
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/50 to-accent/10 border border-accent/30 flex items-center justify-center text-accent-light font-heading font-bold text-xs">
                              {featured.author.initial}
                            </div>
                            <span className="text-xs text-white/70">{featured.author.name}</span>
                          </div>
                        )}
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light group-hover:gap-3 transition-all">
                          Read Article <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">
              {activeCategory === "All" ? "Latest" : activeCategory}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-14">
              {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
            </h2>
          </ScrollReveal>

          {rest.length === 0 ? (
            <p className="text-text-dark-muted text-sm">No additional articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="border border-card-light-border bg-white hover:shadow-xl hover:shadow-black/[0.04] hover:border-accent/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">{post.category}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-3 text-[11px] text-text-dark-muted">
                          <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                        </div>
                        <h3 className="font-heading text-lg font-bold text-text-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-text-dark-muted text-sm leading-relaxed flex-grow line-clamp-3">{post.excerpt}</p>
                        <div className="mt-5 pt-5 border-t border-card-light-border flex items-center justify-between">
                          {post.author && (
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-accent/20 flex items-center justify-center text-accent font-heading font-bold text-[10px]">
                                {post.author.initial}
                              </div>
                              <span className="text-[11px] text-text-dark-muted">{post.author.name}</span>
                            </div>
                          )}
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all">
                            Read Article <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
