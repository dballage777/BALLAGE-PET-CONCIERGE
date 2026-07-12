import { site, serviceAreas } from "./site";
import { services } from "./services";
import type { BlogPost } from "@/types";
import { formatDate } from "./blog";

/**
 * JSON-LD structured data for local SEO. Injected via <script type="application/ld+json">.
 */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    image: `${site.url}/og-image.jpg`,
    slogan: site.tagline,
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: `${a.city}, ${a.state}`,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "IN",
      addressCountry: "US",
      addressLocality: "New Albany",
    },
    sameAs: [site.social.facebook, site.social.instagram],
    knowsAbout: [
      "Dog Walking",
      "Pet Sitting",
      "Puppy Socialization",
      "Senior Pet Care",
      "End of Life Pet Support",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pet Concierge Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.trademark ? `${s.name}™` : s.name,
          description: s.shortDescription,
          url: `${site.url}${s.href}`,
        },
      })),
    },
  };
}

export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.trademark ? `${s.name}™` : s.name,
    description: s.shortDescription,
    url: `${site.url}${s.href}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.legalName,
      "@id": `${site.url}/#business`,
    },
    areaServed: serviceAreas.map((a) => `${a.city}, ${a.state}`),
    serviceType: s.name,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
    },
    url: `${site.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
    articleBody: post.content.join("\n\n"),
    datePublishedFormatted: formatDate(post.date),
  };
}
