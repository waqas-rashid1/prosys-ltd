import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, guides, and thought leadership from PROSYS LTD on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

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
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-card-light-border overflow-hidden">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-xs text-text-dark-muted">
                      <span className="font-semibold text-accent uppercase tracking-wider">{featured.category}</span>
                      <span>{featured.date}</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-dark mb-4 leading-snug group-hover:text-accent transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-text-dark-muted leading-relaxed mb-6">
                      {featured.excerpt}
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

            <div className="divide-y divide-card-light-border border-y border-card-light-border">
              {rest.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.04}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 items-center">
                      <div className="md:col-span-3 relative h-48 md:h-40 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                      </div>
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
      </main>
      <Footer />
    </>
  );
}
