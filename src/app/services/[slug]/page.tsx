import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { servicesData } from "@/lib/services-data";

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
    title: service.title,
    description: service.description,
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

  const otherServices = servicesData
    .filter((s) => s.slug !== slug)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge={service.title}
          title={service.tagline.split(" ").slice(0, -1).join(" ")}
          highlight={service.tagline.split(" ").slice(-1)[0]}
          description={service.description}
        />

        {/* What we do */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark tracking-wide mb-6">
                  What We Do
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed">
                  {service.what}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <h3 className="font-heading text-xl font-bold text-text-dark tracking-wide mb-6">
                  Our Process
                </h3>
                <div className="space-y-3">
                  {service.how.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl border border-card-light-border bg-white"
                    >
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Tech stack + Benefits */}
        <section className="py-28 lg:py-36 bg-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <h3 className="font-heading text-2xl font-bold text-text-light tracking-wide mb-6">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-card-dark-border bg-card-dark text-text-light-muted text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <h3 className="font-heading text-2xl font-bold text-text-light tracking-wide mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-text-light-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark tracking-wide mb-10 text-center">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-card-light-border bg-white">
                    <h4 className="font-heading text-lg font-bold text-text-dark mb-2 tracking-wide">
                      {item.q}
                    </h4>
                    <p className="text-text-dark-muted leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-20 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h3 className="font-heading text-2xl font-bold text-text-light tracking-wide mb-8">
              Other Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group p-5 rounded-xl border border-card-dark-border bg-card-dark/50 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-text-light group-hover:text-accent transition-colors tracking-wide">
                      {s.title}
                    </span>
                    <ArrowRight size={14} className="text-text-light-muted/0 group-hover:text-accent transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to Get Started with"
          highlight={`${service.title}?`}
          description="Let's discuss your project and see how we can help."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
