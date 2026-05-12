import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PROSYS LTD's privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Who We Are",
    content: `PROSYS LTD ("PROSYS", "we", "us", or "our") is a software engineering practice headquartered in Lahore, Pakistan. This Privacy Policy explains how we handle personal data collected through prosysltd.com and our direct business communications. The data controller is PROSYS LTD; for any privacy request, write to ${siteConfig.email}.`,
  },
  {
    title: "What We Collect",
    content:
      "When you submit our contact, brief, or careers forms we receive the data you provide — typically name, work email, company, role, project details, and any links or attachments you choose to share. When you browse the site, our infrastructure and analytics tools (only when you accept analytics cookies) record standard request metadata such as IP address, user agent, referring page, and pages viewed. We do not knowingly collect data from anyone under the age of 16.",
  },
  {
    title: "Why We Process It",
    content:
      "We use the data you submit solely to respond to your inquiry, scope an engagement, evaluate a job application, or fulfil a contract you have with us. Anonymous analytics is used to understand site traffic and improve content. We do not sell, rent, or share your personal data for advertising. Marketing emails (such as our newsletter) are only sent if you have explicitly opted in, and every email includes a one-click unsubscribe.",
  },
  {
    title: "Legal Basis",
    content:
      "Where the EU GDPR, UK GDPR, or comparable laws apply to your data, we rely on the following bases: (a) your consent for analytics cookies and newsletter sign-up; (b) the necessity of processing to take steps at your request prior to entering a contract (e.g. responding to your inquiry); and (c) our legitimate interests in operating, securing, and improving our website, balanced against your rights and freedoms.",
  },
  {
    title: "Retention",
    content:
      "Inbound inquiries are retained for up to 24 months from the last interaction so we can respond to follow-ups and demonstrate our records of communication. Career applications are retained for up to 12 months from the application date and then deleted unless you ask us to keep them on file. Newsletter subscriptions are retained until you unsubscribe. Server access logs are retained for up to 90 days.",
  },
  {
    title: "Sub-processors",
    content:
      "We use a small set of vetted vendors to deliver this site and respond to inquiries. These currently include our cloud hosting provider, our transactional email provider for routing form submissions, and (only with your consent) our analytics provider. A current list of sub-processors and the data they process is available on request.",
  },
  {
    title: "International Transfers",
    content:
      "We are based in Pakistan and our team operates in multiple regions. Where personal data is transferred outside your country of residence, we rely on standard contractual safeguards with our sub-processors and limit the data shared to what is strictly necessary to deliver the service.",
  },
  {
    title: "Security",
    content:
      "We engineer to ISO 27001 and SOC 2 control objectives — least-privilege access, encryption in transit, encrypted backups, audited credentials rotation, and segregated production environments. Formal certifications are on our roadmap. No system is perfectly secure; if we identify a material incident affecting your data, we will notify you in line with applicable law.",
  },
  {
    title: "Your Rights",
    content: `Depending on your jurisdiction, you may have the right to access, correct, port, delete, or restrict our processing of your personal data, and to withdraw consent or object to certain processing. To exercise these rights, write to ${siteConfig.email}. We will respond within 30 days. You also have the right to lodge a complaint with your local data protection authority.`,
  },
  {
    title: "Cookies",
    content:
      "We use a minimal set of cookies and similar technologies. Strictly necessary cookies are always on; analytics is only loaded after you accept it in our cookie banner. You can change your choice at any time via the banner. See our Cookie Policy for the full list and purposes.",
  },
  {
    title: "Updates",
    content:
      "We may update this Privacy Policy from time to time to reflect changes to our practices or applicable law. Material changes will be highlighted at the top of this page along with the new effective date.",
  },
  {
    title: "Contact",
    content: `For any privacy question, complaint, or rights request, contact us at ${siteConfig.email} or by post at PROSYS LTD, Lahore, Pakistan.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Legal"
          title="Privacy"
          highlight="Policy"
          description="How we collect, use, and protect your information."
        />

        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.05}>
                  <div className="p-6 md:p-8 border border-card-light-border bg-white">
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
