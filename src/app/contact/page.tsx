import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PROSYS LTD. Whether you need a quote, have a project idea, or want to discuss a partnership — we'd love to hear from you.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    description: "Drop us a line anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 123 4567",
    description: "Mon-Fri 9am to 6pm PKT",
  },
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.address,
    description: "Headquarters",
  },
  {
    icon: Globe,
    label: "Global",
    value: "Serving clients worldwide",
    description: "NA, EU, ME, APAC",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Get in Touch"
          title="Let's Build"
          highlight="Together"
          description="Have a project in mind? Need a technical partner? Want a quote? We respond within 24 hours."
        />

        {/* Contact Methods */}
        <section className="py-16 bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <ScrollReveal key={method.label} delay={i * 0.08}>
                    <div className="group p-5 rounded-xl border border-card-dark-border bg-card-dark hover:border-accent/30 transition-all duration-300 text-center">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                        <Icon size={18} />
                      </div>
                      <div className="text-xs text-text-light-muted uppercase tracking-widest mb-1">
                        {method.label}
                      </div>
                      <div className="text-text-light font-medium text-sm mb-1">
                        {method.value}
                      </div>
                      <div className="text-text-light-muted text-xs">
                        {method.description}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <ScrollReveal className="lg:col-span-3">
                <div className="rounded-2xl border border-card-light-border bg-white p-8 md:p-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark tracking-wide mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-text-dark-muted mb-8">
                    Fill in the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="rounded-2xl gradient-bg p-8 text-dark-primary">
                    <h3 className="font-heading text-2xl font-bold mb-3 tracking-wide">
                      Free Consultation
                    </h3>
                    <p className="text-dark-primary/80 leading-relaxed mb-4">
                      Not sure where to start? Book a free 30-minute consultation
                      with our team. We&apos;ll discuss your goals, recommend an
                      approach, and give you a rough timeline and budget — no
                      strings attached.
                    </p>
                    <div className="flex items-center gap-2 text-dark-primary/70 text-sm">
                      <Clock size={14} />
                      <span>30 min call &middot; No commitment</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-card-light-border bg-white p-8">
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-4 tracking-wide">
                      What Happens Next?
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: "1", text: "We review your message within 24 hours" },
                        { step: "2", text: "Schedule a discovery call to understand your needs" },
                        { step: "3", text: "Deliver a detailed proposal with timeline & budget" },
                        { step: "4", text: "Kick off development upon approval" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                            {item.step}
                          </span>
                          <span className="text-text-dark-muted text-sm pt-0.5">
                            {item.text}
                          </span>
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
