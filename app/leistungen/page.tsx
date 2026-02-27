import { services } from "@/src/content/services";
import { ServiceCard } from "@/src/components/site/service-card";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Leistungen",
  description:
    "Leistungsübersicht von Galabau Kuhlmann: Gartenplanung, Pflasterarbeiten, Terrassenbau, Zaunbau, Bepflanzung und Gartenpflege.",
  path: "/leistungen",
});

export default function ServicesPage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Leistungsübersicht"
          title="Unsere Leistungen im Garten- und Landschaftsbau"
          description="Fachgerechte Umsetzung von der Planung bis zur Pflege. Jede Leistung ist auf langlebige Ergebnisse ausgelegt."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
}

