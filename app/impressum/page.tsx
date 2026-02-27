import { Container } from "@/src/components/ui/container";
import { company } from "@/src/content/company";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Impressum",
  description: "Impressum der Website von Galabau Kuhlmann.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-brand-charcoal">Impressum</h1>
        <p className="mt-4 text-sm text-brand-charcoal/70">Hinweis: Platzhaltertext, keine Rechtsberatung.</p>

        <section className="mt-10 space-y-4 rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7 text-brand-charcoal/80">
          <h2 className="text-2xl font-semibold text-brand-charcoal">Angaben gemäß § 5 TMG</h2>
          <p>
            {company.name}
            <br />
            {company.contactPerson}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
          <p>
            Telefon: {company.phone}
            <br />
            E-Mail: {company.email}
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7 text-brand-charcoal/80">
          <h2 className="text-2xl font-semibold text-brand-charcoal">Verantwortlich für den Inhalt</h2>
          <p className="mt-3">
            {company.contactPerson}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
        </section>
      </Container>
    </div>
  );
}

