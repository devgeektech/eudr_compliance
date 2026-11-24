import {
  ORGANIZATION_JSON_LD,
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
} from "./constants";

const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL;

export function SiteJsonLd() {
  const logoUrl = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        email: ORGANIZATION_JSON_LD.email,
        telephone: ORGANIZATION_JSON_LD.telephone,
        address: {
          "@type": "PostalAddress",
          addressLocality: ORGANIZATION_JSON_LD.addressLocality,
          addressRegion: ORGANIZATION_JSON_LD.addressRegion,
          addressCountry: ORGANIZATION_JSON_LD.addressCountry,
        },
        ...(linkedIn ? { sameAs: [linkedIn] } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "ro",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}