"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ShareButtons from "@/components/ui/ShareButtons";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/constants";

export default function BlogArticleContent({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug)!;
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  // Related = same category first, then fill from others
  const byCategory = blogPosts.filter((p) => p.slug !== slug && p.category === post.category);
  const byOther = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category);
  const relatedPosts = [...byCategory, ...byOther].slice(0, 3);

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const author = post.author;

  return (
    <main id="main-content">
      {/* Hero image */}
      <section className="relative h-dvh min-h-[640px] flex items-end overflow-hidden bg-dark-primary">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image src={post.image} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-dark-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/80 via-dark-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-16 lg:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-3 py-1 text-[11px] font-semibold bg-accent text-white uppercase tracking-wider rounded-sm">{post.category}</span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs"><Calendar size={12} />{post.date}</span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs"><Clock size={12} />{post.readTime}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">{post.title}</h1>
            {post.excerpt && (
              <p className="mt-6 text-lg md:text-xl text-text-light-muted leading-relaxed max-w-3xl">{post.excerpt}</p>
            )}
            {author && (
              <div className="mt-8 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-accent/30 flex items-center justify-center text-accent-light font-heading font-black"
                >
                  {author.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{author.name}</p>
                  <p className="text-xs text-white/60">{author.role}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left meta rail (no duplicate articles list) */}
            <aside className="hidden lg:block lg:col-span-3 pt-16">
              <div className="sticky top-28 space-y-6">
                <div>
                  <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mb-1">Category</p>
                  <p className="text-sm font-bold text-text-dark">{post.category}</p>
                </div>
                <div>
                  <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mb-1">Published</p>
                  <p className="text-sm font-bold text-text-dark">{post.date}</p>
                </div>
                <div>
                  <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mb-1">Read Time</p>
                  <p className="text-sm font-bold text-text-dark">{post.readTime}</p>
                </div>
                <div className="pt-4 border-t border-card-light-border">
                  <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mb-3">Share</p>
                  <ShareButtons title={post.title} url={url} />
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9 py-12 lg:py-16 lg:pl-10 border-l border-card-light-border">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-text-dark font-light leading-relaxed mb-10 pb-10 border-b border-card-light-border">
                {post.excerpt}
              </motion.p>
              <article>
                {post.content.map((paragraph, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-text-dark text-[17px] leading-[1.85] mb-7 last:mb-0">
                    {paragraph}
                  </motion.p>
                ))}
              </article>

              {/* Author card */}
              {author && (
                <div className="mt-14 pt-8 border-t border-card-light-border">
                  <div className="flex items-start gap-5 p-6 bg-light-primary rounded-md border border-card-light-border">
                    <div
                      aria-hidden="true"
                      className="w-14 h-14 rounded-md gradient-bg flex items-center justify-center text-white font-heading font-black text-xl flex-shrink-0"
                    >
                      {author.initial}
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold text-text-dark">{author.name}</p>
                      <p className="text-xs text-text-dark-muted mb-2">{author.role}</p>
                      {author.linkedin && (
                        <a
                          href={author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-semibold"
                        >
                          <LinkedInIcon size={12} /> Connect on LinkedIn
                        </a>
                      )}
                    </div>
                    <div className="hidden sm:block">
                      <ShareButtons title={post.title} url={url} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-light-primary border-t border-card-light-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="group py-10 pr-8 border-b md:border-b-0 md:border-r border-card-light-border">
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mb-2 flex items-center gap-1.5"><ArrowLeft size={10} />Previous</p>
                <h4 className="font-heading text-base font-bold text-text-dark group-hover:text-accent transition-colors leading-snug">{prevPost.title}</h4>
              </Link>
            ) : <div className="py-10 border-b md:border-b-0 md:border-r border-card-light-border" />}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="group py-10 md:pl-8 text-right">
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mb-2 flex items-center justify-end gap-1.5">Next<ArrowRight size={10} /></p>
                <h4 className="font-heading text-base font-bold text-text-dark group-hover:text-accent transition-colors leading-snug">{nextPost.title}</h4>
              </Link>
            ) : <div className="py-10" />}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Keep Reading</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-10">Related Articles</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
            {relatedPosts.map((related, i) => (
              <ScrollReveal key={related.slug} delay={i * 0.08}>
                <Link href={`/blog/${related.slug}`} className="group block bg-white hover:bg-light-primary transition-colors h-full">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-text-dark-muted">
                      <span className="font-semibold text-accent uppercase tracking-wider">{related.category}</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-text-dark group-hover:text-accent transition-colors leading-snug">{related.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 bg-dark-primary">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Work With Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-6 leading-tight">
                Ready to build something<span className="gradient-text"> exceptional?</span>
              </h2>
              <p className="text-text-light-muted mb-8">Schedule a free technical consultation with our team.</p>
              <Link href="/contact" className="inline-flex items-center justify-center font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
