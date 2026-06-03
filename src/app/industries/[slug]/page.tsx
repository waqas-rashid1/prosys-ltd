import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, Landmark, HeartPulse, ShoppingCart, GraduationCap,
  Building2, Briefcase, Truck, PlaySquare, ShieldCheck, Cpu, Target, Headset, Scale,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DarkSectionFx from "@/components/ui/DarkSectionFx";
import { industries, caseStudies } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase, Truck, PlaySquare, Headset, Scale, Cpu,
};

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `${industry.title} — Safe AI Deployment`,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} — Safe AI Deployment | PROSYS LTD`,
      description: industry.description,
      url: `/industries/${industry.slug}`,
      type: "website",
      images: [industry.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} — Safe AI Deployment | PROSYS LTD`,
      description: industry.description,
      images: [industry.image],
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const Icon = iconMap[industry.icon] || Briefcase;
  // Pick a couple of relevant case studies to surface
  const relevantStudies = caseStudies.slice(0, 2);

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Industries", path: "/industries" },
          { label: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <section className="relative h-dvh min-h-[640px] flex items-center bg-dark-primary overflow-hidden">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image src={industry.image} alt="" fill className="object-cover opacity-30" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-transparent to-dark-primary" />
            <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full blur-[140px] opacity-60" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 65%)" }} />
          </div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-36 lg:pb-28">
            <Link href="/industries" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-10">
              <ArrowLeft size={14} /> All Industries
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-md bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Icon size={24} />
                </div>
                <span className="px-3 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider rounded-sm">Industry Expertise</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.04] tracking-tight mb-8">
                {industry.title}
                <br />
                <span className="gradient-text">AI, deployed safely.</span>
              </h1>
              <p className="text-lg md:text-xl text-text-light-muted leading-relaxed max-w-3xl mb-10">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-text-light-muted/80">
                {industry.compliance.slice(0, 4).map((c) => (
                  <span key={c} className="flex items-center gap-2">
                    <ShieldCheck size={13} className="text-accent-light" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities + Compliance */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ScrollReveal>
                <div className="bg-white border border-card-light-border rounded-md p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <Target size={18} className="text-accent" />
                    <h2 className="font-heading text-xl font-bold text-text-dark">Capabilities</h2>
                  </div>
                  <ul className="space-y-3">
                    {industry.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 pb-3 border-b border-card-light-border last:border-0 last:pb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-text-dark text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white border border-card-light-border rounded-md p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <ShieldCheck size={18} className="text-accent" />
                    <h2 className="font-heading text-xl font-bold text-text-dark">Controls & Safeguards</h2>
                  </div>
                  <ul className="space-y-3">
                    {industry.compliance.map((c) => (
                      <li key={c} className="flex items-start gap-3 pb-3 border-b border-card-light-border last:border-0 last:pb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-text-dark text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-14 lg:py-20 bg-white border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-5">
                <Cpu size={18} className="text-accent" />
                <h2 className="font-heading text-xl font-bold text-text-dark">Reference Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {industry.tech.map((t) => (
                  <span key={t} className="px-4 py-2 text-sm border border-card-light-border rounded-md text-text-dark font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related case studies */}
        <section className="py-14 lg:py-20 bg-light-primary border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-3">Relevant Work</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-10">Case studies in <span className="gradient-text">{industry.title}-adjacent sectors.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantStudies.map((cs) => (
                <Link key={cs.slug} href={`/work/${cs.slug}`} className="group block bg-white border border-card-light-border hover:border-accent/40 transition-colors">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={cs.image} alt={cs.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">{cs.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-base font-bold text-text-dark mb-2 group-hover:text-accent transition-colors leading-snug">{cs.title}</h3>
                    <p className="text-text-dark-muted text-xs leading-relaxed">{cs.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sector-specific CTA */}
        <section className="relative py-14 lg:py-20 bg-dark-primary overflow-hidden">
          <DarkSectionFx variant="default" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Ready to deploy AI in {industry.title}?</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-6 leading-tight">
                Let&apos;s scope your {industry.title} <span className="gradient-text">AI deployment.</span>
              </h2>
              <p className="text-text-light-muted text-lg mb-8 leading-relaxed">
                Sector-aware AI deployment with the permissions, integrations, and oversight your operations require.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest rounded-md font-medium transition-all">
                Book a Call <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
