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
import DarkSectionFx from "@/components/ui/DarkSectionFx";
import Testimonials from "@/components/Testimonials";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PROSYS LTD — an engineering practice delivering enterprise-grade AI, SaaS, and web platforms for funded startups and mid-market teams.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PROSYS LTD",
    description:
      "Learn about PROSYS LTD — an engineering practice delivering enterprise-grade AI, SaaS, and web platforms for funded startups and mid-market teams.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PROSYS LTD",
    description:
      "Learn about PROSYS LTD — an engineering practice delivering enterprise-grade AI, SaaS, and web platforms for funded startups and mid-market teams.",
  },
};

const values = [
  { icon: Target, title: "Outcomes over output", description: "Engagements are scoped to a business result, with success metrics agreed upfront. Tradeoffs and dependencies are surfaced at week one, not at handover." },
  { icon: Zap, title: "Predictable, not rushed", description: "Reliable delivery is a product of upfront discovery and disciplined architecture. Lean process, experienced staffing, no committee approvals." },
  { icon: Users, title: "Embedded, not outsourced", description: "We integrate with your engineering organization — code reviews, on-call rotations, architecture decisions. The engagement scorecard is your business outcome." },
  { icon: Globe, title: "One delivery standard", description: "Identical code-review bar, CI/CD discipline, and documentation standard across every engagement — Series A or Fortune 500 division." },
  { icon: Award, title: "Engineered to be inherited", description: "Clean architecture, comprehensive test coverage, and operational documentation — written so the engineer maintaining the system can be on your team, not ours." },
  { icon: Heart, title: "Material changes surface immediately", description: "No scope drift without a written impact assessment. No hidden line items. When delivery risk emerges, you hear it first — with a documented remediation plan." },
];

const milestones = [
  { year: "Jan 2024", title: "Founded", desc: "Established around a single operating principle: deliver systems engineered to be inherited and operated by the partner organization. One delivery standard, end-to-end ownership." },
  { year: "Sep 2024", title: "First 10 engagements", desc: "Production releases delivered for funded startups and mid-market teams across four countries. Retention rate above 80%." },
  { year: "2025", title: "Team grew to 15+", desc: "Established design and growth practices alongside engineering. Began extending into SEO and AIEO engagements with existing product clients." },
  { year: "2026", title: "Today", desc: "50+ engagements delivered. Active partnerships across North America, Europe, the Middle East, and APAC." },
];

const leadership = [
  {
    name: "M. Farhaan Riaz",
    role: "Founder",
    focus: "Strategy · AI/ML · Venture Studios",
    bio: "Builder and ecosystem architect with 11+ years across 20+ ventures in AI, e-commerce, EdTech, and software. Founder Program Manager at TICK Incubation Center, UET Lahore.",
    linkedin: "https://www.linkedin.com/in/farhaanriaz/",
    initial: "F",
  },
  {
    name: "Waqas Rashid",
    role: "Co-Founder",
    focus: "Engineering · Operations",
    bio: "Engineering and operations lead. Owns delivery cadence, infrastructure standards, and the production-readiness bar across every engagement.",
    linkedin: "https://www.linkedin.com/in/waqas-rashid1",
    initial: "W",
  },
  {
    name: "Usama Abdul Qadeer",
    role: "Co-Founder",
    focus: "Partnerships · Go-to-Market",
    bio: "Partnerships and go-to-market lead. Builds the channel architecture and enterprise relationships that route engagements into the practice.",
    linkedin: "https://www.linkedin.com/in/usama-abdul-qadeer/",
    initial: "U",
  },
  {
    name: "Muhammad Owais",
    role: "Co-Founder",
    focus: "Design · Brand",
    bio: "Design and brand lead. Owns the visual system, product design, and brand expression across PROSYS LTD engagements and assets.",
    linkedin: "https://www.linkedin.com/in/muhammad-owais10/",
    initial: "O",
  },
  {
    name: "M Shahzaib",
    role: "Co-Founder",
    focus: "AI Engineering",
    bio: "AI engineering lead. Owns model selection, evaluation harnesses, and production deployment for LLM, RAG, and agent systems.",
    linkedin: "https://www.linkedin.com/in/stellalphatic/",
    initial: "S",
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
          title="An engineering practice"
          highlight="built for production."
          description="PROSYS LTD is an engineering practice delivering SaaS platforms, AI systems, and growth infrastructure for funded startups and mid-market enterprises. End-to-end accountability — from architecture through post-launch operations."
          bgImage="/images/team-collab.jpg"
          bgImageOpacity={0.22}
          trustSignals={["Founded 2024", "15+ engineers", "Distributed delivery model", "Documented engineering process"]}
          primaryCta={{ label: "Meet the team", href: "#leadership" }}
          secondaryCta={{ label: "Speak with our team", href: "/contact" }}
          stats={stats.map((s) => ({ value: `${s.value}${s.suffix}`, label: s.label }))}
        />

        {/* Mission */}
        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Why we started</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-8 leading-tight">
                  An engineering partner, <span className="gradient-text">accountable end-to-end.</span>
                </h2>
                <div className="space-y-6 text-text-dark-muted text-lg leading-relaxed">
                  <p>
                    Most engagements fail in the operational handover. PROSYS was established to deliver against the full lifecycle — strategy, architecture, build, deployment, and the post-launch operations work that determines whether a platform actually performs.
                  </p>
                  <p>
                    The practice spans product engineering, AI delivery, cloud operations, and growth — covering SEO and AIEO, the disciplines that determine whether your product surfaces in Google and across AI retrieval systems.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team Photos */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Our People</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-12">
                The team behind <span className="gradient-text">the engineering.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                <div className="relative h-72 md:h-96 overflow-hidden group">
                  <Image src="/images/team-collab.jpg" alt="Team collaboration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading text-lg font-bold">Cross-functional delivery</p>
                    <p className="text-white/70 text-sm">Shared ownership across engineering, design, and growth</p>
                  </div>
                </div>
                <div className="relative h-72 md:h-96 overflow-hidden group">
                  <Image src="/images/team-meeting.jpg" alt="Team meeting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading text-lg font-bold">Discovery-led engagements</p>
                    <p className="text-white/70 text-sm">Architecture decisions resolved before delivery begins</p>
                  </div>
                </div>
                <div className="relative h-72 md:h-96 overflow-hidden group">
                  <Image src="/images/team-office.jpg" alt="Team at work" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-heading text-lg font-bold">Production accountability</p>
                    <p className="text-white/70 text-sm">15+ engineers, designers, and growth specialists</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-14 lg:py-20 bg-dark-primary overflow-hidden">
          <DarkSectionFx variant="default" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Principles</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-12">
                How we <span className="gradient-text">operate.</span>
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
        <section id="timeline" className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Timeline</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-14">
                Our <span className="gradient-text">journey.</span>
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
        <section id="leadership" className="relative py-14 lg:py-20 bg-dark-secondary overflow-hidden">
          <DarkSectionFx variant="split" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Leadership</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4">
                Built by <span className="gradient-text">five founders.</span>
              </h2>
              <p className="text-text-light-muted text-lg mb-14 max-w-2xl">
                Accountable across engineering, design, AI, and growth — directly involved in every engagement.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-card-dark-border">
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
        <section id="global" className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-4">Reach</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
                  Distributed delivery, <br />
                  <span className="gradient-text">business-hour overlap.</span>
                </h2>
                <p className="text-text-dark-muted text-lg leading-relaxed mb-8">
                  Headquartered in Lahore, Pakistan, with active engagements across North America, Europe, the Middle East, and Asia-Pacific. Engagements are operated within your business hours, with documented synchronous and asynchronous communication standards.
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
                    { label: "Continents Served", value: "4" },
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
            <p className="text-xs text-accent uppercase tracking-[0.2em] font-semibold text-center mb-3">Standards We Build To</p>
            <p className="text-[12px] text-text-dark-muted text-center mb-8 max-w-xl mx-auto">Our engineering practice is modeled on these standards and partner programs. Formal certifications are on our roadmap.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-card-light-border border border-card-light-border rounded-md overflow-hidden">
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <div className="w-12 h-12 rounded-md bg-blue-50 border border-blue-100 text-blue-700 font-heading font-black text-[11px] flex items-center justify-center mb-3 tracking-tight">9001</div>
                <p className="text-xs font-semibold text-text-dark">ISO 9001:2015</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">Quality · Controls</p>
              </div>
              <div className="bg-white p-5 flex flex-col items-center text-center group hover:bg-light-primary transition-colors">
                <div className="w-12 h-12 rounded-md bg-red-50 border border-red-100 text-red-700 font-heading font-black text-[11px] flex items-center justify-center mb-3 tracking-tight">27001</div>
                <p className="text-xs font-semibold text-text-dark">ISO 27001</p>
                <p className="text-[10px] text-text-dark-muted uppercase tracking-widest mt-0.5">InfoSec · Controls</p>
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
              We engineer to ISO 9001 and ISO 27001 control objectives and run an internal evidence pipeline. Formal certification audits are on our roadmap. Control documentation and references available on request.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 lg:py-28 bg-dark-primary overflow-hidden">
          <DarkSectionFx variant="default" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
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
