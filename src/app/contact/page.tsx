import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PROSYS LTD. Whether you need a quote, have a project idea, or want to discuss a partnership.",
};

const contactMethods = [
  { icon: Mail, label: "Email", value: siteConfig.email, desc: "Response within 24 hours" },
  { icon: Phone, label: "Phone", value: "+92 300 123 4567", desc: "Mon-Fri 9am to 6pm PKT" },
  { icon: MapPin, label: "Office", value: "Lahore, Pakistan", desc: "Headquarters" },
  { icon: Globe, label: "Global", value: "12+ countries served", desc: "Remote delivery worldwide" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero with bg image */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-dark-primary overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/contact-hero.jpg" alt="Contact" fill className="object-cover opacity-15" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/90 to-dark-primary/60" />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Get in Touch</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Let&apos;s build
                <span className="gradient-text"> together.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                Have a project in mind? Need a technical partner? We respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact methods strip */}
        <section className="py-10 bg-white border-b border-card-light-border">
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
        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <ScrollReveal className="lg:col-span-7">
                <div className="bg-white border border-card-light-border p-8 md:p-10 rounded-md">
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-accent mb-2">Qualified Lead Form</p>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-2">Tell us about your project.</h2>
                  <p className="text-text-dark-muted mb-8 text-sm">Senior consultants review every submission. Expect a tailored response — not a form letter.</p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-5">
                <div className="space-y-6 lg:sticky lg:top-28">
                  <div className="relative overflow-hidden rounded-md p-8 text-white bg-dark-primary border border-card-dark-border">
                    <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "radial-gradient(circle at 100% 0%, rgba(12,108,54,0.4) 0%, transparent 60%)" }} />
                    <div className="relative">
                      <p className="text-[11px] uppercase tracking-widest text-accent-light font-semibold mb-3">Prefer to talk?</p>
                      <h3 className="font-heading text-2xl font-bold mb-3 leading-tight">Book a 30-min consultation.</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-5">
                        Skip the form. Jump on a call with a senior engineer or strategist. We&apos;ll scope the opportunity and suggest an approach — no commitment.
                      </p>
                      <a href={`mailto:${siteConfig.email}?subject=Consultation Request`} className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/40 hover:border-white pb-0.5 transition-colors">
                        {siteConfig.email}
                      </a>
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
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> ISO / SOC2 aligned processes</li>
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> 12+ countries served</li>
                      <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> Senior engineers only — no juniors</li>
                    </ul>
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
