import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PROSYS LTD's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Legal"
          title="Privacy"
          highlight="Policy"
          description="How we collect, use, and protect your information."
        />

        <section className="py-24 lg:py-32 bg-light-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {[
                {
                  title: "Information We Collect",
                  content:
                    "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, company name, phone number, and project details.",
                },
                {
                  title: "How We Use Your Information",
                  content:
                    "We use the information we collect to respond to your inquiries, provide our services, send project updates, and improve our website experience. We do not sell your personal information to third parties.",
                },
                {
                  title: "Data Security",
                  content:
                    "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
                },
                {
                  title: "Cookies",
                  content:
                    "Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.",
                },
                {
                  title: "Third-Party Services",
                  content:
                    "We may use third-party services such as analytics tools and email providers. These services have their own privacy policies governing the use of your information.",
                },
                {
                  title: "Your Rights",
                  content:
                    "You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time by contacting us directly.",
                },
                {
                  title: "Contact Us",
                  content:
                    "If you have any questions about this Privacy Policy, please contact us at hello@prosysltd.com.",
                },
              ].map((section) => (
                <div key={section.title} className="mb-8">
                  <h2 className="font-heading text-xl font-bold text-text-dark mb-3 tracking-wide">
                    {section.title}
                  </h2>
                  <p className="text-text-dark-muted leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              <p className="text-text-dark-muted text-sm mt-12 pt-8 border-t border-card-light-border">
                Last updated: April 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
