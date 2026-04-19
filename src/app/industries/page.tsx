import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Landmark, HeartPulse, ShoppingCart, GraduationCap,
  Building2, Briefcase, Truck, PlaySquare, ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import { industries } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description: "PROSYS LTD serves FinTech, HealthTech, E-Commerce, EdTech, Real Estate, Logistics, Media, and SaaS startups with tailored software solutions.",
};

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase, Truck, PlaySquare,
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Industries"
          title="Domain expertise that"
          highlight="delivers."
          description="We understand the unique challenges, regulations, and opportunities within each sector we serve — from FinTech and HealthTech to Logistics and SaaS."
          trustSignals={["HIPAA · PCI-DSS · GDPR", "SOC2-aligned", "Multi-region delivery"]}
          primaryCta={{ label: "Explore industries", href: "#industries-grid" }}
          secondaryCta={{ label: "Discuss your sector", href: "/contact" }}
          stats={[
            { value: `${industries.length}`, label: "Core Sectors" },
            { value: "12+", label: "Countries" },
            { value: "30+", label: "Active Clients" },
            { value: "50+", label: "Engagements" },
          ]}
        />

        {/* Grid overview */}
        <section id="industries-grid" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-light-border border border-card-light-border rounded-md overflow-hidden">
              {industries.map((ind, i) => {
                const Icon = iconMap[ind.icon] || Briefcase;
                return (
                  <ScrollReveal key={ind.slug} delay={i * 0.05}>
                    <Link href={`/industries/${ind.slug}`} className="group block bg-white h-full relative overflow-hidden">
                      <div className="relative h-44 overflow-hidden">
                        <Image src={ind.image} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-dark-primary/10" />
                        <div className="absolute top-5 left-5 w-11 h-11 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all">
                          <Icon size={18} />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-bold text-text-dark mb-2 group-hover:text-accent transition-colors">{ind.title}</h3>
                        <p className="text-text-dark-muted text-sm leading-relaxed mb-4 line-clamp-3">{ind.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                          <span className="flex items-center gap-1.5 text-[11px] text-text-dark-muted"><ShieldCheck size={11} className="text-accent" />{ind.compliance[0]}</span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                            Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
