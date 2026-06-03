import { siteConfig, faq } from "@/lib/constants";
import { servicesData } from "@/lib/services-data";

// ──────────────────────────────────────────────────────────────────────
// Structured-data strategy:
// - Site-wide (in <head> via the root layout): Organization + WebSite
// - Page-scoped (rendered on the matching page only): FAQPage on /faq,
//   ItemList of services on /services. This avoids duplicate FAQPage
//   markup across every page (a Google rich-results penalty).
// ──────────────────────────────────────────────────────────────────────

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactType: "customer service",
    },
    sameAs: [
      "https://linkedin.com/company/prosysltd",
      "https://x.com/prosysltd",
      "https://github.com/prosysltd",
      "https://youtube.com/@prosysltd",
    ],
    knowsAbout: [
      "Safe AI Deployment",
      "AI Readiness and Strategy",
      "Secure AI Agents",
      "AI Workflow Automation",
      "AI Governance",
      "Enterprise Knowledge Systems",
      "Secure RAG",
      "AI Integration",
      "AI Security Testing",
      "AI Monitoring and Optimization",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Render only on /services. */
export function ServiceItemListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PROSYS LTD Services",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Render only on /faq. Per-service FAQ pages should use ServiceFAQSchema instead. */
export function GlobalFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function StructuredData() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
    </>
  );
}
