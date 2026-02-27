import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { projects } from "@/src/content/projects";
import { createMetadata } from "@/src/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return createMetadata({
      title: "Referenz nicht gefunden",
      description: "Die angefragte Referenz konnte nicht gefunden werden.",
      path: `/referenzen/${slug}`,
    });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/referenzen/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-24">
      <Container className="space-y-8">
        <div className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">Referenz</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-charcoal">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-brand-charcoal/80">{project.summary}</p>
          <p className="mt-3 text-sm font-medium text-brand-charcoal/70">Ort: {project.location}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {project.gallery.slice(0, 4).map((image, idx) => (
            <Image
              key={`${image}-${idx}`}
              src={image}
              alt={`${project.title} - Galerie ${idx + 1}`}
              width={900}
              height={600}
              className="h-56 w-full rounded-2xl border border-brand-olive/20 object-cover"
            />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
            <h2 className="text-2xl font-semibold text-brand-charcoal">Leistungsumfang</h2>
            <ul className="mt-4 space-y-2 text-brand-charcoal/80">
              {project.services.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
            <h2 className="text-2xl font-semibold text-brand-charcoal">Ergebnis/Nutzen</h2>
            <ul className="mt-4 space-y-2 text-brand-charcoal/80">
              {project.results.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-2xl border border-brand-olive/30 bg-brand-moss p-7 text-brand-sand">
          <h2 className="text-2xl font-semibold">Ähnliches Projekt geplant?</h2>
          <p className="mt-3 text-brand-sand/80">Wir beraten Sie zu Aufwand, Ablauf und sinnvollen Lösungen für Ihr Grundstück.</p>
          <div className="mt-5 flex gap-3">
            <Button href="/kontakt#anfrage">Angebot anfragen</Button>
            <Button href="/kontakt#rueckruf" variant="ghost" className="text-brand-sand ring-brand-sand/40 hover:bg-brand-sand/10">
              Rückruf
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
