export type Project = {
  slug: string;
  title: string;
  summary: string;
  location: "Region Hannover" | "Neustadt am Rübenberge";
  services: string[];
  results: string[];
  coverImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "familiengarten-poggenhagen",
    title: "Familiengarten mit Terrassenbereich",
    summary:
      "Neustrukturierung eines Bestandsgrundstücks mit klaren Laufwegen und neuer Aufenthaltsfläche.",
    location: "Neustadt am Rübenberge",
    services: ["Gartenplanung & Beratung", "Terrassenbau", "Rollrasen & Bepflanzung"],
    results: [
      "Neue Terrassenfläche mit direkter Gartenanbindung",
      "Pflegeleichte Pflanzbereiche mit saisonaler Struktur",
      "Verbesserte Flächennutzung für Familie und Gäste",
    ],
    coverImage: "/images/projects/projekt-1.svg",
    gallery: [
      "/images/projects/projekt-1.svg",
      "/images/projects/projekt-2.svg",
      "/images/projects/projekt-3.svg",
    ],
  },
  {
    slug: "einfahrt-naturstein-neustadt",
    title: "Einfahrt in Natursteinoptik",
    summary:
      "Belastbare Einfahrtslösung mit neuem Unterbau und hochwertiger Pflasteroberfläche.",
    location: "Neustadt am Rübenberge",
    services: ["Pflasterarbeiten & Naturstein"],
    results: [
      "Tragfähiger Neuaufbau für dauerhafte Belastung",
      "Saubere Kantenführung und Entwässerung",
      "Aufgewerteter Eingangsbereich mit klarer Linienführung",
    ],
    coverImage: "/images/projects/projekt-2.svg",
    gallery: [
      "/images/projects/projekt-2.svg",
      "/images/projects/projekt-4.svg",
      "/images/projects/projekt-5.svg",
    ],
  },
  {
    slug: "sichtschutz-terrasse-region-hannover",
    title: "Sichtschutzlösung für Terrassenzone",
    summary:
      "Gestaltung einer geschützten Terrassenfläche mit abgestimmten Zaunelementen.",
    location: "Region Hannover",
    services: ["Zaun & Sichtschutz", "Terrassenbau"],
    results: [
      "Mehr Privatsphäre bei gleichbleibender Offenheit",
      "Materialmix passend zur Hausarchitektur",
      "Wetterfeste und wartungsarme Ausführung",
    ],
    coverImage: "/images/projects/projekt-3.svg",
    gallery: [
      "/images/projects/projekt-3.svg",
      "/images/projects/projekt-5.svg",
      "/images/projects/projekt-6.svg",
    ],
  },
  {
    slug: "pflegekonzept-grossgarten",
    title: "Pflegekonzept für großen Privatgarten",
    summary:
      "Saisonale Pflege und Strukturierung für langfristig gepflegte Außenanlagen.",
    location: "Region Hannover",
    services: ["Gartenpflege", "Rollrasen & Bepflanzung"],
    results: [
      "Regelmäßige Pflegeintervalle mit transparentem Umfang",
      "Gezielte Nachpflanzung zur Flächenaufwertung",
      "Dauerhaft gepflegter Gesamteindruck",
    ],
    coverImage: "/images/projects/projekt-4.svg",
    gallery: [
      "/images/projects/projekt-4.svg",
      "/images/projects/projekt-1.svg",
      "/images/projects/projekt-6.svg",
    ],
  },
  {
    slug: "vorgarten-neugestaltung",
    title: "Vorgarten-Neugestaltung",
    summary:
      "Kompakte Umgestaltung mit klaren Wegeachsen und harmonischer Bepflanzung.",
    location: "Neustadt am Rübenberge",
    services: ["Gartenplanung & Beratung", "Rollrasen & Bepflanzung"],
    results: [
      "Verbesserte Orientierung und Zugänglichkeit",
      "Wenig Pflegeaufwand bei hohem Gestaltungswert",
      "Einladender erster Eindruck im Eingangsbereich",
    ],
    coverImage: "/images/projects/projekt-5.svg",
    gallery: [
      "/images/projects/projekt-5.svg",
      "/images/projects/projekt-2.svg",
      "/images/projects/projekt-1.svg",
    ],
  },
  {
    slug: "terrasse-erneuerung-hannover",
    title: "Terrassenerneuerung im Bestand",
    summary:
      "Modernisierung einer in die Jahre gekommenen Terrasse inklusive neuer Anschlüsse.",
    location: "Region Hannover",
    services: ["Terrassenbau", "Pflasterarbeiten & Naturstein"],
    results: [
      "Technisch und optisch zeitgemäße Terrassenfläche",
      "Verbesserte Entwässerung und sichere Übergänge",
      "Stimmige Verbindung zwischen Haus und Garten",
    ],
    coverImage: "/images/projects/projekt-6.svg",
    gallery: [
      "/images/projects/projekt-6.svg",
      "/images/projects/projekt-3.svg",
      "/images/projects/projekt-4.svg",
    ],
  },
];

