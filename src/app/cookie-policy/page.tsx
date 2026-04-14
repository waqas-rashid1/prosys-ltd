import type { Metadata } from "next";
import { Cookie, BarChart3, Target, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "PROSYS LTD's cookie policy — how we use cookies and similar technologies on our website.",
};

const cookieTypes = [
  {
    icon: Settings,
    title: "Strictly Necessary",
    description: "Required for the website to function. These cookies enable core functionality like session management and security. They cannot be disabled.",
    examples: "Session ID, CSRF token, cookie consent preference",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Help us understand how visitors interact with our website by collecting anonymous usage data. We use this to improve the site experience.",
    examples: "Google Analytics, Vercel Analytics",
  },
  {
    icon: Target,
    title: "Marketing",
    description: "Used to track visitors across websites for advertising purposes. We currently do not use marketing cookies but may in the future.",
    examples: "Currently not in use",
  },
  {
    icon: Cookie,
    title: "Functional",
    description: "Enhance your experience through personalization features like remembering your preferences, language, and region settings.",
    examples: "Theme preference, language selection",
  },
];

const generalSections = [
  { title: "What Are Cookies?", content: "Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, understand how you use the site, and improve your experience." },
  { title: "Managing Cookies", content: "You can control and delete cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling necessary cookies may affect website functionality." },
  { title: "Cookie Consent", content: "When you first visit our website, we ask for your consent to use non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting the site." },
  { title: "Updates to This Policy", content: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date." },
  { title: "Contact", content: "If you have questions about our use of cookies, please contact us at hello@prosysltd.com." },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Legal"
          title="Cookie"
          highlight="Policy"
          description="How we use cookies and similar technologies on our website."
        />

        {/* Cookie types as cards */}
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-10 text-center">
                Types of Cookies We Use
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {cookieTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <ScrollReveal key={type.title} delay={i * 0.08}>
                    <div className="group p-6 rounded-2xl border border-card-light-border bg-white hover:shadow-lg hover:border-accent/20 transition-all duration-300 h-full">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-dark mb-2">
                        {type.title}
                      </h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed mb-3">
                        {type.description}
                      </p>
                      <p className="text-xs text-text-dark-muted/60">
                        <span className="font-medium">Examples:</span> {type.examples}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* General info */}
            <div className="max-w-[1000px] mx-auto space-y-6">
              {generalSections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.05}>
                  <div className="p-6 md:p-8 rounded-2xl border border-card-light-border bg-white">
                    <h2 className="font-heading text-lg font-bold text-text-dark mb-3">
                      {s.title}
                    </h2>
                    <p className="text-text-dark-muted leading-relaxed">
                      {s.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
              <p className="text-text-dark-muted text-sm mt-10 text-center">
                Last updated: April 2026
              </p>
            </div>
          </div>
        </section>

        <CTABanner
          title="Questions About"
          highlight="Cookies?"
          description="We're transparent about our data practices. Reach out anytime."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
