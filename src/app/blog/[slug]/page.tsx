import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: `${post.title} | PROSYS LTD Blog`, description: post.excerpt },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Article Header */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-text-light-muted/50 text-sm hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-5 text-xs text-text-light-muted">
              <span className="font-semibold text-accent-light uppercase tracking-wider">{post.category}</span>
              <span className="flex items-center gap-1.5"><Calendar size={12} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-text-light-muted leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-light-primary">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="relative h-64 md:h-96 -mt-4 overflow-hidden border border-card-light-border">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 lg:py-24 bg-light-primary">
          <div className="max-w-[720px] mx-auto px-6 lg:px-8">
            <article className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-text-dark text-[17px] leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <section className="bg-white border-y border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-card-light-border">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group py-8 pr-8">
                  <p className="text-xs text-text-dark-muted uppercase tracking-wider mb-2 flex items-center gap-1.5"><ArrowLeft size={11} />Previous</p>
                  <h4 className="font-heading text-base font-bold text-text-dark group-hover:text-accent transition-colors leading-snug">{prevPost.title}</h4>
                </Link>
              ) : <div className="py-8" />}
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="group py-8 md:pl-8 text-right">
                  <p className="text-xs text-text-dark-muted uppercase tracking-wider mb-2 flex items-center justify-end gap-1.5">Next<ArrowRight size={11} /></p>
                  <h4 className="font-heading text-base font-bold text-text-dark group-hover:text-accent transition-colors leading-snug">{nextPost.title}</h4>
                </Link>
              ) : <div className="py-8" />}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Keep Reading</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-10">Related Articles</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
              {relatedPosts.map((related, i) => (
                <ScrollReveal key={related.slug} delay={i * 0.06}>
                  <Link href={`/blog/${related.slug}`} className="group block bg-white hover:bg-light-primary transition-colors h-full">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-text-dark-muted">
                        <span className="font-semibold text-accent uppercase tracking-wider">{related.category}</span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-dark group-hover:text-accent transition-colors leading-snug">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Work With Us</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-6 leading-tight">
                  Ready to build something
                  <span className="gradient-text"> exceptional?</span>
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
      <Footer />
    </>
  );
}
