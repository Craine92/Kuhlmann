import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FAQAccordion } from "@/src/components/site/faq-accordion";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { services } from "@/src/content/services";
import { createMetadata } from "@/src/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return createMetadata({
      title: "Leistung nicht gefunden",
      description: "Die angefragte Leistung konnte nicht gefunden werden.",
      path: `/leistungen/${slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/leistungen/${service.slug}`,
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-24">
      <Container>
        <SectionHeader eyebrow="Leistungsdetail" title={service.title} description={service.shortDescription} />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h3 className="text-xl font-semibold text-brand-charcoal">Leistungsinhalte</h3>
              <ul className="mt-4 space-y-2 text-brand-charcoal/80">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>- {benefit}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h3 className="text-xl font-semibold text-brand-charcoal">Für wen ist diese Leistung geeignet?</h3>
              <ul className="mt-4 space-y-2 text-brand-charcoal/80">
                {service.forWho.map((target) => (
                  <li key={target}>- {target}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h3 className="text-xl font-semibold text-brand-charcoal">Typische Projekte</h3>
              <ul className="mt-4 space-y-2 text-brand-charcoal/80">
                {service.typicalProjects.map((project) => (
                  <li key={project}>- {project}</li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-4">
              <div className="grid grid-cols-2 gap-3">
                <Image
                  src="/images/services/detail-1.svg"
                  alt={`${service.title} Detailansicht 1`}
                  width={450}
                  height={260}
                  className="h-28 w-full rounded-lg border border-brand-olive/20 object-cover"
                />
                <Image
                  src="/images/services/detail-2.svg"
                  alt={`${service.title} Detailansicht 2`}
                  width={450}
                  height={260}
                  className="h-28 w-full rounded-lg border border-brand-olive/20 object-cover"
                />
              </div>
            </div>
            <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h3 className="text-xl font-semibold text-brand-charcoal">FAQ</h3>
              <div className="mt-4">
                <FAQAccordion items={service.faqs} />
              </div>
            </section>
            <section className="rounded-2xl border border-brand-olive/30 bg-brand-moss p-7 text-brand-sand">
              <h3 className="text-xl font-semibold">Projekt anfragen</h3>
              <p className="mt-3 text-brand-sand/80">Wir beraten Sie persönlich und erstellen ein transparentes Angebot.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/kontakt#anfrage">Angebot anfragen</Button>
                <Button href="/kontakt#rueckruf" variant="ghost" className="text-brand-sand ring-brand-sand/40 hover:bg-brand-sand/10">
                  Rückruf
                </Button>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </div>
  );
}
