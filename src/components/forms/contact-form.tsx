"use client";

import { useMemo, useState } from "react";
import { company } from "@/src/content/company";

export function ContactForm() {
  const [clientError, setClientError] = useState("");
  const [success, setSuccess] = useState("");

  const fallbackMailto = useMemo(
    () =>
      `mailto:${company.email}?subject=${encodeURIComponent("Angebot anfragen")}&body=${encodeURIComponent(
        "Bitte Name, E-Mail und Nachricht ergänzen.",
      )}`,
    [],
  );

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const privacy = form.querySelector<HTMLInputElement>('input[name="privacy"]');
        if (!form.checkValidity() || !privacy?.checked) {
          setClientError("Bitte alle Pflichtfelder ausfüllen und Datenschutzhinweis bestätigen.");
          form.reportValidity();
          return;
        }

        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const phone = String(data.get("phone") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        const mailto = `mailto:${company.email}?subject=${encodeURIComponent("Angebot anfragen")}&body=${encodeURIComponent(
          `${name}\n${email}\n${phone}\n\n${message}`,
        )}`;

        window.location.href = mailto;
        setClientError("");
        setSuccess("E-Mail-Programm wurde geöffnet. Falls nicht, nutzen Sie den Mailto-Link unten.");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-brand-charcoal">
          Name*
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Vor- und Nachname"
            className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
          />
        </label>
        <label className="text-sm font-medium text-brand-charcoal">
          E-Mail*
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="name@beispiel.de"
            className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-brand-charcoal">
        Telefon
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+49 ..."
          className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
        />
      </label>
      <label className="text-sm font-medium text-brand-charcoal">
        Nachricht*
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Kurze Beschreibung Ihres Projekts (Fläche, gewünschte Leistung, Zeitraum)"
          className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-brand-charcoal">
        <input type="checkbox" name="privacy" required className="mt-0.5 h-4 w-4 rounded border-brand-olive/40 bg-brand-sandSoft" />
        Ich habe den Datenschutzhinweis zur Verarbeitung meiner Anfrage gelesen und akzeptiert.*
      </label>
      {clientError ? <p className="text-sm font-medium text-rose-700">{clientError}</p> : null}
      {success ? <p className="text-sm font-medium text-brand-oliveDark">{success}</p> : null}
      <a href={fallbackMailto} className="inline-block text-sm font-semibold text-brand-olive underline">
        Alternativ per E-Mail senden
      </a>
      <p className="text-xs text-brand-charcoal/70">Hinweis: Diese Seite nutzt keine Tracking-Cookies.</p>
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-full bg-brand-olive px-6 text-sm font-semibold text-brand-sand transition-colors hover:bg-brand-oliveDark"
      >
        Angebot anfragen
      </button>
    </form>
  );
}

