import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "PROSYS LTD's cookie policy — how we use cookies and similar technologies on our website.",
};

const sections = [
  { title: "What Are Cookies?", content: "Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, understand how you use the site, and improve your experience." },
  { title: "How We Use Cookies", content: "PROSYS LTD uses cookies for: essential website functionality (session management, security), analytics (understanding traffic patterns and user behavior), and performance optimization (caching, load balancing)." },
  { title: "Types of Cookies We Use", content: "Necessary Cookies: Required for the website to function. Cannot be disabled. Analytics Cookies: Help us understand how visitors interact with our site (e.g., Google Analytics). We use these to improve our website. Marketing Cookies: Used to track visitors across websites for advertising purposes. We currently do not use marketing cookies." },
  { title: "Third-Party Cookies", content: "Some cookies are placed by third-party services that appear on our pages. These include Google Analytics for traffic analysis and Vercel Analytics for performance monitoring. These services have their own privacy and cookie policies." },
  { title: "Managing Cookies", content: "You can control and delete cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling necessary cookies may affect website functionality." },
  { title: "Cookie Consent", content: "When you first visit our website, we ask for your consent to use non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting the site." },
  { title: "Updates to This Policy", content: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date." },
  { title: "Contact", content: "If you have questions about our use of cookies, please contact us at hello@prosysltd.com." },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero badge="Legal" title="Cookie" highlight="Policy" description="How we use cookies and similar technologies on our website." />
        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {sections.map((s) => (
              <div key={s.title} className="mb-8">
                <h2 className="font-heading text-xl font-bold text-text-dark mb-3 tracking-wide">{s.title}</h2>
                <p className="text-text-dark-muted leading-relaxed">{s.content}</p>
              </div>
            ))}
            <p className="text-text-dark-muted text-sm mt-12 pt-8 border-t border-card-light-border">Last updated: April 2026</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
