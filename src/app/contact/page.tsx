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
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-dark-primary overflow-hidden">
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
                <div className="bg-white border border-card-light-border p-8 md:p-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-2">Send Us a Message</h2>
                  <p className="text-text-dark-muted mb-8">Fill in the form and we&apos;ll get back within 24 hours.</p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-5">
                <div className="space-y-6">
                  <div className="gradient-bg p-8 text-white">
                    <h3 className="font-heading text-xl font-bold mb-3">Free Consultation</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      Not sure where to start? Book a free 30-minute consultation. We&apos;ll discuss your goals, recommend an approach, and provide a rough timeline — no strings attached.
                    </p>
                    <p className="text-white/60 text-xs">30 min call &middot; No commitment</p>
                  </div>

                  <div className="bg-white border border-card-light-border p-8">
                    <h3 className="font-heading text-lg font-bold text-text-dark mb-4">What Happens Next?</h3>
                    <div className="space-y-4">
                      {[
                        "We review your message within 24 hours",
                        "Schedule a discovery call to understand your needs",
                        "Deliver a detailed proposal with timeline & budget",
                        "Kick off development upon approval",
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">{i + 1}</span>
                          <span className="text-text-dark-muted text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
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
