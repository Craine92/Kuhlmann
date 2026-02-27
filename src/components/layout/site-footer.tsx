import Link from "next/link";
import { company } from "@/src/content/company";
import { services } from "@/src/content/services";
import { Container } from "@/src/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-olive/30 bg-brand-moss py-14 text-brand-sand">
      <Container className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <p className="mt-4 text-sm leading-6 text-brand-sand/80">
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
          </p>
          <p className="mt-4 text-sm text-brand-sand/80">
            Mobil: {company.phone}
            <br />
            E-Mail: {company.email}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Leistungen</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-sand/80">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/leistungen/${service.slug}`} className="hover:text-brand-sand">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Rechtliches</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-sand/80">
            <li>
              <Link href="/impressum" className="hover:text-brand-sand">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-brand-sand">
                Datenschutz
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs text-brand-sand/60">Diese Seite nutzt keine Tracking-Cookies.</p>
        </div>
      </Container>
    </footer>
  );
}

