import { CheckCircle2, ClipboardList, Hammer, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { company } from "@/src/content/company";
import { projects } from "@/src/content/projects";
import { services } from "@/src/content/services";
import { ProjectCard } from "@/src/components/site/project-card";
import { ServiceCard } from "@/src/components/site/service-card";
import { Testimonial } from "@/src/components/site/testimonial";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Startseite",
  description:
    "Garten- und Landschaftsbau in Poggenhagen und der Region Hannover. Galabau Kuhlmann steht für Qualität, Zuverlässigkeit und saubere Ausführung.",
  path: "/",
});

const usps = [
  { icon: ShieldCheck, title: "Zuverlässige Ausführung", text: "Klare Absprachen, verbindliche Abläufe, termintreue Umsetzung." },
  { icon: Hammer, title: "Premium-Handwerk", text: "Sorgfältige Bauausführung mit Blick auf Langlebigkeit und Details." },
  { icon: Leaf, title: "Durchdachte Gestaltung", text: "Funktionale Außenanlagen mit stimmigem Gesamtbild." },
  { icon: Sparkles, title: "Sauber auf der Baustelle", text: "Ordentliche Arbeitsweise und respektvoller Umgang mit Ihrem Grundstück." },
];

const process = [
  { title: "1. Erstgespräch", text: "Wir klären Ziele, Budgetrahmen und Anforderungen." },
  { title: "2. Vor-Ort-Termin", text: "Bestandsaufnahme und fachliche Beratung auf Ihrem Grundstück." },
  { title: "3. Angebot", text: "Transparentes, nachvollziehbares Angebot mit klaren Leistungen." },
  { title: "4. Umsetzung", text: "Fachgerechte Ausführung mit sauberer Übergabe." },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-olive/20 bg-brand-sand">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_1px_1px,rgba(94,107,63,0.24)_1px,transparent_0)] [background-size:28px_28px]" />
        <Container className="relative grid gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-brand-olive/40 bg-brand-sandDark px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-olive">
              Galabau Kuhlmann
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
              Garten- und Landschaftsbau in Poggenhagen & Region Hannover
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-charcoal/85">
              Qualität, zuverlässig, sauber: Wir gestalten und pflegen Außenanlagen mit handwerklichem Anspruch und klarer Kommunikation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <Button href="/kontakt#anfrage" className="min-w-48">
                Angebot anfragen
              </Button>
              <Button href="/kontakt#rueckruf" variant="ghost" className="min-w-36">
                Rückruf
              </Button>
            </div>
            <p className="mt-5 text-sm text-brand-charcoal/70">Direkter Ansprechpartner: {company.contactPerson}</p>
          </div>
          <div className="rounded-3xl border border-brand-olive/20 bg-brand-sandDark p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-charcoal">Handwerk mit Ruhe und Struktur</h2>
            <p className="mt-4 text-brand-charcoal/80">
              Statt visueller Überladung setzen wir auf klare Abläufe, belastbare Materialien und saubere Ausführung.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-brand-sand px-4 py-3">
                <p className="text-sm font-semibold text-brand-olive">Region</p>
                <p className="text-sm text-brand-charcoal/80">{company.region}</p>
              </div>
              <div className="rounded-xl bg-brand-sand px-4 py-3">
                <p className="text-sm font-semibold text-brand-olive">Kontakt</p>
                <p className="text-sm text-brand-charcoal/80">{company.phone}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Ihre Vorteile"
            title="Warum Kunden auf Galabau Kuhlmann setzen"
            description="Regional verankert, handwerklich präzise und mit Fokus auf dauerhaft hochwertige Ergebnisse."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {usps.map((usp) => (
              <article key={usp.title} className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-6 shadow-soft">
                <usp.icon className="h-7 w-7 text-brand-olive" />
                <h3 className="mt-4 text-lg font-semibold text-brand-charcoal">{usp.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal/80">{usp.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-olive/20 bg-brand-sandSoft py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Leistungen" title="Unsere Leistungsschwerpunkte" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Ablauf" title="So arbeiten wir" />
          <div className="grid gap-6 md:grid-cols-2">
            {process.map((step) => (
              <article key={step.title} className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-6 shadow-soft">
                <ClipboardList className="h-6 w-6 text-brand-olive" />
                <h3 className="mt-4 font-semibold text-brand-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal/80">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-olive/20 bg-brand-sandSoft py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Referenzen" title="Ausgewählte Projekte aus der Region" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} showThumbnail />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Kundenstimmen" title="Was Auftraggeber schätzen" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial text="Die Abstimmung war klar und die Ausführung sehr sauber. Der Garten wirkt jetzt wie aus einem Guss." name="Kundenstimme (Platzhalter)" />
            <Testimonial text="Zuverlässige Termine und ein professionelles Team vor Ort. Wir sind mit dem Ergebnis sehr zufrieden." name="Kundenstimme (Platzhalter)" />
            <Testimonial text="Von der Planung bis zur Fertigstellung transparent, freundlich und handwerklich überzeugend." name="Kundenstimme (Platzhalter)" />
          </div>
        </Container>
      </section>

      <section className="border-t border-brand-olive/30 bg-brand-moss py-20 text-brand-sand">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Ihr Projekt beginnt mit einem klaren Erstgespräch.</h2>
            <p className="mt-3 text-brand-sand/80">
              Schreiben Sie uns oder fordern Sie direkt einen Rückruf an. Wir melden uns zuverlässig zurück.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-brand-sand/80">
              <CheckCircle2 className="h-4 w-4 text-brand-olive" />
              Ansprechpartner: {company.contactPerson}
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/kontakt#anfrage">Angebot anfragen</Button>
            <Button href="/kontakt#rueckruf" variant="ghost" className="text-brand-sand ring-brand-sand/40 hover:bg-brand-sand/10">
              Rückruf
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

