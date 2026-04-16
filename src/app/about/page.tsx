import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target, Zap, Users, Globe, Award, Heart, ArrowRight,
  CheckCircle2, MapPin, Building2, Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PROSYS LTD — a software development company with a senior team building enterprise-quality AI, SaaS, and web solutions at startup speed.",
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
  { year: "2024", title: "Founded", desc: "Started with 5 senior engineers and a clear thesis: enterprise-quality software at startup speed." },
  { year: "2024", title: "First 10 Clients", desc: "Delivered MVPs, SaaS platforms, and AI integrations for startups across 4 countries." },
  { year: "2025", title: "Team Expansion", desc: "Grew to 15+ engineers, designers, and growth specialists. Added SEO, AIEO, and digital marketing." },
  { year: "2026", title: "Global Scale", desc: "50+ projects delivered. Serving clients across North America, Europe, Middle East, and Asia-Pacific." },
];

const leadership = [
  { name: "Founder & CEO", focus: "Strategy, Architecture, AI" },
  { name: "CTO", focus: "Engineering, Cloud, DevOps" },
  { name: "Head of Design", focus: "UI/UX, Brand, Design Systems" },
  { name: "Head of Growth", focus: "SEO, AIEO, Digital Marketing" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero - editorial style */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">About PROSYS LTD</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                We build software that
                <span className="gradient-text"> moves industries.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                PROSYS LTD is a full-spectrum software development company. We combine senior engineering talent with strategic thinking to deliver platforms, products, and growth systems that create lasting business impact.
              </p>
            </div>
          </div>
        </section>

        {/* Mission + Stats side by side */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
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

              <div className="lg:col-span-5">
                <ScrollReveal delay={0.15}>
                  <div className="grid grid-cols-2 gap-px bg-card-light-border border border-card-light-border">
                    {stats.map((stat) => (
                      <div key={stat.label} className="bg-white p-6 text-center">
                        <div className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-1">
                          {stat.value}{stat.suffix}
                        </div>
                        <div className="text-xs text-text-dark-muted uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
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
                  <div className="bg-card-dark p-8 h-full group hover:bg-accent/[0.04] transition-colors duration-400">
                    <div className="w-16 h-16 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                      <span className="font-heading text-xl font-bold text-accent-light">{person.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-text-light mb-1">{person.name}</h3>
                    <p className="text-text-light-muted text-sm">{person.focus}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section id="global" className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Reach</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
                  Global Delivery,
                  <br />Local Expertise.
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

        {/* Certifications */}
        <section className="py-16 bg-white border-y border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {[
                { logo: "/logos/iso.svg", label: "ISO 9001" },
                { logo: "/logos/iso.svg", label: "ISO 27001" },
                { logo: "/logos/aws-partner.svg", label: "AWS Partner" },
                { logo: "/logos/google-cloud.svg", label: "Google Cloud" },
                { logo: "/logos/clutch.svg", label: "Clutch Top Dev" },
              ].map((cert) => (
                <div key={cert.label} className="flex items-center gap-3 group">
                  <Image src={cert.logo} alt={cert.label} width={20} height={20} className="w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity" />
                  <span className="text-sm text-text-dark-muted font-medium group-hover:text-text-dark transition-colors">{cert.label}</span>
                </div>
              ))}
            </div>
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
