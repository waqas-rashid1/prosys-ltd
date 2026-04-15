"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-light-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Let's Talk"
          subtitle="Have a project in mind? Reach out and let's create the next success story for your business."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-md border border-card-light-border bg-white text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-md border border-card-light-border bg-white text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-md border border-card-light-border bg-white text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-md border border-card-light-border bg-white text-text-dark placeholder:text-text-dark-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="gap-2">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-text-dark mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-text-dark-muted uppercase tracking-widest mb-1">
                        Email
                      </div>
                      <div className="text-text-dark font-medium group-hover:text-accent transition-colors">
                        {siteConfig.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-text-dark-muted uppercase tracking-widest mb-1">
                        Phone
                      </div>
                      <div className="text-text-dark font-medium group-hover:text-accent transition-colors">
                        +92 300 123 4567
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-text-dark-muted uppercase tracking-widest mb-1">
                        Office
                      </div>
                      <div className="text-text-dark font-medium">
                        {siteConfig.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative card */}
              <div className="rounded-lg gradient-bg p-6 text-white">
                <h4 className="font-heading text-lg font-bold mb-2">
                  Ready to Start?
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Schedule a free consultation with our team to discuss your
                  project requirements and explore how we can help.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
