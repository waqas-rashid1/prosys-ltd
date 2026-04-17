import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore PROSYS LTD's portfolio — SaaS platforms, AI integrations, MVPs, web applications, and digital transformation projects.",
};

const allProjects = [
  ...caseStudies,
  {
    category: "Web Development",
    title: "Multi-Vendor Marketplace Platform",
    description: "A full-featured marketplace with vendor onboarding, payment splitting, and real-time inventory serving 200+ sellers.",
    tags: ["Next.js", "Stripe Connect", "Redis", "PostgreSQL"],
    metric: "200+ vendors",
  },
  {
    category: "AI Development",
    title: "Legal Document Analysis Engine",
    description: "An AI platform that analyzes contracts, extracts clauses, and identifies risks — saving lawyers 15+ hours per week.",
    tags: ["Python", "LangChain", "GPT-4", "FastAPI"],
    metric: "15hrs/week saved",
  },
  {
    category: "Digital Marketing",
    title: "D2C Brand Growth Campaign",
    description: "Full-funnel strategy across Meta, Google, and email that achieved 420% ROAS for a direct-to-consumer brand.",
    tags: ["Google Ads", "Meta Ads", "Klaviyo", "SEO"],
    metric: "420% ROAS",
  },
  {
    category: "SaaS Platform",
    title: "HR Management SaaS",
    description: "Multi-tenant HR platform with payroll, leave tracking, and performance reviews — now serving 50+ companies.",
    tags: ["React", "Node.js", "Stripe", "AWS"],
    metric: "50+ companies",
  },
];

const projectImages = [
  "/images/case-saas.jpg", "/images/case-health.jpg",
  "/images/case-automation.jpg", "/images/case-web.jpg",
  "/images/service-digital.jpg", "/images/service-data.jpg",
  "/images/service-cloud.jpg", "/images/service-bps.jpg",
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Portfolio</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Work that
                <span className="gradient-text"> speaks.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                Real projects. Real outcomes. Here&apos;s a selection of work we&apos;ve delivered for startups, scale-ups, and enterprises.
              </p>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-12 bg-white border-b border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-4">
              {[
                { val: "50+", label: "Projects" },
                { val: "30+", label: "Clients" },
                { val: "6", label: "Countries" },
                { val: "4-8 wk", label: "Avg. MVP" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-heading text-2xl font-bold text-text-dark">{s.val}</span>
                  <span className="text-text-dark-muted text-xs ml-2 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allProjects.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.06}>
                  <div className="group bg-white border border-card-light-border overflow-hidden hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={projectImages[i % projectImages.length]} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">{p.category}</span>
                      </div>
                      <ArrowUpRight size={16} className="absolute top-4 right-4 text-white/30 group-hover:text-white transition-colors" />
                    </div>
                    <div className="p-7 flex flex-col flex-grow">
                      <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed mb-5 flex-grow">{p.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          <span className="text-sm font-semibold text-accent">{p.metric}</span>
                        </div>
                        <div className="flex gap-2">
                          {p.tags.slice(0, 2).map((t) => (
                            <span key={t} className="text-[11px] text-text-dark-muted">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA
          eyebrow="Have a project in mind?"
          title="Let's discuss how we can bring your idea to life."
        />
      </main>
      <Footer />
    </>
  );
}
