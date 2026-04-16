import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore PROSYS LTD's full-spectrum software development services — web development, AI, SaaS, cloud, digital marketing, and more.",
};

const serviceGroups = [
  {
    title: "Digital",
    desc: "Strategy, commerce, and business applications that drive digital transformation.",
    image: "/images/service-digital.jpg",
    services: [
      { label: "Digital Consulting & Strategy", slug: "digital-consulting" },
      { label: "Digital Commerce", slug: "digital-commerce" },
      { label: "Business Applications", slug: "business-applications" },
      { label: "Web Development", slug: "web-development" },
      { label: "Software Development", slug: "software-development" },
      { label: "MVP Development", slug: "mvp-development" },
    ],
  },
  {
    title: "Data & Analytics",
    desc: "Turn raw data into strategic advantage with AI, ML, and connected intelligence.",
    image: "/images/service-data.jpg",
    services: [
      { label: "Generative AI", slug: "generative-ai" },
      { label: "AI Development", slug: "ai-development" },
      { label: "AI Automations", slug: "ai-automations" },
      { label: "Data Modernization", slug: "data-modernization" },
      { label: "Advanced Analytics", slug: "advanced-analytics" },
      { label: "Connected Intelligence", slug: "connected-intelligence" },
    ],
  },
  {
    title: "Cloud",
    desc: "Scale and adapt with secure cloud environments and managed infrastructure.",
    image: "/images/service-cloud.jpg",
    services: [
      { label: "Cloud Operations & Migration", slug: "cloud-operations" },
      { label: "Cloud App Development", slug: "cloud-app-development" },
      { label: "SaaS Development", slug: "saas-development" },
      { label: "Managed Services", slug: "managed-services" },
    ],
  },
  {
    title: "Business Process Services",
    desc: "Digital marketing, staff augmentation, and operational support that scales.",
    image: "/images/service-bps.jpg",
    services: [
      { label: "SEO", slug: "seo" },
      { label: "AIEO", slug: "aieo" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Graphics & Branding", slug: "graphics-branding" },
      { label: "Staff Augmentation", slug: "staff-augmentation" },
    ],
  },
];

const processSteps = [
  "Free consultation & requirements analysis",
  "Detailed proposal with timeline & budget",
  "UI/UX design & architecture review",
  "Agile development with weekly demos",
  "QA testing & performance optimization",
  "Launch, training & ongoing support",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero with image */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark-primary overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/services-hero.jpg" alt="Services" fill className="object-cover opacity-20" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/60" />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Our Services</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Full-spectrum technology
                <span className="gradient-text"> services.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                From digital consulting to AI development to cloud infrastructure — we deliver end-to-end solutions that drive measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Service Groups */}
        {serviceGroups.map((group, gi) => (
          <section key={group.title} className={`py-24 lg:py-32 ${gi % 2 === 0 ? "bg-light-primary" : "bg-white"}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
              <ScrollReveal>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${gi % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-72 lg:h-96 overflow-hidden ${gi % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                    <Image src={group.image} alt={group.title} fill className="object-cover" sizes="50vw" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Service Area</p>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
                      {group.title}
                    </h2>
                    <p className="text-text-dark-muted text-lg leading-relaxed mb-8">{group.desc}</p>

                    <div className="space-y-2">
                      {group.services.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center justify-between py-3 border-b border-card-light-border last:border-0">
                          <span className="text-text-dark font-medium group-hover:text-accent transition-colors">{s.label}</span>
                          <ArrowRight size={14} className="text-text-dark-muted/30 group-hover:text-accent transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        ))}

        {/* Process */}
        <section className="py-24 lg:py-32 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">How It Works</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4 leading-tight">
                  Our process is transparent.
                </h2>
                <p className="text-text-light-muted text-lg leading-relaxed">
                  No black boxes. From the first call to post-launch support, you know exactly what&apos;s happening, when, and why.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="space-y-3">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-card-dark border border-card-dark-border group hover:border-accent/30 transition-all">
                      <CheckCircle2 size={16} className="text-accent-light flex-shrink-0 mt-0.5" />
                      <span className="text-text-light text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Not sure which service
                  <span className="gradient-text"> fits?</span>
                </h2>
                <p className="text-text-dark-muted text-lg mb-8">Let&apos;s discuss your requirements. We&apos;ll recommend the right approach.</p>
                <Link href="/contact" className="inline-flex items-center justify-center font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                  Get a Proposal
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
