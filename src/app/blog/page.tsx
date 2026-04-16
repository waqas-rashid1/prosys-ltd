import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, guides, and thought leadership from the PROSYS LTD team on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
};

const featuredPost = {
  category: "AIEO",
  title: "AIEO: The Complete Guide to Ranking on AI Search Engines in 2026",
  excerpt:
    "Google is no longer the only discovery engine. ChatGPT, Gemini, Perplexity, and Claude are answering questions your customers are asking. Here's the definitive guide to making sure your brand shows up in AI-generated responses — covering entity optimization, structured data, citation building, and the metrics that matter.",
  date: "Apr 5, 2026",
  readTime: "12 min read",
  image: "/images/case-saas.jpg",
};

const posts = [
  {
    category: "AI Strategy",
    title: "Why Every Startup Needs an AI Strategy in 2026 — And How to Build One",
    excerpt:
      "AI is no longer a competitive advantage — it's table stakes. Companies without an AI strategy are already falling behind. This guide walks through a practical framework for integrating AI into your startup's product, operations, and growth engine. We cover: identifying high-ROI AI opportunities, choosing between build vs. buy, managing AI costs from day one, building an AI-ready data pipeline, and measuring actual business impact beyond vanity metrics.",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    image: "/images/case-automation.jpg",
  },
  {
    category: "Engineering",
    title: "MVP to Scale: The 7 Architecture Decisions That Make or Break Your Startup",
    excerpt:
      "The technical choices you make at the MVP stage determine whether your product can scale to 10,000 users or collapse at 500. We've built 25+ MVPs — here are the 7 architecture decisions we obsess over: monolith vs. microservices timing, database selection, authentication patterns, API design, caching strategy, deployment pipeline, and observability from day one.",
    date: "Mar 15, 2026",
    readTime: "10 min read",
    image: "/images/case-health.jpg",
  },
  {
    category: "SEO",
    title: "The Technical SEO Playbook for Next.js Applications in 2026",
    excerpt:
      "Next.js is the best framework for SEO — if you configure it correctly. Most developers miss critical optimizations that cost thousands in organic traffic. This playbook covers: SSR vs. SSG vs. ISR for SEO, structured data implementation with JSON-LD, Core Web Vitals optimization specific to Next.js, dynamic sitemap generation, canonical URL strategy, and international SEO with App Router.",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    image: "/images/case-web.jpg",
  },
  {
    category: "SaaS",
    title: "Multi-Tenant Architecture in 2026: The Patterns That Actually Scale",
    excerpt:
      "Building a SaaS platform? Your tenancy model is the most consequential architectural decision you'll make. Get it wrong and you're facing a full rewrite at Series A. We break down: shared database with row-level security, database-per-tenant for regulated industries, hybrid approaches, Stripe billing integration patterns, tenant isolation testing, and the real cost implications of each approach at 10, 100, and 1,000 tenants.",
    date: "Feb 10, 2026",
    readTime: "11 min read",
    image: "/images/case-saas.jpg",
  },
  {
    category: "AI Automation",
    title: "Building AI Agents That Actually Work in Production — Not Just in Demos",
    excerpt:
      "Everyone can build an AI agent demo in a weekend. Shipping one that handles real business workflows without breaking? That requires a completely different engineering discipline. This guide covers: designing agent decision trees, prompt chaining architecture, error handling and human-in-the-loop fallbacks, cost optimization through model routing, evaluation frameworks for measuring agent accuracy, and production monitoring that catches failures before your users do.",
    date: "Jan 25, 2026",
    readTime: "9 min read",
    image: "/images/case-automation.jpg",
  },
];

const categories = ["All", "AI Strategy", "Engineering", "SEO", "SaaS", "AI Automation", "AIEO"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Blog & Insights</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Perspectives on building
                <span className="gradient-text"> what matters.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                Deep dives on AI, SaaS architecture, SEO, AIEO, and the engineering decisions that separate products that scale from products that break.
              </p>
            </div>
          </div>
        </section>

        {/* Category filters */}
        <section className="py-6 bg-white border-b border-card-light-border sticky top-20 z-30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    i === 0
                      ? "bg-dark-primary text-white"
                      : "text-text-dark-muted hover:text-text-dark border border-card-light-border hover:border-text-dark/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article - full width */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-card-light-border bg-white overflow-hidden group">
                {/* Image */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 lg:bg-gradient-to-l" />
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">Featured</span>
                    <span className="h-px flex-grow max-w-8 bg-card-light-border" />
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">{featuredPost.category}</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-dark-muted leading-relaxed mb-6 max-w-xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-text-dark-muted text-sm mb-6">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />{featuredPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} />{featuredPost.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-300">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-28 lg:py-36 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-14">
                <div>
                  <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Latest</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
                    All Articles
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            {/* First article - large horizontal */}
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-card-light-border bg-light-primary overflow-hidden group mb-8">
                <div className="lg:col-span-4 relative h-56 lg:h-auto overflow-hidden">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">{posts[0].category}</span>
                    <span className="flex items-center gap-1.5 text-text-dark-muted text-xs"><Clock size={11} />{posts[0].readTime}</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                    {posts[0].title}
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-4 max-w-2xl line-clamp-3">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-dark-muted flex items-center gap-1.5"><Calendar size={11} />{posts[0].date}</span>
                    <span className="text-xs font-semibold text-accent flex items-center gap-1.5 group-hover:gap-2.5 transition-all">Read <ArrowRight size={12} /></span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Remaining articles - 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-card-light-border border border-card-light-border">
              {posts.slice(1).map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 0.06}>
                  <div className="bg-white group hover:bg-light-primary transition-colors duration-400 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-semibold bg-accent text-white px-2.5 py-1 uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <ArrowUpRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="font-heading text-lg font-bold text-text-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                        <div className="flex items-center gap-4 text-xs text-text-dark-muted">
                          <span className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-28 lg:py-36 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Stay Updated</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4 leading-tight">
                    Subscribe to our
                    <span className="gradient-text"> newsletter.</span>
                  </h2>
                  <p className="text-text-light-muted leading-relaxed">
                    Get our latest articles, guides, and case studies delivered to your inbox. No spam — just actionable insights on AI, engineering, and growth.
                  </p>
                </div>
                <NewsletterForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
