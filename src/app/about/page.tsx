import type { Metadata } from "next";
import { Target, Zap, Users, Globe, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatsCounter from "@/components/ui/StatsCounter";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PROSYS LTD — a startup software development company with a senior team building enterprise-quality AI, SaaS, and web solutions at startup speed.",
};

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description:
      "We measure success by business impact, not lines of code. Every decision we make is tied to your goals.",
  },
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description:
      "We ship fast because we plan smart. Lean processes, senior engineers, and no unnecessary overhead.",
  },
  {
    icon: Users,
    title: "Partnership, Not Vendor",
    description:
      "We embed into your team. Your wins are our wins. We think like co-founders, not contractors.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We serve clients worldwide with the same quality bar — code reviews, CI/CD, documentation, and security built in.",
  },
  {
    icon: Award,
    title: "Craft & Quality",
    description:
      "Clean architecture, tested code, and pixel-perfect design. We take pride in shipping work we'd use ourselves.",
  },
  {
    icon: Heart,
    title: "Honest Communication",
    description:
      "No scope creep surprises. No hidden costs. If something changes, you hear it from us first — with a plan.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Founded",
    description:
      "PROSYS LTD was born from a simple idea: senior engineers building real products, not just writing code. We started with 5 people and a vision.",
  },
  {
    year: "2024",
    title: "First 10 Clients",
    description:
      "Within months, we delivered MVPs, SaaS platforms, and AI integrations for startups across 4 countries. Word spread fast.",
  },
  {
    year: "2025",
    title: "Team Growth",
    description:
      "Expanded to 15+ engineers, designers, and growth specialists. Added dedicated SEO, AIEO, and digital marketing capabilities.",
  },
  {
    year: "2026",
    title: "Scaling Up",
    description:
      "50+ projects delivered. Serving clients across North America, Europe, the Middle East, and Asia. Building the future, one product at a time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="About PROSYS LTD"
          title="Small Team."
          highlight="Heavy Output."
          description="We're a startup that builds like an enterprise. Senior engineers, lean processes, and a relentless focus on shipping products that matter."
        />

        {/* Story */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <ScrollReveal>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark tracking-wide mb-6">
                  Why We Exist
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed mb-4">
                  Too many companies get stuck between agencies that overpromise and freelancers
                  that underdeliver. We built PROSYS LTD to be the third option — a team of
                  senior engineers who operate like your in-house tech department, without the
                  overhead.
                </p>
                <p className="text-text-dark-muted text-lg leading-relaxed">
                  We don&apos;t just write code. We architect solutions, design experiences,
                  and drive growth. From AI-powered platforms to SEO and AIEO — we handle the
                  full spectrum so you can focus on your business.
                </p>
              </ScrollReveal>
            </div>

            {/* Stats */}
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-dark-secondary">
                {stats.map((stat) => (
                  <StatsCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-wide mb-4">
                  Our Values
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-text-light-muted">
                  The principles that guide every project, every decision, every line of code.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={i * 0.08}>
                    <div className="group p-6 rounded-2xl border border-card-dark-border bg-card-dark hover:border-accent/30 transition-all duration-300 h-full">
                      <div className="mb-4 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-text-light mb-2 tracking-wide">
                        {value.title}
                      </h3>
                      <p className="text-text-light-muted text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark tracking-wide mb-4">
                  Our Journey
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-text-dark-muted">
                  From a 5-person team to a global software company — and we&apos;re just getting started.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="relative flex gap-6 md:gap-10 pb-12 last:pb-0">
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[27px] md:left-[35px] top-16 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
                    )}
                    <div className="flex-shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] rounded-2xl border-2 border-accent/30 flex items-center justify-center">
                      <span className="font-heading text-sm md:text-base font-bold text-accent tracking-wider">
                        {item.year}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-2 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-text-dark-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Want to Join"
          highlight="Our Team?"
          description="We're always looking for talented engineers, designers, and marketers who want to build things that matter."
          buttonText="Get in Touch"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
