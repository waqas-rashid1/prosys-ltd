import type { Metadata } from "next";
import { Briefcase, Heart, Globe, Zap, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join PROSYS LTD — we're hiring engineers, designers, and growth specialists who want to build products that matter. Remote-friendly, high-impact work.",
};

const perks = [
  { icon: Zap, title: "High-Impact Work", desc: "Ship products used by thousands. No busywork — every project matters." },
  { icon: Globe, title: "Remote-Friendly", desc: "Work from anywhere. We care about output, not where your desk is." },
  { icon: Heart, title: "Growth Culture", desc: "Learning budgets, conference access, and mentorship from senior engineers." },
  { icon: Briefcase, title: "Competitive Pay", desc: "Market-rate compensation with performance bonuses and project incentives." },
];

const openRoles = [
  { title: "Senior Full-Stack Engineer", type: "Full-time", location: "Remote / Lahore", dept: "Engineering" },
  { title: "AI/ML Engineer", type: "Full-time", location: "Remote", dept: "AI & Data" },
  { title: "UI/UX Designer", type: "Full-time / Contract", location: "Remote", dept: "Design" },
  { title: "SEO & Content Strategist", type: "Full-time", location: "Remote", dept: "Growth" },
  { title: "Business Development Manager", type: "Full-time", location: "Lahore", dept: "Sales" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Join Our Team"
          title="Build Things"
          highlight="That Matter"
          description="We're a team of engineers, designers, and growth specialists who ship products that scale. If you want high-impact work with talented people — we want to talk."
        />

        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12 text-center">
                Why PROSYS?
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <ScrollReveal key={perk.title} delay={i * 0.08}>
                    <div className="group p-6 rounded-2xl border border-card-light-border bg-white hover:shadow-lg hover:border-accent/30 transition-all duration-300 text-center h-full">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-dark mb-2">{perk.title}</h3>
                      <p className="text-text-dark-muted text-sm">{perk.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-28 lg:py-36 bg-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4 text-center">
                Open Positions
              </h2>
              <p className="text-text-light-muted text-center mb-12 max-w-xl mx-auto">
                Don&apos;t see your role? We&apos;re always looking for exceptional talent.
                Send your CV to <a href="mailto:careers@prosysltd.com" className="text-accent hover:underline">careers@prosysltd.com</a>
              </p>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-3">
              {openRoles.map((role, i) => (
                <ScrollReveal key={role.title} delay={i * 0.06}>
                  <a
                    href="mailto:careers@prosysltd.com"
                    className="group flex items-center justify-between p-5 rounded-xl border border-card-dark-border bg-card-dark hover:border-accent/40 transition-all duration-300"
                  >
                    <div>
                      <div className="font-heading text-base font-bold text-text-light group-hover:text-accent transition-colors">
                        {role.title}
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-text-light-muted">
                        <span>{role.dept}</span>
                        <span className="h-1 w-1 rounded-full bg-text-light-muted/40" />
                        <span>{role.type}</span>
                        <span className="h-1 w-1 rounded-full bg-text-light-muted/40" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-text-light-muted group-hover:text-accent transition-colors" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner title="Ready to Join" highlight="PROSYS?" description="Send us your CV and let's talk." buttonText="Apply Now" buttonHref="mailto:careers@prosysltd.com" dark={false} />
      </main>
      <Footer />
    </>
  );
}
