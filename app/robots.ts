import type { MetadataRoute } from "next";
import { company } from "@/src/content/company";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${company.domain}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

