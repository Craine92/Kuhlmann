import { Award, Truck, UserCircle2, Wrench } from "lucide-react";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { company } from "@/src/content/company";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Über uns",
  description:
    "Galabau Kuhlmann steht für zuverlässiges Handwerk, klare Kommunikation und hochwertige Garten- und Landschaftsbauprojekte.",
  path: "/ueber-uns",
});

const equipment = [
  "Minibagger und Verdichtungstechnik",
  "Professionelle Pflaster- und Schneidwerkzeuge",
  "Transportfahrzeuge für Material- und Baustellenlogistik",
  "Pflegegeräte für saisonale Gartenarbeiten",
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Über uns"
          title="Handwerk mit Anspruch, regional verankert"
          description="Wir planen und realisieren Außenanlagen mit Fokus auf Qualität, Funktionalität und langfristigen Werterhalt."
        />
        <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
          <h2 className="text-2xl font-semibold text-brand-charcoal">Unsere Philosophie</h2>
          <p className="mt-4 text-brand-charcoal/80">
            Gute Ergebnisse entstehen durch saubere Planung, fachgerechte Ausführung und verlässliche Kommunikation. Genau dafür steht
            {` ${company.name}`}.
          </p>
        </section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-6">
            <Award className="h-7 w-7 text-brand-olive" />
            <h3 className="mt-4 text-lg font-semibold text-brand-charcoal">Qualitätsversprechen</h3>
            <p className="mt-2 text-sm text-brand-charcoal/80">Präzise Ausführung, belastbare Lösungen und ein stimmiges Gesamtbild.</p>
          </article>
          <article className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-6">
            <UserCircle2 className="h-7 w-7 text-brand-olive" />
            <h3 className="mt-4 text-lg font-semibold text-brand-charcoal">Ansprechpartner</h3>
            <p className="mt-2 text-sm text-brand-charcoal/80">
              {company.contactPerson}
              <br />
              {company.phone}
            </p>
          </article>
          <article className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-6">
            <Truck className="h-7 w-7 text-brand-olive" />
            <h3 className="mt-4 text-lg font-semibold text-brand-charcoal">Regionale Nähe</h3>
            <p className="mt-2 text-sm text-brand-charcoal/80">Im Einsatz für Poggenhagen, Neustadt am Rübenberge und die Region Hannover.</p>
          </article>
        </div>
        <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
          <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-brand-charcoal">
            <Wrench className="h-6 w-6 text-brand-olive" />
            Maschinen & Equipment
          </h2>
          <ul className="mt-4 space-y-2 text-brand-charcoal/80">
            {equipment.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-dashed border-brand-olive/30 bg-brand-sand p-7">
          <h2 className="text-2xl font-semibold text-brand-charcoal">Partner / Siegel</h2>
          <p className="mt-3 text-brand-charcoal/80">Platzhalter: Bitte ergänzen, falls Partnerlogos oder Mitgliedschaften vorhanden sind.</p>
        </section>
      </Container>
    </div>
  );
}

