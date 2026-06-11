import { siteConfig } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

type Crumb = { label: string; path: string };

export function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.path.startsWith("/") ? c.path : "/" + c.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceDetailSchema({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceFAQSchema({
  faq,
}: {
  faq: { q: string; a: string }[];
}) {
  if (!faq || faq.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  slug,
  date,
  author,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author?: string;
  category?: string;
}) {
  const published = new Date(date).toISOString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Organization",
      name: author || siteConfig.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    articleSection: category,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
