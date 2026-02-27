import Link from "next/link";
import { BadgeCheck, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/src/components/forms/contact-form";
import { CallbackForm } from "@/src/components/forms/callback-form";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { company } from "@/src/content/company";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Kontakt",
  description:
    "Kontakt zu Galabau Kuhlmann: Angebot anfragen oder Rückruf vereinbaren. Für Projekte in Poggenhagen, Neustadt am Rübenberge und Region Hannover.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Kontakt"
          title="Angebot anfragen oder Rückruf vereinbaren"
          description="Senden Sie uns Ihre Anfrage direkt online. Wir melden uns zeitnah und verbindlich bei Ihnen."
        />
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="inline-flex items-center gap-2 rounded-xl border border-brand-olive/30 bg-brand-sandDark px-4 py-3 text-sm text-brand-charcoal">
            <BadgeCheck className="h-4 w-4" />
            Transparente Angebote
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-brand-olive/30 bg-brand-sandDark px-4 py-3 text-sm text-brand-charcoal">
            <BadgeCheck className="h-4 w-4" />
            Persönliche Beratung
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-brand-olive/30 bg-brand-sandDark px-4 py-3 text-sm text-brand-charcoal">
            <BadgeCheck className="h-4 w-4" />
            Regionale Vor-Ort-Termine
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h2 className="text-xl font-semibold text-brand-charcoal">Kontaktdaten</h2>
              <ul className="mt-4 space-y-3 text-brand-charcoal/80">
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-olive" />
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-olive" />
                  <Link href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-medium text-brand-charcoal hover:text-brand-olive">
                    {company.phone}
                  </Link>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-olive" />
                  <Link href={`mailto:${company.email}`} className="font-medium text-brand-charcoal hover:text-brand-olive">
                    {company.email}
                  </Link>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-brand-olive" />
                  Öffnungszeiten: {company.openingHoursNote}
                </li>
              </ul>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand-olive px-4 text-sm font-semibold text-brand-sand hover:bg-brand-oliveDark"
                >
                  Jetzt anrufen
                </Link>
                <Link
                  href="#rueckruf"
                  className="inline-flex h-11 items-center justify-center rounded-full ring-1 ring-brand-olive/40 px-4 text-sm font-semibold text-brand-charcoal hover:bg-brand-sand"
                >
                  Rückruf sichern
                </Link>
              </div>
            </section>
            <section className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-5">
              <div className="flex h-52 items-center justify-center rounded-xl border border-dashed border-brand-olive/30 bg-brand-sand text-brand-charcoal/70">
                Karten-Placeholder
              </div>
              <Link href={company.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-brand-olive">
                Route planen
              </Link>
            </section>
          </aside>

          <div className="space-y-6">
            <section id="anfrage" className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h2 className="text-2xl font-semibold text-brand-charcoal">Angebot anfragen</h2>
              <p className="mt-2 text-sm text-brand-charcoal/80">Pflichtfelder sind mit * markiert. Je genauer die Angaben, desto präziser das Angebot.</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </section>
            <section id="rueckruf" className="rounded-2xl border border-brand-olive/20 bg-brand-sandDark p-7">
              <h2 className="text-2xl font-semibold text-brand-charcoal">Rückruf anfordern</h2>
              <p className="mt-2 text-sm text-brand-charcoal/80">Nennen Sie uns den besten Zeitraum. Wir melden uns zuverlässig zurück.</p>
              <div className="mt-5">
                <CallbackForm />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

