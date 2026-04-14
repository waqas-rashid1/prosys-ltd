import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore PROSYS LTD's portfolio of case studies — SaaS platforms, AI integrations, MVPs, web applications, and digital transformation projects delivered for clients worldwide.",
};

const additionalProjects = [
  {
    category: "Web Development",
    title: "Multi-Vendor Marketplace Platform",
    description:
      "A full-featured marketplace with vendor onboarding, payment splitting, real-time inventory management, and an admin dashboard serving 200+ sellers.",
    tags: ["Next.js", "Stripe Connect", "Redis", "PostgreSQL"],
    metric: "200+ vendors onboarded",
  },
  {
    category: "AI Development",
    title: "Legal Document Analysis Engine",
    description:
      "An AI-powered platform that analyzes legal contracts, extracts key clauses, identifies risks, and generates summary reports — saving lawyers 15+ hours per week.",
    tags: ["Python", "LangChain", "GPT-4", "FastAPI"],
    metric: "15hrs/week saved",
  },
  {
    category: "Digital Marketing",
    title: "D2C Brand Growth Campaign",
    description:
      "Full-funnel digital marketing strategy including paid ads, SEO, email automation, and conversion rate optimization for a direct-to-consumer skincare brand.",
    tags: ["Google Ads", "Meta Ads", "Klaviyo", "SEO"],
    metric: "420% ROAS",
  },
  {
    category: "SaaS Platform",
    title: "HR Management SaaS",
    description:
      "End-to-end HR platform with employee management, payroll integration, leave tracking, performance reviews, and multi-tenant architecture for SMBs.",
    tags: ["React", "Node.js", "Stripe", "AWS"],
    metric: "50+ companies using it",
  },
];

const allProjects = [...caseStudies, ...additionalProjects];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Our Portfolio"
          title="Work That"
          highlight="Speaks"
          description="Real projects. Real results. Here's a selection of the work we've delivered for startups, scale-ups, and enterprises worldwide."
        />

        {/* Projects Grid */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allProjects.map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 0.08}>
                  <div className="group relative rounded-2xl border border-card-light-border bg-white p-8 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-xl bg-accent/10 text-accent tracking-wide">
                        {project.category}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-text-dark-muted/30 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                      />
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-dark-muted leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/5 border border-accent/10 self-start">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm font-medium text-accent">
                        {project.metric}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-card-light-border">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-xl bg-light-primary text-text-dark-muted font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics banner */}
        <section className="py-16 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "50+", label: "Projects Shipped" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "6", label: "Countries Served" },
                  { value: "4-8 wk", label: "Avg. MVP Delivery" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-1">
                      {item.value}
                    </div>
                    <div className="text-text-light-muted text-xs uppercase tracking-widest">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner
          title="Have a Project"
          highlight="In Mind?"
          description="We'd love to hear about it. Let's discuss how we can bring your idea to life."
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
