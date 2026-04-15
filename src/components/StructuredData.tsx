import { siteConfig, faq } from "@/lib/constants";
import { servicesData } from "@/lib/services-data";

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
      "https://www.linkedin.com/company/prosysltd",
      "https://twitter.com/prosysltd",
      "https://github.com/prosysltd",
    ],
    knowsAbout: [
      "Web Development",
      "Software Development",
      "Artificial Intelligence",
      "MVP Development",
      "SaaS Development",
      "Search Engine Optimization",
      "AI Engine Optimization",
      "Digital Marketing",
      "AI Automations",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServiceSchema() {
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

function FAQSchema() {
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
      <ServiceSchema />
      <FAQSchema />
      <WebSiteSchema />
    </>
  );
}
