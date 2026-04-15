import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PROSYS LTD's privacy policy — how we collect, use, and protect your personal information.",
};

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, company name, phone number, and project details." },
  { title: "How We Use Your Information", content: "We use the information we collect to respond to your inquiries, provide our services, send project updates, and improve our website experience. We do not sell your personal information to third parties." },
  { title: "Data Security", content: "We implement industry-standard security measures to protect your personal information, including encryption, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure." },
  { title: "Cookies", content: "Our website uses cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. See our Cookie Policy for details." },
  { title: "Third-Party Services", content: "We may use third-party services such as analytics tools and email providers. These services have their own privacy policies governing the use of your information." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time by contacting us directly." },
  { title: "Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at hello@prosysltd.com." },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Legal"
          title="Privacy"
          highlight="Policy"
          description="How we collect, use, and protect your information."
        />

        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.05}>
                  <div className="p-6 md:p-8 rounded-lg border border-card-light-border bg-white">
                    <h2 className="font-heading text-lg font-bold text-text-dark mb-3">
                      {s.title}
                    </h2>
                    <p className="text-text-dark-muted leading-relaxed">
                      {s.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="text-text-dark-muted text-sm mt-10 text-center">
              Last updated: April 2026
            </p>
          </div>
        </section>

        <CTABanner
          title="Have Questions About"
          highlight="Privacy?"
          description="Reach out and we'll respond within 24 hours."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
