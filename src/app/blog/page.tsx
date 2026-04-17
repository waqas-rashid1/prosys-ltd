import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
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

        {/* Featured Article - cinematic */}
        <section className="bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-8">Featured</p>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="relative overflow-hidden">
                  <div className="relative h-72 md:h-[28rem] overflow-hidden">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-1000" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 text-[11px] font-semibold bg-accent text-white uppercase tracking-wider">{featured.category}</span>
                        <span className="text-white/50 text-xs flex items-center gap-1.5"><Calendar size={11} />{featured.date}</span>
                        <span className="text-white/50 text-xs flex items-center gap-1.5"><Clock size={11} />{featured.readTime}</span>
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-snug">
                        {featured.title}
                      </h2>
                      <p className="text-white/60 leading-relaxed mb-5 hidden md:block max-w-xl">
                        {featured.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* All Articles - card grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Latest</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-14">All Articles</h2>
            </ScrollReveal>

            {/* First row - 2 large cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {rest.slice(0, 2).map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="border border-card-light-border bg-white hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <div className="relative h-56 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">{post.category}</span>
                        </div>
                      </div>
                      <div className="p-7 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-3 text-xs text-text-dark-muted">
                          <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-text-dark-muted text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                        <div className="mt-5 pt-5 border-t border-card-light-border">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent group-hover:gap-3 transition-all">
                            Read Article <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Second row - 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.slice(2).map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="border border-card-light-border bg-white hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <div className="relative h-44 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-0.5 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">{post.category}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-2 text-[11px] text-text-dark-muted">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-heading text-base font-bold text-text-dark mb-2 group-hover:text-accent transition-colors leading-snug flex-grow">
                          {post.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all mt-3">
                          Read <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA
          eyebrow="From reading to building"
          title="Have a project that needs this level of thinking?"
        />
      </main>
      <Footer />
    </>
  );
}
