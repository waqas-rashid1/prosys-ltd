import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industries } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description: "PROSYS LTD serves FinTech, HealthTech, E-Commerce, EdTech, Real Estate, and Startups with tailored software solutions.",
};

const iconMap: Record<string, React.ElementType> = { Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase };
const industryImages = ["/images/industry-fintech.jpg", "/images/industry-health.jpg", "/images/industry-ecom.jpg", "/images/service-digital.jpg", "/images/service-data.jpg", "/images/service-cloud.jpg"];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Industries</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Domain expertise that
                <span className="gradient-text"> delivers.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                We understand the unique challenges, regulations, and opportunities within each sector we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Industries alternating layout */}
        {industries.map((ind, i) => {
          const Icon = iconMap[ind.icon];
          return (
            <section key={ind.title} className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-light-primary" : "bg-white"}`}>
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <ScrollReveal>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={`relative h-64 lg:h-80 overflow-hidden ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                      <Image src={industryImages[i % industryImages.length]} alt={ind.title} fill className="object-cover" sizes="50vw" />
                    </div>
                    <div>
                      <div className="w-12 h-12 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-5">
                        {Icon && <Icon size={22} />}
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">{ind.title}</h2>
                      <p className="text-text-dark-muted text-lg leading-relaxed mb-6">{ind.description}</p>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                        Discuss Your Project <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          );
        })}

        <FinalCTA
          eyebrow="Don't see your industry?"
          title="We adapt fast — and ship faster."
          primary={{ label: "Discuss Your Sector", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
