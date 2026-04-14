import type { Metadata } from "next";
import {
  Code2,
  Cpu,
  BrainCircuit,
  Rocket,
  Cloud,
  Bot,
  Search,
  Sparkles,
  Megaphone,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PROSYS LTD's full-spectrum software development services — web development, AI development, MVP engineering, SaaS platforms, SEO, AIEO, and digital marketing.",
};

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  BrainCircuit,
  Rocket,
  Cloud,
  Bot,
  Search,
  Sparkles,
  Megaphone,
  Palette,
};

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
      <main>
        <PageHero
          badge="Our Services"
          title="What We"
          highlight="Build"
          description="Full-spectrum software development and digital growth services. From ideation to scale — we handle every layer of the stack."
        />

        {/* Services Grid */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => {
                const Icon = iconMap[service.icon];
                return (
                  <ScrollReveal key={service.title} delay={i * 0.06}>
                    <div className="group flex gap-5 p-6 rounded-2xl border border-card-light-border bg-white hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 h-full">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                        {Icon && <Icon size={26} />}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-text-dark mb-2 tracking-wide">
                          {service.title}
                        </h3>
                        <p className="text-text-dark-muted leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32 bg-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-accent/20 bg-accent/5 mb-6">
                  <span className="text-xs text-accent tracking-widest uppercase font-medium">
                    How It Works
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-wide mb-4 leading-tight">
                  Our Process Is
                  <br />
                  <span className="gradient-text">Transparent</span>
                </h2>
                <p className="text-text-light-muted text-lg leading-relaxed">
                  No black boxes. No surprises. From the first call to post-launch support,
                  you know exactly what&apos;s happening, when, and why.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  {processSteps.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-card-dark-border bg-card-dark/50 hover:border-accent/30 transition-all duration-300"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-text-light">{step}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTABanner dark={false} />
      </main>
      <Footer />
    </>
  );
}
