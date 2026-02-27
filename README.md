# Galabau Kuhlmann Website

Professionelles Website-Projekt für den Garten- und Landschaftsbau-Betrieb **Galabau Kuhlmann**.

## Design-Theme

Aktuelles Theme: **Sand/Grün (Naturlook)** mit reduzierter Bildsprache.

Farben anpassen:

- `tailwind.config.ts` (`theme.extend.colors.brand`)
- `app/globals.css` (Basisvariablen/Body-Hintergrund)

## Setup

```bash
npm install
npm run dev
```

Danach unter `http://localhost:3000` öffnen.

Produktionsbuild prüfen:

```bash
npm run build
npm start
```

## Firmendaten ändern

Zentrale Firmendaten liegen in:

- `src/content/company.ts`

Hier können Name, Adresse, Telefon, E-Mail, Domain und Kartenlink gepflegt werden. Diese Daten werden auch in SEO/Schema und Kontaktbereichen verwendet.

## Bilder ersetzen

Lokale Placeholder liegen unter:

- `public/images/hero-galabau.svg`
- `public/images/og-default.svg`
- `public/images/services/*`
- `public/images/projects/*`

Einfach Dateien mit identischen Dateinamen ersetzen.

## Deployment auf Vercel

1. Repository zu GitHub pushen.
2. In Vercel neues Projekt importieren.
3. Framework automatisch als Next.js erkennen lassen.
4. Deploy ausführen.

Es sind keine API-Keys oder kostenpflichtigen Dienste erforderlich.

## Kontaktformular und späterer echter Mailversand

Aktuell werden Formularanfragen über Server Actions verarbeitet und als JSON-Zeilen in `/tmp/galabau-kuhlmann-requests.jsonl` gespeichert.
Wenn das Schreiben fehlschlägt, wird auf `console.log` zurückgefallen. Im Frontend wird zusätzlich ein `mailto`-Fallback angeboten.

Optionale spätere Integration:

1. SMTP (z. B. eigener Mailserver via `nodemailer`)
2. Transaktionaler Anbieter (z. B. Resend)

Dafür kann die Logik in `src/actions/contact.ts` erweitert werden, ohne die Formulare neu zu bauen.
