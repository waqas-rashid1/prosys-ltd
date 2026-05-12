import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase, Heart, Globe, Zap, GraduationCap, Coffee, MapPin, Clock,
  ArrowRight, DollarSign, Users2, Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import DarkSectionFx from "@/components/ui/DarkSectionFx";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join PROSYS LTD — we're hiring engineers, designers, and growth specialists. Remote-friendly, high-impact work, competitive compensation.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — PROSYS LTD",
    description: "Join PROSYS LTD — we're hiring engineers, designers, and growth specialists. Remote-friendly, high-impact work, competitive compensation.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — PROSYS LTD",
    description: "Join PROSYS LTD — we're hiring engineers, designers, and growth specialists. Remote-friendly, high-impact work, competitive compensation.",
  },
};

const perks = [
  { icon: Zap, title: "High-Impact Work", desc: "Ship products used by thousands. Every project moves the needle." },
  { icon: Globe, title: "Remote-Friendly", desc: "Work from anywhere. We care about output, not office hours." },
  { icon: Heart, title: "Growth Culture", desc: "Learning budgets, mentorship, and a culture that pushes you forward." },
  { icon: Briefcase, title: "Competitive Pay", desc: "Market-rate salaries with performance bonuses and equity for senior roles." },
  { icon: GraduationCap, title: "Upskilling", desc: "$1,200/year learning budget. Courses, conferences, and certifications covered." },
  { icon: Coffee, title: "Flexible Hours", desc: "Async-first. Own your schedule, align with your team. 25 days PTO + public holidays." },
];

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote / Lahore",
    experience: "5+ years",
    salary: "PKR 400K – 650K / month",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    responsibilities: [
      "Architect and ship production features end-to-end",
      "Lead code reviews and mentor mid-level engineers",
      "Own technical design for greenfield products",
    ],
    requirements: [
      "5+ years shipping React/Next.js and Node.js in production",
      "Deep PostgreSQL + distributed systems experience",
      "Track record of owning features from spec to prod",
    ],
    process: "CV screen → Technical take-home → 2 interviews → Offer (2 weeks total)",
  },
  {
    title: "AI/ML Engineer",
    dept: "AI & Data",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years",
    salary: "PKR 350K – 550K / month",
    tags: ["Python", "LangChain", "OpenAI"],
    responsibilities: [
      "Design and ship LLM-powered features in production",
      "Build evaluation harnesses and model-routing strategies",
      "Own cost optimization and latency budgets",
    ],
    requirements: [
      "3+ years Python + ML in production",
      "Hands-on with LangChain, OpenAI, vector DBs",
      "Strong systems fundamentals",
    ],
    process: "CV screen → Live coding + ML review → 2 interviews → Offer",
  },
];

const employeeVoices = [
  {
    quote:
      "Twelve months here delivered more shipped production code than three years at my previous company. Experienced peers, high trust, and a delivery culture that respects engineering time.",
    role: "Senior Full-Stack Engineer",
    tenure: "1.5 yrs",
  },
  {
    quote:
      "The learning budget is real. I took a paid week off to do a system-design intensive and the team covered my sprints. No other place I've worked does that.",
    role: "AI/ML Engineer",
    tenure: "2 yrs",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <PageHero
          badge="We're Hiring"
          title="Invest in your career,"
          highlight="grow with us."
          description="Join a team delivering production-grade platforms for funded startups and mid-market enterprises. Substantive engineering work, experienced peers, and a culture organized around craft."
          bgImage="/images/careers-hero.jpg"
          bgImageOpacity={0.25}
          trustSignals={["Distributed work model", "Experienced peers", "Equity for senior roles", "25 days PTO"]}
          primaryCta={{ label: "View open roles", href: "#roles" }}
          secondaryCta={{ label: "Submit a general CV", href: "/careers/apply" }}
          stats={[
            { value: `${openRoles.length}`, label: "Open Roles" },
            { value: `${new Set(openRoles.map((r) => r.dept)).size}`, label: "Departments" },
            { value: "Remote+", label: "Work Model" },
            { value: "PKR 220K+", label: "Starting Salary" },
          ]}
        />

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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">Why <span className="gradient-text">PROSYS.</span></h2>
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

        {/* Employee Voices */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Voices From The Team</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">What it&apos;s like to <span className="gradient-text">work here.</span></h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {employeeVoices.map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-light-primary border border-card-light-border rounded-md p-7 h-full flex flex-col">
                    <Quote size={24} className="text-accent/30 mb-4" strokeWidth={1.5} />
                    <p className="text-text-dark text-[15px] leading-relaxed flex-grow">&ldquo;{v.quote}&rdquo;</p>
                    <div className="mt-5 pt-5 border-t border-card-light-border flex items-center justify-between">
                      <p className="text-sm font-bold text-text-dark">{v.role}</p>
                      <p className="text-xs text-text-dark-muted">{v.tenure}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles with salary + details */}
        <section id="roles" className="relative py-14 lg:py-20 bg-dark-primary scroll-mt-20 overflow-hidden">
          <DarkSectionFx variant="default" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Open Positions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4">Join the <span className="gradient-text">team.</span></h2>
              <p className="text-text-light-muted mb-10">
                {openRoles.length} open roles across {new Set(openRoles.map(r => r.dept)).size} departments · Salary ranges transparent
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {openRoles.map((role, i) => (
                <ScrollReveal key={role.title} delay={i * 0.03}>
                  <details className="group bg-card-dark border border-card-dark-border rounded-md overflow-hidden">
                    <summary className="cursor-pointer list-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 hover:bg-accent/[0.04] transition-colors">
                      <div>
                        <h3 className="font-heading text-base font-bold text-text-light group-open:text-accent-light transition-colors mb-1.5">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-text-light-muted">
                          <span className="flex items-center gap-1"><Briefcase size={10} />{role.dept}</span>
                          <span className="flex items-center gap-1"><Clock size={10} />{role.type}</span>
                          <span className="flex items-center gap-1"><MapPin size={10} />{role.location}</span>
                          <span className="flex items-center gap-1"><Users2 size={10} />{role.experience}</span>
                          <span className="flex items-center gap-1 text-accent-light font-semibold"><DollarSign size={10} />{role.salary}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5 flex-wrap">
                          {role.tags.map((t) => (
                            <span key={t} className="px-2 py-0.5 text-[10px] border border-card-dark-border text-text-light-muted">{t}</span>
                          ))}
                        </div>
                        <ArrowRight size={14} className="text-text-light-muted/40 group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>

                    <div className="p-6 pt-2 border-t border-card-dark-border grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[11px] uppercase tracking-widest text-accent-light font-semibold mb-3">What you&apos;ll do</h4>
                        <ul className="space-y-2.5 text-sm text-text-light-muted">
                          {role.responsibilities.map((r) => (
                            <li key={r} className="flex items-start gap-2">
                              <span className="mt-2 h-1 w-1 rounded-full bg-accent-light flex-shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[11px] uppercase tracking-widest text-accent-light font-semibold mb-3">What we&apos;re looking for</h4>
                        <ul className="space-y-2.5 text-sm text-text-light-muted">
                          {role.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2">
                              <span className="mt-2 h-1 w-1 rounded-full bg-accent-light flex-shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-card-dark-border">
                        <p className="text-xs text-text-light-muted">
                          <span className="text-accent-light font-semibold uppercase tracking-widest mr-2">Process:</span>
                          {role.process}
                        </p>
                        <Link
                          href={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                          className="inline-flex items-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white font-semibold px-5 py-2.5 rounded-md text-xs uppercase tracking-widest transition-all"
                        >
                          Apply for this role <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* General CTA */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Don&apos;t see the role <span className="gradient-text">you&apos;re looking for?</span>
                </h2>
                <p className="text-text-dark-muted text-lg mb-8">We&apos;re always open to talking to great people. Send us your CV and tell us how you&apos;d contribute.</p>
                <Link href="/careers/apply" className="inline-flex items-center justify-center gap-2 font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
