import Link from "next/link";
import { Container } from "@/src/components/ui/container";

export default function NotFound() {
  return (
    <div className="py-24">
      <Container className="max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-brand-charcoal">Seite nicht gefunden</h1>
        <p className="mt-4 text-brand-charcoal/80">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-olive px-6 py-3 text-sm font-semibold text-brand-sand">
          Zur Startseite
        </Link>
      </Container>
    </div>
  );
}

