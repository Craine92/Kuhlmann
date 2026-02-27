import type { MetadataRoute } from "next";
import { company } from "@/src/content/company";
import { projects } from "@/src/content/projects";
import { services } from "@/src/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${company.domain}`;
  const staticPages = ["", "/leistungen", "/referenzen", "/ueber-uns", "/kontakt", "/impressum", "/datenschutz"];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/leistungen/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/referenzen/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

