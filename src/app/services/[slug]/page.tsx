import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, Code2, Cpu, BrainCircuit, Rocket,
  Cloud, Bot, Search, Sparkles, Megaphone, Palette, ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/ui/CTABanner";
import { servicesData } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot, Search, Sparkles, Megaphone, Palette,
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
    openGraph: {
      title: `${service.title} | PROSYS LTD`,
      description: service.description,
    },
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
  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 5);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark-primary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-text-light-muted mb-8">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-accent">{service.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm text-accent tracking-wide font-medium">{service.title}</span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                  {service.tagline.split(" ").slice(0, -1).join(" ")}
                  <span className="gradient-text"> {service.tagline.split(" ").slice(-1)[0]}</span>
                </h1>
                <p className="text-lg md:text-xl text-text-light-muted leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-medium rounded-xl gradient-bg text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-105 px-8 py-4 text-base tracking-wide transition-all duration-300"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center font-medium rounded-xl border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent px-8 py-4 text-base tracking-wide transition-all duration-300"
                  >
                    See Our Work
                  </Link>
                </div>
              </div>

              {/* Hero visual */}
              <div className="lg:col-span-5 hidden lg:flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-3xl gradient-bg opacity-10 rotate-6" />
                  <div className="absolute inset-0 rounded-3xl border border-accent/20 bg-dark-secondary flex items-center justify-center">
                    {Icon && <Icon size={80} className="text-accent/60" strokeWidth={1} />}
                  </div>
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="font-heading text-xs font-bold text-accent">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Strip */}
        <section className="py-10 bg-dark-secondary border-y border-card-dark-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {service.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-1">{m.value}</div>
                  <div className="text-text-light-muted text-xs uppercase tracking-widest">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do + Why Choose Us */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                  <span className="text-xs text-accent tracking-widest uppercase font-medium">Overview</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
                  What We Do
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed">{service.what}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                  <span className="text-xs text-accent tracking-widest uppercase font-medium">Why PROSYS</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
                  Why Choose Us
                </h2>
                <div className="space-y-4">
                  {service.whyUs.map((point) => (
                    <div key={point} className="flex items-start gap-3 p-4 rounded-xl border border-card-light-border bg-white">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-28 lg:py-36 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4">
                  Our Process
                </h2>
                <p className="text-text-light-muted text-lg max-w-2xl mx-auto">
                  A proven, transparent methodology from kickoff to launch and beyond.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.how.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group p-6 rounded-2xl border border-card-dark-border bg-card-dark hover:border-accent/40 transition-all duration-500 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent font-heading text-sm font-bold flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-base font-bold text-text-light">{step.title}</h3>
                    </div>
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
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-8">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 rounded-xl border border-card-light-border bg-white text-text-dark text-sm font-medium hover:border-accent/30 hover:text-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-8">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                        <CheckCircle2 size={14} className="text-accent" />
                      </span>
                      <span className="text-text-dark-muted leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-28 lg:py-36 bg-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                  <span className="text-xs text-accent tracking-widest uppercase font-medium">Case Study</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-8">
                  {service.caseStudy.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl border border-card-dark-border bg-card-dark">
                    <h4 className="text-xs text-accent tracking-widest uppercase font-bold mb-3">Challenge</h4>
                    <p className="text-text-light-muted text-sm leading-relaxed">{service.caseStudy.challenge}</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-card-dark-border bg-card-dark">
                    <h4 className="text-xs text-accent tracking-widest uppercase font-bold mb-3">Result</h4>
                    <p className="text-text-light-muted text-sm leading-relaxed">{service.caseStudy.result}</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-accent/30 bg-accent/5 flex flex-col items-center justify-center text-center">
                    <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">{service.caseStudy.metric}</div>
                    <div className="text-text-light-muted text-xs uppercase tracking-widest">Key Outcome</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
                  >
                    See More Case Studies <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-text-dark-muted text-lg">
                  Common questions about our {service.title.toLowerCase()} services.
                </p>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl border border-card-light-border bg-white hover:border-accent/30 transition-all duration-300">
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
              <h3 className="font-heading text-2xl font-bold text-text-light">
                Explore Other Services
              </h3>
              <Link
                href="/services"
                className="text-accent text-sm font-medium hover:underline hidden sm:inline-flex items-center gap-1"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {otherServices.map((s) => {
                const SIcon = iconMap[s.icon];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-card-dark-border bg-card-dark/50 hover:border-accent/40 hover:bg-card-dark transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {SIcon && <SIcon size={16} />}
                    </div>
                    <span className="font-heading text-sm font-bold text-text-light group-hover:text-accent transition-colors truncate">
                      {s.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner
          title={`Ready to Start Your`}
          highlight={`${service.title} Project?`}
          description="Let's discuss your requirements and see how we can help you achieve your goals."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
