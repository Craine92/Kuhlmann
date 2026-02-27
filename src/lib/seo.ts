import type { Metadata } from "next";
import { company } from "@/src/content/company";

const baseUrl = `https://${company.domain}`;

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: `${baseUrl}/images/og-default.svg`,
          width: 1200,
          height: 630,
          alt: `${company.name} - Garten- und Landschaftsbau`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og-default.svg`],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `https://${company.domain}/images/og-default.svg`,
    telephone: company.phone,
    email: company.email,
    url: `https://${company.domain}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: "DE",
    },
    areaServed: ["Neustadt am Rübenberge", "Region Hannover", "Poggenhagen"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: company.phone,
      email: company.email,
    },
  };
}

