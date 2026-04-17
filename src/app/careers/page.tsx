import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Heart, Globe, Zap, GraduationCap, Coffee, MapPin, Clock, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join PROSYS LTD — we're hiring engineers, designers, and growth specialists. Remote-friendly, high-impact work.",
};

const perks = [
  { icon: Zap, title: "High-Impact Work", desc: "Ship products used by thousands. Every project moves the needle." },
  { icon: Globe, title: "Remote-Friendly", desc: "Work from anywhere. We care about output, not office hours." },
  { icon: Heart, title: "Growth Culture", desc: "Learning budgets, mentorship, and a culture that pushes you forward." },
  { icon: Briefcase, title: "Competitive Pay", desc: "Market-rate salaries with performance bonuses." },
  { icon: GraduationCap, title: "Upskilling", desc: "Courses, conferences, certifications — we invest in you." },
  { icon: Coffee, title: "Flexible Hours", desc: "Async-first. Own your schedule, align with your team." },
];

const openRoles = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", type: "Full-time", location: "Remote / Lahore", tags: ["Next.js", "Node.js", "PostgreSQL"] },
  { title: "AI/ML Engineer", dept: "AI & Data", type: "Full-time", location: "Remote", tags: ["Python", "LangChain", "OpenAI"] },
  { title: "Frontend Engineer", dept: "Engineering", type: "Full-time", location: "Remote / Lahore", tags: ["React", "TypeScript"] },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time", location: "Remote", tags: ["Figma", "Design Systems"] },
  { title: "SEO & Content Strategist", dept: "Growth", type: "Full-time", location: "Remote", tags: ["SEO", "Content"] },
  { title: "DevOps Engineer", dept: "Engineering", type: "Full-time", location: "Remote", tags: ["AWS", "Docker"] },
  { title: "Business Development Manager", dept: "Sales", type: "Full-time", location: "Lahore", tags: ["B2B", "SaaS"] },
  { title: "Project Manager", dept: "Operations", type: "Full-time", location: "Remote / Lahore", tags: ["Agile", "Scrum"] },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero with image */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-dark-primary overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/careers-hero.jpg" alt="Careers" fill className="object-cover opacity-20" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/60" />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">We&apos;re Hiring</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Invest in your career,
                <span className="gradient-text"> grow with us.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                Join a team that ships real products for real clients. High-impact work, senior talent, and a culture that celebrates craft.
              </p>
            </div>
          </div>
        </section>

        {/* Team photos */}
        <section className="bg-white">
          <div className="grid grid-cols-3 gap-px">
            {["/images/team-collab.jpg", "/images/team-meeting.jpg", "/images/team-office.jpg"].map((img, i) => (
              <div key={i} className="relative h-40 md:h-56 overflow-hidden">
                <Image src={img} alt="Team" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Benefits</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">Why PROSYS?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-card-light-border border border-card-light-border">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <ScrollReveal key={perk.title} delay={i * 0.06}>
                    <div className="bg-white p-7 h-full group hover:bg-light-primary transition-colors">
                      <div className="w-10 h-10 rounded-md bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-dark mb-1">{perk.title}</h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed">{perk.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-14 lg:py-20 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Open Positions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4">Join the Team</h2>
              <p className="text-text-light-muted mb-10">
                Don&apos;t see a fit? Send your CV to <a href="mailto:careers@prosysltd.com" className="text-accent-light hover:underline">careers@prosysltd.com</a>
              </p>
            </ScrollReveal>

            <div className="space-y-px bg-card-dark-border">
              {openRoles.map((role, i) => (
                <ScrollReveal key={role.title} delay={i * 0.04}>
                  <a href="mailto:careers@prosysltd.com" className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-card-dark hover:bg-accent/[0.04] transition-colors">
                    <div>
                      <h3 className="font-heading text-base font-bold text-text-light group-hover:text-accent-light transition-colors mb-1">{role.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-light-muted">
                        <span className="flex items-center gap-1"><Briefcase size={10} />{role.dept}</span>
                        <span className="flex items-center gap-1"><Clock size={10} />{role.type}</span>
                        <span className="flex items-center gap-1"><MapPin size={10} />{role.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        {role.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] border border-card-dark-border text-text-light-muted">{t}</span>
                        ))}
                      </div>
                      <ArrowRight size={14} className="text-text-light-muted/30 group-hover:text-accent-light transition-colors" />
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <p className="text-text-light-muted/40 text-sm mt-8 text-center">
              {openRoles.length} open roles across {new Set(openRoles.map(r => r.dept)).size} departments
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Ready to build with a team that
                  <span className="gradient-text"> delivers?</span>
                </h2>
                <p className="text-text-dark-muted text-lg mb-8">Send us your CV and let&apos;s have a conversation about your future.</p>
                <a href="mailto:careers@prosysltd.com" className="inline-flex items-center justify-center font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                  Apply Now
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
