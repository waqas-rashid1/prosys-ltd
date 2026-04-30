import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target, Zap, Users, Globe, Award, Heart,
  MapPin, Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import Testimonials from "@/components/Testimonials";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PROSYS LTD — a software development company with a senior team building enterprise-quality AI, SaaS, and web solutions at startup speed.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PROSYS LTD",
    description:
      "Learn about PROSYS LTD — a software development company with a senior team building enterprise-quality AI, SaaS, and web solutions at startup speed.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PROSYS LTD",
    description:
      "Learn about PROSYS LTD — a software development company with a senior team building enterprise-quality AI, SaaS, and web solutions at startup speed.",
  },
};

const values = [
  { icon: Target, title: "Outcome-Driven", description: "We measure success by business impact, not lines of code. Every decision is tied to your goals." },
  { icon: Zap, title: "Speed Without Shortcuts", description: "We ship fast because we plan smart. Lean processes, senior engineers, zero overhead." },
  { icon: Users, title: "Partnership Model", description: "We embed into your team. Your wins are our wins. We think like co-founders, not contractors." },
  { icon: Globe, title: "Global Standards", description: "We serve clients worldwide with the same bar — code reviews, CI/CD, documentation, and security." },
  { icon: Award, title: "Engineering Craft", description: "Clean architecture, tested code, and precise design. We ship work we'd stake our name on." },
  { icon: Heart, title: "Radical Transparency", description: "No scope creep. No hidden costs. If something changes, you hear it first — with a plan." },
];

const milestones = [
  { year: "Jan 2024", title: "Founded", desc: "Started with 5 senior engineers and a clear thesis: enterprise-quality software at startup speed." },
  { year: "Sep 2024", title: "First 10 Clients", desc: "Delivered MVPs, SaaS platforms, and AI integrations for startups across 4 countries." },
  { year: "2025", title: "Team Expansion", desc: "Grew to 15+ engineers, designers, and growth specialists. Added SEO, AIEO, and digital marketing." },
  { year: "2026", title: "Global Scale", desc: "50+ projects delivered. Serving clients across North America, Europe, Middle East, and Asia-Pacific." },
];

const leadership = [
  {
    name: "Faisal Rehman",
    role: "Founder & CEO",
    focus: "Strategy, Architecture, AI",
    bio: "15+ years building enterprise software. Previously led engineering at two venture-backed SaaS startups.",
    linkedin: "https://linkedin.com/in/prosysltd-ceo",
    initial: "F",
  },
  {
    name: "Chaudhry Hassan",
    role: "CTO",
    focus: "Engineering, Cloud, DevOps",
    bio: "AWS Certified Solutions Architect. Led platform engineering for multi-tenant SaaS at scale.",
    linkedin: "https://linkedin.com/in/prosysltd-cto",
    initial: "C",
  },
  {
    name: "Hira Malik",
    role: "Head of Design",
    focus: "UI/UX, Brand, Design Systems",
    bio: "Award-winning product designer. Shipped design systems for FinTech and HealthTech platforms.",
    linkedin: "https://linkedin.com/in/prosysltd-design",
    initial: "H",
  },
  {
    name: "Hamza Tariq",
    role: "Head of Growth",
    focus: "SEO, AIEO, Digital Marketing",
    bio: "Growth strategist with 10+ years in B2B SaaS. Pioneered AIEO frameworks for AI search visibility.",
    linkedin: "https://linkedin.com/in/prosysltd-growth",
    initial: "H",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <PageHero
          badge="About PROSYS LTD"
          title="We build software that"
          highlight="moves industries."
          description="PROSYS LTD is a full-spectrum software development company. We combine senior engineering talent with strategic thinking to deliver platforms, products, and growth systems that create lasting business impact."
          trustSignals={["Founded 2024", "15+ senior specialists", "Global delivery", "ISO-aligned processes"]}
          primaryCta={{ label: "Meet the team", href: "#leadership" }}
          secondaryCta={{ label: "Start a project", href: "/contact" }}
          stats={stats.map((s) => ({ value: `${s.value}${s.suffix}`, label: s.label }))}
        />

        {/* Mission */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Our Mission</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-8 leading-tight">
                  Bridge the gap between ambition and execution.
                </h2>
                <div className="space-y-6 text-text-dark-muted text-lg leading-relaxed">
                  <p>
                    Too many companies get stuck between agencies that overpromise and freelancers that underdeliver. We built PROSYS to be the third option — a team of senior engineers who operate like your in-house technology department, without the overhead.
                  </p>
                  <p>
                    We don&apos;t just write code. We architect systems, design experiences, optimize for search engines (including AI search engines), and drive measurable growth. From concept to scale — we handle the full lifecycle so you can focus on your business.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team Photos */}
        <section className="py-28 lg:py-36 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Our People</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">
                The Team Behind the Code
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                <div className="relative h-72 md:h-96 overflow-hidden group">
                  <Image src="/images/team-collab.jpg" alt="Team collaboration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading text-lg font-bold">Collaborative by Design</p>
                    <p className="text-white/70 text-sm">Cross-functional teams, shared ownership</p>
                  </div>
                </div>
                <div className="relative h-72 md:h-96 overflow-hidden group">
                  <Image src="/images/team-meeting.jpg" alt="Team meeting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading text-lg font-bold">Strategy-First Approach</p>
                    <p className="text-white/70 text-sm">Every project starts with deep discovery</p>
                  </div>
                </div>
                <div className="relative h-72 md:h-96 overflow-hidden group">
                  <Image src="/images/team-office.jpg" alt="Team at work" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading text-lg font-bold">Shipping Excellence</p>
                    <p className="text-white/70 text-sm">15+ engineers, designers, and strategists</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-28 lg:py-36 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Principles</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-12">
                What We Stand For
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-dark-border">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={i * 0.06}>
                    <div className="group bg-card-dark p-8 hover:bg-accent/[0.04] transition-colors duration-400 h-full">
                      <div className="w-10 h-10 rounded-md bg-accent/10 text-accent-light flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-light mb-2 group-hover:text-accent-light transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-text-light-muted text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Timeline</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-14">
                Our Journey
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-card-light-border border border-card-light-border">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-white p-8 h-full group hover:bg-light-primary transition-colors duration-400">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={14} className="text-accent" />
                      <span className="text-sm font-bold text-accent">{m.year}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-2">{m.title}</h3>
                    <p className="text-text-dark-muted text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-28 lg:py-36 bg-dark-secondary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Leadership</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4">
                Our Team
              </h2>
              <p className="text-text-light-muted text-lg mb-14 max-w-2xl">
                A lean leadership team with deep expertise across engineering, design, AI, and growth.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-card-dark-border">
              {leadership.map((person, i) => (
                <ScrollReveal key={person.name} delay={i * 0.08}>
                  <div className="bg-card-dark p-8 h-full group hover:bg-accent/[0.04] transition-colors duration-400 flex flex-col">
                    <div className="w-20 h-20 rounded-md bg-gradient-to-br from-accent/30 to-accent/5 border border-accent/20 flex items-center justify-center mb-5">
                      <span className="font-heading text-3xl font-black text-accent-light">{person.initial}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-text-light mb-0.5">{person.name}</h3>
                    <p className="text-accent-light text-sm font-semibold mb-2">{person.role}</p>
                    <p className="text-text-light-muted text-xs mb-4 leading-relaxed">{person.bio}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-card-dark-border">
                      <span className="text-[10px] text-text-light-muted/70 uppercase tracking-widest">{person.focus}</span>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-light-muted hover:text-accent-light transition-colors"
                        aria-label={`${person.name} on LinkedIn`}
                      >
                        <LinkedInIcon size={14} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Client Stories (moved from home) */}
        <Testimonials />

        {/* Global Presence */}
        <section id="global" className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Reach</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
                  Global Delivery,{" "}
                  <br />
                  Local Expertise.
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed mb-8">
                  Headquartered in Lahore, Pakistan with clients across North America, Europe, the Middle East, and Asia-Pacific. We operate in your timezone and speak your language.
                </p>
                <div className="space-y-4">
                  {[
                    { region: "Headquarters", location: "Lahore, Pakistan" },
                    { region: "North America", location: "Remote delivery" },
                    { region: "Europe & UK", location: "Remote delivery" },
                    { region: "Middle East", location: "Remote delivery" },
                  ].map((office) => (
                    <div key={office.region} className="flex items-center gap-3">
                      <MapPin size={14} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-text-dark">
                        <span className="font-bold">{office.region}</span>
                        <span className="text-text-dark-muted"> — {office.location}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="grid grid-cols-2 gap-px bg-card-light-border border border-card-light-border">
                  {[
                    { label: "Countries Served", value: "12+" },
                    { label: "Active Clients", value: "30+" },
                    { label: "Team Size", value: "15+" },
                    { label: "Avg. Project Rating", value: "4.9/5" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white p-6 text-center">
                      <div className="font-heading text-2xl font-bold text-text-dark mb-1">{item.value}</div>
                      <div className="text-[11px] text-text-dark-muted uppercase tracking-widest">{item.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Certifications — distinct visual badges so nothing looks duplicated */}
        <section className="py-16 bg-white border-y border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <p className="text-xs text-accent uppercase tracking-[0.2em] font-semibold text-center mb-8">Compliance & Partnerships</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-card-light-border border border-card-light-border rounded-md overflow-hidden">
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <div className="w-12 h-12 rounded-md bg-blue-50 border border-blue-100 text-blue-700 font-heading font-black text-[11px] flex items-center justify-center mb-3 tracking-tight">9001</div>
                <p className="text-xs font-semibold text-text-dark">ISO 9001:2015</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">Quality · Aligned</p>
              </div>
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <div className="w-12 h-12 rounded-md bg-red-50 border border-red-100 text-red-700 font-heading font-black text-[11px] flex items-center justify-center mb-3 tracking-tight">27001</div>
                <p className="text-xs font-semibold text-text-dark">ISO 27001</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">InfoSec · Aligned</p>
              </div>
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <Image src="/logos/aws-partner.svg" alt="AWS Partner" width={32} height={32} className="w-8 h-8 mb-3 opacity-80" />
                <p className="text-xs font-semibold text-text-dark">AWS Partner</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">Technology</p>
              </div>
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <Image src="/logos/google-cloud.svg" alt="Google Cloud" width={32} height={32} className="w-8 h-8 mb-3 opacity-80" />
                <p className="text-xs font-semibold text-text-dark">Google Cloud</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">Partner</p>
              </div>
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <Image src="/logos/clutch.svg" alt="Clutch" width={32} height={32} className="w-8 h-8 mb-3 opacity-80" />
                <p className="text-xs font-semibold text-text-dark">Clutch</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">Top B2B</p>
              </div>
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <Image src="/logos/goodfirms.svg" alt="GoodFirms" width={32} height={32} className="w-8 h-8 mb-3 opacity-80" />
                <p className="text-xs font-semibold text-text-dark">GoodFirms</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">Verified</p>
              </div>
            </div>
            <p className="text-[11px] text-text-dark-muted text-center mt-5 max-w-2xl mx-auto">
              Our processes are aligned to ISO 9001 and ISO 27001 standards. Full certification audits are in progress — references and audit documentation available on request.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 lg:py-36 bg-dark-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="max-w-2xl">
                <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Next Steps</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-6 leading-tight">
                  Ready to work with a team that
                  <span className="gradient-text"> delivers?</span>
                </h2>
                <p className="text-text-light-muted text-lg mb-10 leading-relaxed">
                  Whether you need a technical partner, a dedicated team, or a specific project delivered — let&apos;s start with a conversation.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                    Get in Touch
                  </Link>
                  <Link href="/careers" className="inline-flex items-center justify-center font-medium rounded-md border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                    Join Our Team
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
