"use server";

import { appendFile } from "node:fs/promises";
import { company } from "@/src/content/company";

export type FormState = {
  ok: boolean;
  message: string;
  mailto?: string;
};

const initialState: FormState = { ok: false, message: "" };

function createMailto(subject: string, body: string) {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function persistPayload(type: "kontaktanfrage" | "rueckruf", payload: Record<string, string>) {
  const entry = `${JSON.stringify({ type, timestamp: new Date().toISOString(), ...payload })}\n`;
  try {
    await appendFile("/tmp/galabau-kuhlmann-requests.jsonl", entry, "utf-8");
  } catch (error) {
    console.log("Kontaktanfrage (Fallback)", { type, ...payload, error });
  }
}

function asString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function submitContactForm(prevState: FormState = initialState, formData: FormData): Promise<FormState> {
  void prevState;
  const name = asString(formData, "name");
  const email = asString(formData, "email");
  const phone = asString(formData, "phone");
  const message = asString(formData, "message");
  const privacy = asString(formData, "privacy");

  if (!name || !email || !message || privacy !== "on") {
    return {
      ok: false,
      message: "Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie den Datenschutzhinweis.",
      mailto: createMailto("Angebot anfragen", `${name}\n${email}\n${phone}\n\n${message}`),
    };
  }

  await persistPayload("kontaktanfrage", { name, email, phone, message });

  return {
    ok: true,
    message: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.",
  };
}

export async function submitCallbackForm(prevState: FormState = initialState, formData: FormData): Promise<FormState> {
  void prevState;
  const name = asString(formData, "name");
  const phone = asString(formData, "phone");
  const preferredTime = asString(formData, "preferredTime");
  const message = asString(formData, "message");
  const privacy = asString(formData, "privacy");

  if (!name || !phone || !preferredTime || privacy !== "on") {
    return {
      ok: false,
      message: "Bitte Name, Telefon, Wunschtermin und Datenschutzhinweis angeben.",
      mailto: createMailto("Rückruf anfordern", `${name}\n${phone}\n${preferredTime}\n\n${message}`),
    };
  }

  await persistPayload("rueckruf", { name, phone, preferredTime, message });

  return {
    ok: true,
    message: "Vielen Dank. Wir melden uns zum gewünschten Zeitpunkt.",
  };
}

