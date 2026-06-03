import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Landmark, HeartPulse, ShoppingCart, GraduationCap,
  Building2, Briefcase, Truck, PlaySquare, ShieldCheck, Headset, Scale, Cpu,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import { industries } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries — Safe AI Deployment by Sector",
  description: "PROSYS LTD deploys AI safely across FinTech, HealthTech, SaaS & AI, logistics, BPO, and professional services — with the controls, integrations, and oversight each sector requires.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — PROSYS LTD",
    description: "Safe AI deployment for FinTech, HealthTech, SaaS & AI, logistics, BPO, and professional services — with sector-appropriate controls and integrations.",
    url: "/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries — PROSYS LTD",
    description: "Safe AI deployment for FinTech, HealthTech, SaaS & AI, logistics, BPO, and professional services — with sector-appropriate controls and integrations.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase, Truck, PlaySquare, Headset, Scale, Cpu,
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Industries"
          title="Safe AI deployment,"
          highlight="by sector."
          description="The workflows, data sensitivity, and risk profile differ in every sector — so we deploy AI with the permissions, integrations, and oversight that fit how your operations actually run."
          bgImage="/images/industry-fintech.jpg"
          bgImageOpacity={0.22}
          trustSignals={["Permission-aware data access", "Human-in-the-loop oversight", "Integrated with existing systems"]}
          primaryCta={{ label: "Explore industries", href: "#industries-grid" }}
          secondaryCta={{ label: "Discuss your sector", href: "/contact" }}
          stats={[
            { value: `${industries.length}`, label: "Core sectors" },
            { value: "6", label: "Core AI services" },
            { value: "HITL", label: "Oversight by design" },
            { value: "6–12w", label: "To production pilots" },
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

              {/* In-grid CTA tile — fills the trailing empty cell created
                  by 5 industries in a 3-column grid. Mirrors the size and
                  shape of the other tiles so the row reads as complete,
                  while a faint accent wash + dashed icon plate signals
                  "this is a prompt, not a missing card". */}
              <ScrollReveal delay={industries.length * 0.05}>
                <Link
                  href="/contact?intent=new-project"
                  className="group flex flex-col h-full bg-gradient-to-br from-accent/5 via-white to-white relative overflow-hidden hover:from-accent/10 transition-colors"
                >
                  <div className="relative h-44 overflow-hidden bg-light-secondary flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative w-14 h-14 rounded-md border-2 border-dashed border-accent/40 bg-white flex items-center justify-center text-accent group-hover:border-accent group-hover:bg-accent/5 transition-all">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[11px] uppercase tracking-widest font-semibold text-accent mb-2">
                      Don&apos;t see your sector?
                    </p>
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-2">
                      We work across adjacent verticals too.
                    </h3>
                    <p className="text-text-dark-muted text-sm leading-relaxed mb-4 flex-1">
                      InsurTech, real estate, EdTech, media, the public sector — if your workflows, data, and risk profile rhyme with what we deploy today, the playbook ports over. Tell us about your operations.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                      <span className="text-[11px] text-text-dark-muted">
                        Discovery call · 30 min
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                        Start a conversation
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
