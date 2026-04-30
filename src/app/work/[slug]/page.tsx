import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Calendar, Users, Target, Lightbulb, TrendingUp, MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { caseStudies } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} | PROSYS LTD Case Study`,
      description: study.description,
      url: `/work/${study.slug}`,
      type: "article",
      images: [study.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | PROSYS LTD Case Study`,
      description: study.description,
      images: [study.image],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextStudy =
    caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Work", path: "/work" },
          { label: study.title, path: `/work/${study.slug}` },
        ]}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative h-dvh min-h-[640px] flex items-center bg-dark-primary overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image src={study.image} alt="" fill className="object-cover opacity-30" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-transparent to-dark-primary" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-60" style={{ background: "radial-gradient(circle, rgba(12,108,54,0.3) 0%, transparent 65%)" }} />
          </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-36 lg:pb-28">
            <Link href="/work" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-10">
              <ArrowLeft size={14} /> Back to all work
            </Link>
            <div className="max-w-4xl">
              <span className="px-3 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider mb-6 inline-block rounded-sm">
                {study.category}
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.04] tracking-tight mb-8">
                {study.title}
              </h1>
              <p className="text-lg md:text-xl text-text-light-muted leading-relaxed max-w-3xl mb-12">
                {study.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden max-w-4xl">
                <div className="bg-dark-primary/80 p-5">
                  <p className="text-[10px] text-accent-light uppercase tracking-widest mb-2">Client</p>
                  <p className="text-sm font-bold text-white leading-tight">{study.client}</p>
                </div>
                <div className="bg-dark-primary/80 p-5">
                  <p className="text-[10px] text-accent-light uppercase tracking-widest mb-2">Region</p>
                  <p className="text-sm font-bold text-white leading-tight">{study.clientRegion}</p>
                </div>
                <div className="bg-dark-primary/80 p-5">
                  <p className="text-[10px] text-accent-light uppercase tracking-widest mb-2">Year</p>
                  <p className="text-sm font-bold text-white leading-tight">{study.year}</p>
                </div>
                <div className="bg-dark-primary/80 p-5">
                  <p className="text-[10px] text-accent-light uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-sm font-bold text-accent-light leading-tight">{study.metric}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <aside className="lg:col-span-4">
                <div className="sticky top-28 space-y-6 text-sm">
                  <div>
                    <div className="flex items-center gap-2 text-text-dark-muted mb-1"><Calendar size={13} /><span className="text-[11px] uppercase tracking-widest">Timeline</span></div>
                    <p className="font-bold text-text-dark">{study.timeline}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-text-dark-muted mb-1"><Users size={13} /><span className="text-[11px] uppercase tracking-widest">Team</span></div>
                    <p className="font-bold text-text-dark">{study.teamSize}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-text-dark-muted mb-1"><MapPin size={13} /><span className="text-[11px] uppercase tracking-widest">Region</span></div>
                    <p className="font-bold text-text-dark">{study.clientRegion}</p>
                  </div>
                  <div className="pt-5 border-t border-card-light-border">
                    <p className="text-[11px] uppercase tracking-widest text-text-dark-muted mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[11px] border border-card-light-border text-text-dark-muted rounded-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-8 space-y-10">
                <ScrollReveal>
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={18} className="text-accent" />
                    <h2 className="font-heading text-xl font-bold text-text-dark">The Challenge</h2>
                  </div>
                  <p className="text-text-dark text-[17px] leading-[1.85]">{study.challenge}</p>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={18} className="text-accent" />
                    <h2 className="font-heading text-xl font-bold text-text-dark">Our Approach</h2>
                  </div>
                  <p className="text-text-dark text-[17px] leading-[1.85]">{study.approach}</p>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={18} className="text-accent" />
                    <h2 className="font-heading text-xl font-bold text-text-dark">The Outcome</h2>
                  </div>
                  <p className="text-text-dark text-[17px] leading-[1.85]">{study.outcome}</p>

                  <div className="mt-8 p-8 bg-light-primary rounded-md border border-card-light-border">
                    <p className="text-[11px] uppercase tracking-widest text-accent font-semibold mb-2">Headline Outcome</p>
                    <p className="font-heading text-3xl md:text-4xl font-black text-text-dark leading-tight">{study.metric}</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="p-7 bg-dark-primary rounded-md text-white flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div>
                      <p className="text-[11px] text-accent-light uppercase tracking-widest mb-2">Have a similar challenge?</p>
                      <h3 className="font-heading text-xl font-bold">Let&apos;s scope your project.</h3>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white font-semibold px-6 py-3 rounded-md text-xs uppercase tracking-widest transition-all duration-300">
                      Book a Call <ArrowRight size={14} />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Next case */}
        <section className="py-14 lg:py-20 bg-light-primary border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <p className="text-[11px] uppercase tracking-widest text-accent font-semibold mb-4">Next Case Study</p>
            <Link href={`/work/${nextStudy.slug}`} className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-7 bg-white border border-card-light-border rounded-md hover:border-accent transition-colors">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-text-dark-muted mb-2">{nextStudy.category}</p>
                <h3 className="font-heading text-2xl font-bold text-text-dark group-hover:text-accent transition-colors">{nextStudy.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                View case <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
