"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { company, mainNav } from "@/src/content/company";
import { Container } from "@/src/components/ui/container";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-olive/20 bg-brand-sandSoft/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-brand-charcoal">
          {company.name}
        </Link>
        <button
          className="inline-flex rounded-md p-2 text-brand-charcoal lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Navigation öffnen"
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {mainNav.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className={cn(
                "text-sm font-medium text-brand-charcoal/80 transition-colors hover:text-brand-charcoal",
                pathname === entry.href && "text-brand-olive underline underline-offset-8 decoration-brand-olive/70",
              )}
            >
              {entry.label}
            </Link>
          ))}
          <Button href="/kontakt#anfrage" variant="primary">
            Angebot anfragen
          </Button>
        </nav>
      </Container>
      {isOpen ? (
        <div className="border-t border-brand-olive/20 bg-brand-sandDark lg:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {mainNav.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-brand-charcoal"
              >
                {entry.label}
              </Link>
            ))}
            <Button href="/kontakt#anfrage">Angebot anfragen</Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

