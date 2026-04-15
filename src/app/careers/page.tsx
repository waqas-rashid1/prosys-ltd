import type { Metadata } from "next";
import {
  Briefcase, Heart, Globe, Zap, GraduationCap, Coffee,
  MapPin, Clock, ArrowRight, Search,
} from "lucide-react";
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
  { icon: Zap, title: "High-Impact Work", desc: "Ship products used by thousands. No busywork — every project moves the needle." },
  { icon: Globe, title: "Remote-Friendly", desc: "Work from anywhere. We care about output, not office hours." },
  { icon: Heart, title: "Growth Culture", desc: "Learning budgets, mentorship from seniors, and a culture that pushes you forward." },
  { icon: Briefcase, title: "Competitive Pay", desc: "Market-rate salaries with performance bonuses and project-based incentives." },
  { icon: GraduationCap, title: "Upskilling", desc: "Access to courses, conferences, certifications — we invest in your growth." },
  { icon: Coffee, title: "Flexible Hours", desc: "Async-first. Overlap with your team, but own your schedule." },
];

const departments = ["All", "Engineering", "AI & Data", "Design", "Growth", "Sales", "Operations"];

const openRoles = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", type: "Full-time", location: "Remote / Lahore", tags: ["Next.js", "Node.js", "PostgreSQL"] },
  { title: "AI/ML Engineer", dept: "AI & Data", type: "Full-time", location: "Remote", tags: ["Python", "LangChain", "OpenAI"] },
  { title: "Frontend Engineer", dept: "Engineering", type: "Full-time", location: "Remote / Lahore", tags: ["React", "TypeScript", "TailwindCSS"] },
  { title: "UI/UX Designer", dept: "Design", type: "Full-time / Contract", location: "Remote", tags: ["Figma", "Design Systems", "Prototyping"] },
  { title: "SEO & Content Strategist", dept: "Growth", type: "Full-time", location: "Remote", tags: ["SEO", "Content Strategy", "Analytics"] },
  { title: "DevOps Engineer", dept: "Engineering", type: "Full-time", location: "Remote", tags: ["AWS", "Docker", "CI/CD"] },
  { title: "Business Development Manager", dept: "Sales", type: "Full-time", location: "Lahore", tags: ["B2B Sales", "SaaS", "Partnerships"] },
  { title: "Project Manager", dept: "Operations", type: "Full-time", location: "Remote / Lahore", tags: ["Agile", "Scrum", "Delivery"] },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="We're Hiring"
          title="Invest in Your Career,"
          highlight="Grow With Us"
          description="Join a team that ships real products for real clients. High-impact work, senior talent, and a culture that celebrates craft."
        />

        {/* Why Join section */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
                  Why PROSYS?
                </h2>
                <p className="text-text-dark-muted text-lg max-w-2xl mx-auto">
                  We&apos;re not just building software — we&apos;re building careers. Here&apos;s what you get.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <ScrollReveal key={perk.title} delay={i * 0.06}>
                    <div className="group p-6 rounded-2xl border border-card-light-border bg-white hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-bold text-text-dark mb-1">{perk.title}</h3>
                          <p className="text-text-dark-muted text-sm leading-relaxed">{perk.desc}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-28 lg:py-36 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4">
                  Open Positions
                </h2>
                <p className="text-text-light-muted text-lg max-w-xl mx-auto">
                  Find your next role. Don&apos;t see a fit? Send your CV to{" "}
                  <a href="mailto:careers@prosysltd.com" className="text-accent-light hover:underline">
                    careers@prosysltd.com
                  </a>
                </p>
              </div>
            </ScrollReveal>

            {/* Search + Filter bar */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
                <div className="relative flex-grow">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light-muted/40" />
                  <input
                    type="text"
                    placeholder="Search roles..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-card-dark-border bg-card-dark text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                  />
                </div>
                <select className="px-4 py-3.5 rounded-xl border border-card-dark-border bg-card-dark text-text-light text-sm focus:outline-none focus:border-accent/50 transition-all min-w-[160px]">
                  {departments.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </ScrollReveal>

            {/* Role cards */}
            <div className="max-w-4xl mx-auto space-y-3">
              {openRoles.map((role, i) => (
                <ScrollReveal key={role.title} delay={i * 0.04}>
                  <a
                    href="mailto:careers@prosysltd.com"
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-card-dark-border bg-card-dark hover:border-accent/40 hover:bg-card-dark/80 transition-all duration-300"
                  >
                    <div className="flex-grow">
                      <div className="font-heading text-base font-bold text-text-light group-hover:text-accent-light transition-colors mb-2">
                        {role.title}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-light-muted">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={11} />
                          {role.dept}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={11} />
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {role.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-[10px] rounded-lg border border-card-dark-border text-text-light-muted font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight size={16} className="text-text-light-muted/30 group-hover:text-accent-light flex-shrink-0 transition-colors" />
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-10">
                <p className="text-text-light-muted text-sm">
                  Showing {openRoles.length} open roles across {departments.length - 1} departments
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Life at PROSYS */}
        <section className="py-28 lg:py-36 bg-light-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
                  Life at PROSYS
                </h2>
                <p className="text-text-dark-muted text-lg max-w-2xl mx-auto">
                  We&apos;re a small team that does big things. Here&apos;s what it&apos;s like to work with us.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Ship Real Products",
                  desc: "No internal tools nobody uses. Every project is for a real client with real users. You see your work in production, making impact.",
                },
                {
                  title: "Learn From Seniors",
                  desc: "Our team has shipped products at scale. You'll work alongside engineers who've built SaaS platforms, AI systems, and enterprise software.",
                },
                {
                  title: "Own Your Growth",
                  desc: "Conference budgets, certification support, and dedicated learning time. We grow when you grow — and we take that seriously.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="p-8 rounded-2xl border border-card-light-border bg-white h-full">
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-dark-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to Build"
          highlight="With Us?"
          description="Send us your CV and let's have a conversation about your future."
          buttonText="Apply Now"
          buttonHref="mailto:careers@prosysltd.com"
          dark
        />
      </main>
      <Footer />
    </>
  );
}
