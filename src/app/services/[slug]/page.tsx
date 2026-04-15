import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, ChevronRight,
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot, Search, Sparkles, Megaphone, Palette,
  Lightbulb, ShoppingBag, LayoutDashboard, Database, BarChart3, Network, HardDrive,
  CloudCog, Settings, Headphones, Calculator, Users, Scale, UserPlus, Server, ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { servicesData } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot, Search, Sparkles, Megaphone, Palette,
  Lightbulb, ShoppingBag, LayoutDashboard, Database, BarChart3, Network, HardDrive,
  CloudCog, Settings, Headphones, Calculator, Users, Scale, UserPlus, Server, ShieldCheck,
};

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} Services`,
    description: service.description,
    openGraph: { title: `${service.title} | PROSYS LTD`, description: service.description },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero - full width dark with left content */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-text-light-muted/50 mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">{service.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">
                  {service.title}
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                  {service.tagline}
                </h1>
                <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl mb-10">
                  {service.description}
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                    Get a Proposal
                  </Link>
                  <Link href="/work" className="inline-flex items-center justify-center font-medium rounded-md border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                    See Results
                  </Link>
                </div>
              </div>

              {/* Metrics on right */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 gap-px bg-card-dark-border">
                  {service.metrics.map((m) => (
                    <div key={m.label} className="bg-card-dark p-5">
                      <div className="font-heading text-2xl font-bold text-accent-light mb-1">{m.value}</div>
                      <div className="text-[11px] text-text-light-muted uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do + Why Us - side by side */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Overview</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6">
                  What We Do
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed">{service.what}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Differentiators</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6">
                  Why PROSYS
                </h2>
                <div className="space-y-3">
                  {service.whyUs.map((point) => (
                    <div key={point} className="flex items-start gap-3 p-4 bg-white border border-card-light-border">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process - numbered grid */}
        <section className="py-28 lg:py-36 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Methodology</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-12">
                Our Process
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-dark-border">
              {service.how.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="group bg-card-dark p-8 hover:bg-accent/[0.04] transition-colors duration-400 h-full">
                    <span className="text-4xl font-heading font-bold text-accent-light/[0.08] group-hover:text-accent-light/[0.2] transition-colors block mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-base font-bold text-text-light mb-2 group-hover:text-accent-light transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-light-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack + Benefits */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Technologies</p>
                <h3 className="font-heading text-2xl font-bold text-text-dark mb-8">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white border border-card-light-border text-text-dark text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Outcomes</p>
                <h3 className="font-heading text-2xl font-bold text-text-dark mb-8">Key Benefits</h3>
                <div className="space-y-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span className="text-text-dark-muted leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-28 lg:py-36 bg-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Case Study</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-10">
                {service.caseStudy.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-card-dark-border">
                <div className="bg-card-dark p-8">
                  <p className="text-[11px] text-accent-light uppercase tracking-wider font-semibold mb-3">Challenge</p>
                  <p className="text-text-light-muted text-sm leading-relaxed">{service.caseStudy.challenge}</p>
                </div>
                <div className="bg-card-dark p-8">
                  <p className="text-[11px] text-accent-light uppercase tracking-wider font-semibold mb-3">Solution & Result</p>
                  <p className="text-text-light-muted text-sm leading-relaxed">{service.caseStudy.result}</p>
                </div>
                <div className="bg-accent/10 p-8 flex flex-col items-center justify-center text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-accent-light mb-2">{service.caseStudy.metric}</div>
                  <div className="text-text-light-muted text-xs uppercase tracking-widest">Key Outcome</div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/work" className="inline-flex items-center gap-2 text-accent-light text-sm font-medium hover:gap-3 transition-all duration-300">
                  More Case Studies <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">FAQ</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-10">
                Common Questions
              </h2>
            </ScrollReveal>
            <div className="space-y-px bg-card-light-border border border-card-light-border">
              {service.faq.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-white p-6 md:p-8">
                    <h4 className="font-heading text-base font-bold text-text-dark mb-2">{item.q}</h4>
                    <p className="text-text-dark-muted text-sm leading-relaxed">{item.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 bg-dark-primary border-t border-card-dark-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-text-light-muted/40 uppercase tracking-[0.2em] font-medium">Explore Other Services</p>
              <Link href="/services" className="text-accent-light text-xs font-medium hover:underline hidden sm:inline-flex items-center gap-1">
                All Services <ArrowRight size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-card-dark-border">
              {otherServices.map((s) => {
                const SIcon = iconMap[s.icon];
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-card-dark p-5 hover:bg-accent/[0.04] transition-colors duration-300">
                    <div className="w-8 h-8 rounded-md bg-accent/10 text-accent-light flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {SIcon && <SIcon size={14} />}
                    </div>
                    <span className="font-heading text-xs font-bold text-text-light group-hover:text-accent-light transition-colors truncate block">
                      {s.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Ready to start your
                  <span className="gradient-text"> {service.title.toLowerCase()}</span> project?
                </h2>
                <p className="text-text-dark-muted text-lg mb-8">
                  Let&apos;s discuss your requirements and build a detailed proposal.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                    Get a Proposal
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center font-medium rounded-md border border-text-dark/15 text-text-dark hover:border-accent hover:text-accent px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                    All Services
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
