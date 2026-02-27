"use client";

import { useActionState, useMemo, useState } from "react";
import { submitCallbackForm, type FormState } from "@/src/actions/contact";
import { SubmitButton } from "@/src/components/forms/submit-button";
import { company } from "@/src/content/company";

const initialState: FormState = { ok: false, message: "" };

export function CallbackForm() {
  const [state, formAction] = useActionState(submitCallbackForm, initialState);
  const [clientError, setClientError] = useState("");

  const fallbackMailto = useMemo(
    () =>
      `mailto:${company.email}?subject=${encodeURIComponent("Rückruf anfordern")}&body=${encodeURIComponent(
        "Bitte Name, Telefon und Wunschtermin ergänzen.",
      )}`,
    [],
  );

  return (
    <form
      action={formAction}
      className="space-y-4"
      onSubmit={(event) => {
        const form = event.currentTarget;
        const privacy = form.querySelector<HTMLInputElement>('input[name="privacy"]');
        if (!form.checkValidity() || !privacy?.checked) {
          event.preventDefault();
          setClientError("Bitte alle Pflichtfelder ausfüllen und Datenschutzhinweis bestätigen.");
          form.reportValidity();
          return;
        }
        setClientError("");
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
          Telefon*
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="+49 ..."
            className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-brand-charcoal">
        Wunschtermin*
        <input
          type="text"
          name="preferredTime"
          placeholder="z. B. Werktags 16:00-18:00 Uhr"
          required
          className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
        />
      </label>
      <label className="text-sm font-medium text-brand-charcoal">
        Nachricht
        <textarea
          name="message"
          rows={4}
          placeholder="Optional: kurze Projektinfo oder Rückrufgrund"
          className="mt-1 w-full rounded-xl border border-brand-olive/30 bg-brand-sandSoft px-4 py-2.5 text-sm text-brand-charcoal outline-none ring-brand-olive/35 focus:ring-4"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-brand-charcoal">
        <input type="checkbox" name="privacy" required className="mt-0.5 h-4 w-4 rounded border-brand-olive/40 bg-brand-sandSoft" />
        Ich habe den Datenschutzhinweis zur Verarbeitung meiner Anfrage gelesen und akzeptiert.*
      </label>
      {clientError ? <p className="text-sm font-medium text-rose-700">{clientError}</p> : null}
      {state.message ? <p className={`text-sm font-medium ${state.ok ? "text-brand-oliveDark" : "text-rose-700"}`}>{state.message}</p> : null}
      {!state.ok && state.message ? (
        <a href={state.mailto || fallbackMailto} className="inline-block text-sm font-semibold text-brand-olive underline">
          Alternativ per E-Mail senden
        </a>
      ) : null}
      <p className="text-xs text-brand-charcoal/70">Hinweis: Diese Seite nutzt keine Tracking-Cookies.</p>
      <SubmitButton label="Rückruf anfordern" />
    </form>
  );
}

