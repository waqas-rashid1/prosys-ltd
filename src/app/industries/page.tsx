import type { Metadata } from "next";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industries } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "PROSYS LTD serves FinTech, HealthTech, E-Commerce, EdTech, Real Estate, and Startups with tailored software solutions and digital growth services.",
};

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Building2,
  Briefcase,
};

const industrySolutions = [
  {
    industry: "FinTech",
    solutions: [
      "Payment processing platforms",
      "Trading & portfolio dashboards",
      "KYC/AML compliance systems",
      "Financial analytics & reporting",
    ],
  },
  {
    industry: "HealthTech",
    solutions: [
      "Telehealth platforms",
      "Patient management systems",
      "HIPAA-compliant data pipelines",
      "Clinical workflow automation",
    ],
  },
  {
    industry: "E-Commerce & D2C",
    solutions: [
      "Headless commerce platforms",
      "AI-powered recommendations",
      "Inventory & order management",
      "Conversion rate optimization",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Industries"
          title="Domain Expertise"
          highlight="That Delivers"
          description="We don't just build software — we understand your industry's challenges, regulations, and opportunities."
        />

        {/* Industries Grid */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, i) => {
                const Icon = iconMap[industry.icon];
                return (
                  <ScrollReveal key={industry.title} delay={i * 0.1}>
                    <div className="group rounded-2xl border border-card-light-border bg-white p-8 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 h-full">
                      <div className="mb-5 w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                        {Icon && <Icon size={28} />}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-text-dark mb-3">
                        {industry.title}
                      </h3>
                      <p className="text-text-dark-muted leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
                      >
                        Discuss Your Project <ArrowRight size={14} />
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Detail */}
        <section className="py-24 lg:py-32 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4">
                  Solutions We Deliver
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-text-light-muted">
                  Tailored technology solutions for each industry&apos;s unique challenges.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industrySolutions.map((item, i) => (
                <ScrollReveal key={item.industry} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-card-dark-border bg-card-dark h-full">
                    <h3 className="font-heading text-xl font-bold text-accent mb-4">
                      {item.industry}
                    </h3>
                    <ul className="space-y-3">
                      {item.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-start gap-3 text-text-light-muted text-sm"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner dark={false} />
      </main>
      <Footer />
    </>
  );
}
