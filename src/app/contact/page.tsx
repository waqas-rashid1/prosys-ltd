import type { Metadata } from "next";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PROSYS LTD to deploy AI safely into your operations. Book an AI readiness call or describe the workflow you want to improve.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact PROSYS LTD",
    description: "Get in touch with PROSYS LTD to deploy AI safely into your operations. Book an AI readiness call or describe the workflow you want to improve.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PROSYS LTD",
    description: "Get in touch with PROSYS LTD to deploy AI safely into your operations. Book an AI readiness call or describe the workflow you want to improve.",
  },
};

const contactMethods = [
  { icon: Mail, label: "Email", value: siteConfig.email, desc: "Response within 24 hours" },
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, desc: "Mon-Fri 9am to 6pm PKT" },
  { icon: MapPin, label: "Office", value: "Lahore, Pakistan", desc: "Headquarters" },
  { icon: Globe, label: "Global", value: "Distributed delivery", desc: "Clients across 4 continents" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <PageHero
          badge="Get in Touch"
          title="Let's build"
          highlight="together."
          description="Exploring where to start with AI, scoping a production pilot, or hardening an AI system already in use — our team reviews every inbound and responds within 24 business hours."
          bgImage="/images/contact-hero.jpg"
          bgImageOpacity={0.18}
          trustSignals={["24-hour response SLA", "NDA on request", "Human-in-the-loop by design", "Direct specialist contact"]}
          primaryCta={{ label: "Send a brief", href: "#contact-form" }}
          secondaryCta={{ label: "Book a call", href: "https://cal.com/prosysltd/30min" }}
          stats={[
            { value: "<24h", label: "Response time" },
            { value: "6", label: "Core AI services" },
            { value: "6", label: "Industries served" },
            { value: "6–12w", label: "To production pilots" },
          ]}
        />

        {/* Contact methods strip */}
        <section className="py-14 lg:py-20 bg-white border-b border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-dark">{m.value}</p>
                      <p className="text-xs text-text-dark-muted">{m.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section id="contact-form" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <ScrollReveal className="lg:col-span-7">
                <div className="bg-white border border-card-light-border p-8 md:p-10 rounded-md">
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-accent mb-2">Qualified Lead Form</p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-2">Tell us about <span className="gradient-text">your project.</span></h2>
                  <p className="text-text-dark-muted mb-8 text-sm">Engagement leads review every submission. You will receive a written, scoped response — not a form letter.</p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-5">
                <div className="space-y-6 lg:sticky lg:top-28">
                  <div className="relative overflow-hidden rounded-md p-8 text-white bg-dark-primary border border-card-dark-border">
                    <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "radial-gradient(circle at 100% 0%, rgba(6,182,212,0.4) 0%, transparent 60%)" }} />
                    <div className="relative">
                      <p className="text-[11px] uppercase tracking-widest text-accent-light font-semibold mb-3">Prefer to talk?</p>
                      <h3 className="font-heading text-2xl font-bold mb-3 leading-tight">Book a 30-min consultation.</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-5">
                        Bypass the form. Schedule a working session with the engagement lead — scope the opportunity, review architectural options, walk away with a written recommendation. No commitment.
                      </p>
                      <div className="space-y-2.5">
                        <a
                          href="https://cal.com/prosysltd/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 text-sm font-semibold text-dark-primary bg-white hover:bg-accent hover:text-white px-4 py-2.5 rounded-md transition-colors"
                        >
                          <span>Schedule on Cal.com</span>
                          <span className="text-[11px] opacity-70">30 min</span>
                        </a>
                        <a
                          href={`mailto:${siteConfig.email}?subject=Consultation Request`}
                          className="flex items-center justify-between gap-2 text-sm font-semibold text-white border border-white/20 hover:border-accent hover:bg-accent/10 px-4 py-2.5 rounded-md transition-colors"
                        >
                          <span>Email us directly</span>
                          <span className="text-[11px] opacity-70">24hr reply</span>
                        </a>
                        <a
                          href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 text-sm font-semibold text-white border border-white/20 hover:border-accent hover:bg-accent/10 px-4 py-2.5 rounded-md transition-colors"
                        >
                          <span>WhatsApp Business</span>
                          <span className="text-[11px] opacity-70">Fastest</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-card-light-border p-7 rounded-md">
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-5">How we route your request</h3>
                    <div className="space-y-4">
                      {[
                        { t: "High-intent (Book a Call)", d: "Direct calendar invite within 24 hrs." },
                        { t: "Proposal Request", d: "Discovery call, then a scoped proposal with timeline + fixed pricing." },
                        { t: "Exploring Fit", d: "Relevant case studies and a brief intro call — your pace." },
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3 pb-4 border-b border-card-light-border last:border-0 last:pb-0">
                          <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent text-xs font-bold flex items-center justify-center rounded">{i + 1}</span>
                          <div>
                            <p className="text-sm font-semibold text-text-dark">{step.t}</p>
                            <p className="text-xs text-text-dark-muted mt-0.5 leading-relaxed">{step.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-card-light-border p-7 rounded-md">
                    <h3 className="font-heading text-sm font-bold text-text-dark mb-4 uppercase tracking-wider">Trusted signals</h3>
                    <ul className="space-y-2.5 text-sm text-text-dark-muted">
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> NDA signed on request</li>
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> Engineered to ISO 27001 & SOC 2 control objectives</li>
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> 5 industry verticals served</li>
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> Engagement lead, named and accountable</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-card-light-border p-7 rounded-md">
                    <h3 className="font-heading text-sm font-bold text-text-dark mb-2 uppercase tracking-wider">Headquarters</h3>
                    <address className="not-italic text-sm text-text-dark-muted mb-4 leading-relaxed">
                      PROSYS LTD<br />
                      Gulberg III, Lahore 54660<br />
                      Punjab, Pakistan
                    </address>
                    <div className="relative h-44 rounded-sm overflow-hidden border border-card-light-border bg-light-secondary">
                      {/* Keyless Google Maps embed.
                          Uses the supported maps/embed?pb=... format —
                          this is the URL that Google's own Share dialog
                          generates and the only one that renders
                          reliably in iframes without an API key. The
                          old maps?q=...&output=embed format is now
                          frequently blocked by Google's own headers. */}
                      <iframe
                        title="PROSYS LTD Headquarters, Lahore"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27199.79842244892!2d74.32953819726562!3d31.51202249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190486d34087fd%3A0xb16f2a18a5d9e25c!2sGulberg%20III%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714600000000!5m2!1sen!2s"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allow="fullscreen"
                      />
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Gulberg+III+Lahore+Pakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
