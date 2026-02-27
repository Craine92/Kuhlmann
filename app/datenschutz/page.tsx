import { Container } from "@/src/components/ui/container";
import { company } from "@/src/content/company";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise der Website von Galabau Kuhlmann.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-brand-charcoal">Datenschutz</h1>
        <p className="mt-4 text-sm text-brand-charcoal/70">Hinweis: Platzhaltertext, keine Rechtsberatung.</p>

        <section className="mt-10 space-y-4 rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7 text-brand-charcoal/80">
          <h2 className="text-2xl font-semibold text-brand-charcoal">1. Verantwortliche Stelle</h2>
          <p>
            {company.name}
            <br />
            {company.contactPerson}
            <br />
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            E-Mail: {company.email}
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7 text-brand-charcoal/80">
          <h2 className="text-2xl font-semibold text-brand-charcoal">2. Verarbeitung von Anfragen</h2>
          <p>
            Wenn Sie uns per Kontaktformular oder Rückrufformular eine Anfrage senden, werden die eingegebenen Daten zur Bearbeitung
            Ihrer Anfrage verarbeitet.
          </p>
          <p>
            Rechtsgrundlage und Speicherdauer: <span className="font-medium">Bitte ergänzen</span>.
          </p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7 text-brand-charcoal/80">
          <h2 className="text-2xl font-semibold text-brand-charcoal">3. Cookies und Tracking</h2>
          <p>Diese Website nutzt keine Tracking-Cookies und keine externen Analyse-Tools.</p>
        </section>

        <section className="mt-6 space-y-4 rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7 text-brand-charcoal/80">
          <h2 className="text-2xl font-semibold text-brand-charcoal">4. Betroffenenrechte</h2>
          <p>
            Informationen zu Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch:
            <span className="font-medium"> Bitte ergänzen</span>.
          </p>
        </section>
      </Container>
    </div>
  );
}

