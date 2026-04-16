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
    "Insights, guides, and thought leadership from PROSYS LTD on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
};

const featuredPost = {
  category: "AIEO",
  title: "AIEO: The Complete Guide to Ranking on AI Search Engines in 2026",
  excerpt:
    "ChatGPT, Gemini, and Perplexity are answering your customers' questions. Here's how to make sure your brand shows up in AI-generated responses.",
  date: "Apr 5, 2026",
  readTime: "12 min",
  image: "/images/case-saas.jpg",
};

const posts = [
  {
    category: "AI Strategy",
    title: "Why Every Startup Needs an AI Strategy in 2026",
    excerpt: "AI is table stakes. Companies without an AI strategy are already falling behind. Here's a practical framework for integrating AI into your product and operations.",
    date: "Mar 28, 2026",
    readTime: "8 min",
    image: "/images/case-automation.jpg",
  },
  {
    category: "Engineering",
    title: "MVP to Scale: The 7 Architecture Decisions That Matter Most",
    excerpt: "The technical choices at the MVP stage determine whether your product scales to 10K users or collapses at 500. Here are the 7 decisions we obsess over.",
    date: "Mar 15, 2026",
    readTime: "10 min",
    image: "/images/case-health.jpg",
  },
  {
    category: "SEO",
    title: "The Technical SEO Playbook for Next.js Applications",
    excerpt: "Next.js is the best framework for SEO — if configured correctly. Most developers miss critical optimizations that cost thousands in organic traffic.",
    date: "Feb 28, 2026",
    readTime: "7 min",
    image: "/images/case-web.jpg",
  },
  {
    category: "SaaS",
    title: "Multi-Tenant Architecture: Patterns That Actually Scale",
    excerpt: "Your tenancy model is the most consequential SaaS architectural decision. Get it wrong and you're facing a full rewrite at Series A.",
    date: "Feb 10, 2026",
    readTime: "11 min",
    image: "/images/case-saas.jpg",
  },
  {
    category: "AI Automation",
    title: "Building AI Agents That Work in Production — Not Just in Demos",
    excerpt: "Everyone can build an AI agent demo in a weekend. Shipping one that handles real workflows without breaking requires a different engineering discipline.",
    date: "Jan 25, 2026",
    readTime: "9 min",
    image: "/images/case-automation.jpg",
  },
];

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

        {/* Featured Article */}
        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-8">Featured</p>
              <Link href="/blog" className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-card-light-border overflow-hidden">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-xs text-text-dark-muted">
                      <span className="font-semibold text-accent uppercase tracking-wider">{featuredPost.category}</span>
                      <span>{featuredPost.date}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-dark mb-4 leading-snug group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-text-dark-muted leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Latest</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">All Articles</h2>
            </ScrollReveal>

            {/* Articles as clean list rows */}
            <div className="divide-y divide-card-light-border border-y border-card-light-border">
              {posts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 0.04}>
                  <Link href="/blog" className="group block">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 items-center">
                      {/* Image */}
                      <div className="md:col-span-3 relative h-48 md:h-40 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                      </div>

                      {/* Content */}
                      <div className="md:col-span-7">
                        <div className="flex items-center gap-4 mb-3 text-xs text-text-dark-muted">
                          <span className="font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                          <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-text-dark mb-2 group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-text-dark-muted text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="md:col-span-2 hidden md:flex justify-end">
                        <div className="w-10 h-10 border border-card-light-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                          <ArrowUpRight size={16} className="text-text-dark-muted/30 group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 lg:py-32 bg-dark-primary">
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
                    Our latest articles and case studies, delivered weekly. No spam — just actionable insights.
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
