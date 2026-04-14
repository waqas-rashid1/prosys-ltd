import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and thought leadership from the PROSYS LTD team on AI development, SaaS engineering, SEO, AIEO, and modern software development.",
};

const featuredPost = {
  category: "AIEO",
  title: "AIEO: The Complete Guide to Ranking on AI Search Engines in 2026",
  excerpt:
    "Google is no longer the only discovery engine. ChatGPT, Gemini, Perplexity, and Claude are answering questions your customers are asking. Here's the definitive guide to making sure your brand shows up in AI-generated responses — and why AIEO is the most important digital strategy you're not doing yet.",
  date: "Apr 5, 2026",
  readTime: "12 min read",
};

const posts = [
  {
    category: "AI & Innovation",
    title: "Why Every Startup Needs an AI Strategy in 2026",
    excerpt:
      "AI is no longer optional. Discover how early-stage companies are leveraging AI to ship faster, reduce costs, and outperform funded competitors.",
    date: "Mar 28, 2026",
    readTime: "8 min read",
  },
  {
    category: "Development",
    title: "MVP to Scale: The Architecture Decisions That Matter Most",
    excerpt:
      "The technical choices you make at the MVP stage determine whether your product can scale. Here's our framework for building right from day one.",
    date: "Mar 15, 2026",
    readTime: "10 min read",
  },
  {
    category: "SEO",
    title: "Technical SEO Checklist for Next.js Applications",
    excerpt:
      "A practical, developer-friendly guide to making your Next.js app rank. Covers SSR, structured data, Core Web Vitals, and crawl optimization.",
    date: "Feb 28, 2026",
    readTime: "7 min read",
  },
  {
    category: "SaaS",
    title: "Multi-Tenant Architecture: Patterns That Actually Scale",
    excerpt:
      "Shared database? Database per tenant? Hybrid? We break down the trade-offs and share the patterns we use for production SaaS platforms.",
    date: "Feb 10, 2026",
    readTime: "11 min read",
  },
  {
    category: "Automation",
    title: "Building AI Agents That Actually Work in Production",
    excerpt:
      "Beyond the demo. How to design, test, and deploy AI agents that handle real business workflows reliably — with error handling that doesn't break.",
    date: "Jan 25, 2026",
    readTime: "9 min read",
  },
  {
    category: "Design",
    title: "Design Systems for Startups: Start Small, Scale Fast",
    excerpt:
      "You don't need a 500-component design system on day one. Here's how to build a lean, effective design system that grows with your product.",
    date: "Jan 12, 2026",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Blog & Insights"
          title="Ideas That"
          highlight="Ship"
          description="Practical thinking on AI, SaaS engineering, SEO, AIEO, and building products that win — from the team that builds them."
        />

        {/* Featured Post */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="group rounded-2xl border border-card-light-border bg-white p-8 md:p-12 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-xl bg-accent/10 text-accent tracking-wide">
                    Featured
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-xl bg-accent/5 text-accent tracking-wide">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-text-dark-muted text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 0.08}>
                  <div className="group rounded-2xl border border-card-light-border bg-white p-6 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-xl bg-accent/10 text-accent tracking-wide">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-text-dark-muted text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                      <div className="flex items-center gap-4 text-text-dark-muted text-xs">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner dark={false} />
      </main>
      <Footer />
    </>
  );
}
