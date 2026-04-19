import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2, ArrowRight, ChevronRight, Target, Shield, Clock, Zap,
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot, Search, Sparkles, Megaphone, Palette,
  Lightbulb, ShoppingBag, LayoutDashboard, Database, BarChart3, Network, HardDrive,
  CloudCog, Settings, Headphones, Calculator, Users, Scale, UserPlus, Server, ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceTechStack from "@/components/ServiceTechStack";
import {
  BreadcrumbSchema,
  ServiceDetailSchema,
  ServiceFAQSchema,
} from "@/components/schema/PageSchema";
import { servicesData } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot, Search, Sparkles, Megaphone, Palette,
  Lightbulb, ShoppingBag, LayoutDashboard, Database, BarChart3, Network, HardDrive,
  CloudCog, Settings, Headphones, Calculator, Users, Scale, UserPlus, Server, ShieldCheck,
};

const serviceImages: Record<string, string> = {
  "web-development": "/images/service-digital.jpg",
  "software-development": "/images/service-data.jpg",
  "ai-development": "/images/case-automation.jpg",
  "mvp-development": "/images/case-health.jpg",
  "saas-development": "/images/service-cloud.jpg",
  "ai-automations": "/images/case-automation.jpg",
  "seo": "/images/case-web.jpg",
  "aieo": "/images/service-digital.jpg",
  "digital-marketing": "/images/service-bps.jpg",
  "graphics-branding": "/images/service-digital.jpg",
  "digital-consulting": "/images/services-hero.jpg",
  "generative-ai": "/images/case-saas.jpg",
  "cloud-operations": "/images/service-cloud.jpg",
  "data-modernization": "/images/service-data.jpg",
  "staff-augmentation": "/images/service-bps.jpg",
  "security": "/images/service-cloud.jpg",
};

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} Services`,
    description: service.description,
    openGraph: { title: `${service.title} | PROSYS LTD`, description: service.description },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const heroImage = serviceImages[slug] || "/images/services-hero.jpg";
  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <ServiceDetailSchema
        title={service.title}
        description={service.description}
        slug={service.slug}
      />
      <ServiceFAQSchema faq={service.faq} />
      <Navbar />
      <main id="main-content">
        {/* Cinematic Hero — static image + gradients for performance (home uses video) */}
        <section className="relative h-dvh min-h-[640px] flex items-center overflow-hidden bg-dark-primary">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-dark-primary/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/85 to-dark-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-dark-primary/60" />
            {/* Ambient green glow */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] pointer-events-none opacity-70" style={{ background: "radial-gradient(circle, rgba(12,108,54,0.18) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] pointer-events-none opacity-60" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)" }} />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/40 mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={10} />
              <span className="text-white/70">{service.title}</span>
            </div>

            <div className="max-w-4xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.25em] font-semibold mb-6">
                {service.title}
              </p>

              <h1 className="font-heading text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black mb-8 text-white tracking-tight">
                {(() => {
                  const words = service.tagline.split(" ");
                  const highlightCount = words.length >= 5 ? 2 : 1;
                  const head = words.slice(0, words.length - highlightCount).join(" ");
                  const tail = words.slice(words.length - highlightCount).join(" ");
                  return (
                    <>
                      {head && <>{head}<br /></>}
                      <span className="gradient-text">{tail}.</span>
                    </>
                  );
                })()}
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-white/60 mb-12 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center font-medium rounded-md border border-white/25 text-white hover:border-white/60 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                >
                  See Our Work
                </Link>
              </div>

              {/* Proof points strip — service metrics */}
              <div className="flex flex-wrap gap-8 md:gap-16 pt-8 border-t border-white/10 max-w-3xl">
                {service.metrics.slice(0, 4).map((m) => (
                  <div key={m.label}>
                    <div className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">{m.value}</div>
                    <div className="text-[11px] text-white/40 uppercase tracking-widest">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - editorial */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Overview</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-8 leading-tight">
                    What We Deliver
                  </h2>
                  <div className="text-text-dark-muted text-lg leading-[1.8] space-y-5">
                    <p>{service.what}</p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.15}>
                  <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Why PROSYS</p>
                  <div className="space-y-0 border border-card-light-border">
                    {service.whyUs.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-5 bg-white border-b border-card-light-border last:border-0">
                        <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-text-dark text-sm leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Promise */}
        <section className="py-16 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-card-dark-border">
              {[
                { icon: Target, label: "Outcome-Focused", desc: "Every deliverable tied to business goals" },
                { icon: Shield, label: "Enterprise Security", desc: "SOC 2 practices, encrypted by default" },
                { icon: Clock, label: "On-Time Delivery", desc: "Sprint-based with transparent timelines" },
                { icon: Zap, label: "Production-Ready", desc: "Tested, documented, deployed code" },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.label} className="bg-card-dark p-6 text-center">
                    <ItemIcon size={20} className="text-accent-light mx-auto mb-3" />
                    <p className="font-heading text-sm font-bold text-text-light mb-1">{item.label}</p>
                    <p className="text-text-light-muted text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Methodology</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-14">How We Deliver</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
              {service.how.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="bg-white p-8 h-full group hover:bg-light-primary transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-heading text-base font-bold text-text-dark">{step.title}</h3>
                    </div>
                    <p className="text-text-dark-muted text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack — per-service with logos (replaces old pills) */}
        <ServiceTechStack serviceName={service.title} techStack={service.techStack} />

        {/* Business Outcomes */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <ScrollReveal className="lg:col-span-5">
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Business Outcomes</p>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-5 leading-tight">
                  What you get with every engagement.
                </h3>
                <p className="text-text-dark-muted leading-relaxed">
                  Beyond the deliverable — measurable business impact, clean handoffs, and a partnership built to scale with you.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-card-light-border border border-card-light-border">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 bg-white p-5">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Case Study - full width */}
        <section className="py-14 lg:py-20 bg-dark-secondary border-y border-card-dark-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Case Study</p>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-card-dark-border bg-card-dark overflow-hidden rounded-md">
                <div className="lg:col-span-4 relative h-48 lg:h-auto overflow-hidden">
                  <Image src={heroImage} alt={service.caseStudy.title} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-secondary/40" />
                </div>
                <div className="lg:col-span-8 p-8 lg:p-12">
                  <h3 className="font-heading text-2xl font-bold text-text-light mb-6">{service.caseStudy.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-[11px] text-accent-light uppercase tracking-wider font-semibold mb-2">The Challenge</p>
                      <p className="text-text-light-muted text-sm leading-relaxed">{service.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-accent-light uppercase tracking-wider font-semibold mb-2">The Result</p>
                      <p className="text-text-light-muted text-sm leading-relaxed">{service.caseStudy.result}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-card-dark-border">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="font-heading text-lg font-bold text-accent-light">{service.caseStudy.metric}</span>
                    </div>
                    <Link href="/work" className="text-sm font-semibold text-accent-light flex items-center gap-1.5 hover:gap-2.5 transition-all">
                      More Case Studies <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">FAQ</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-10">Common Questions</h2>
            </ScrollReveal>
            <div className="divide-y divide-card-light-border border-y border-card-light-border">
              {service.faq.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="py-6 md:py-8">
                    <h4 className="font-heading text-base font-bold text-text-dark mb-2">{item.q}</h4>
                    <p className="text-text-dark-muted text-sm leading-relaxed">{item.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 bg-dark-primary border-t border-card-dark-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-text-light-muted/40 uppercase tracking-[0.2em] font-medium">Other Services</p>
              <Link href="/services" className="text-accent-light text-xs font-medium hover:underline flex items-center gap-1">
                View All <ArrowRight size={11} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-card-dark-border">
              {otherServices.map((s) => {
                const SIcon = iconMap[s.icon];
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-card-dark p-5 hover:bg-accent/[0.04] transition-colors">
                    <div className="w-8 h-8 rounded-md bg-accent/10 text-accent-light flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-white transition-all">
                      {SIcon && <SIcon size={14} />}
                    </div>
                    <span className="font-heading text-xs font-bold text-text-light group-hover:text-accent-light transition-colors truncate block">{s.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Next Steps</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Ready to start your <span className="gradient-text">{service.title.toLowerCase()}</span> project?
                </h2>
                <p className="text-text-dark-muted text-lg mb-8">Let&apos;s discuss your requirements and build a detailed proposal.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center font-semibold rounded-md bg-dark-primary text-white hover:bg-accent px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300">
                    Book a Consultation
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center font-medium rounded-md border border-text-dark/15 text-text-dark hover:border-accent hover:text-accent px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300">
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
