export type Service = {
  slug:
    | "gartenplanung-beratung"
    | "pflaster-naturstein"
    | "terrassenbau"
    | "zaun-sichtschutz"
    | "rollrasen-bepflanzung"
    | "gartenpflege";
  title: string;
  shortDescription: string;
  benefits: string[];
  forWho: string[];
  typicalProjects: string[];
  faqs: { question: string; answer: string }[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "gartenplanung-beratung",
    title: "Gartenplanung & Beratung",
    shortDescription:
      "Durchdachte Konzepte für Gärten, die zu Grundstück, Nutzung und Budget passen.",
    benefits: [
      "Klare Planung vor Baustart",
      "Sinnvolle Material- und Pflanzenauswahl",
      "Transparente Umsetzungsschritte",
    ],
    forWho: [
      "Neubau-Eigentümer mit ungestaltetem Außenbereich",
      "Bestandskunden mit Umgestaltungswunsch",
      "Kunden mit Fokus auf pflegeleichte Lösungen",
    ],
    typicalProjects: [
      "Komplette Gartenneugestaltung",
      "Teilbereich-Optimierung (Eingang, Terrasse, Wege)",
      "Beratung zu Entwässerung und Flächenaufteilung",
    ],
    faqs: [
      {
        question: "Wann lohnt sich eine Gartenplanung?",
        answer:
          "Vor allem vor größeren Investitionen. Eine Planung reduziert spätere Korrekturen und sorgt für ein stimmiges Gesamtbild.",
      },
      {
        question: "Gibt es auch Beratung ohne komplette Neuplanung?",
        answer:
          "Ja, wir bieten auch gezielte Beratung für einzelne Bereiche wie Wege, Terrasse oder Bepflanzung an.",
      },
      {
        question: "Wie läuft der Start ab?",
        answer:
          "Nach dem Erstgespräch besichtigen wir die Fläche, klären Ziele und erstellen darauf aufbauend ein umsetzbares Konzept.",
      },
    ],
    image: "/images/services/gartenplanung.svg",
  },
  {
    slug: "pflaster-naturstein",
    title: "Pflasterarbeiten & Naturstein",
    shortDescription:
      "Langlebige Wege, Einfahrten und Flächen mit sauberem Unterbau und präziser Ausführung.",
    benefits: [
      "Belastbare Flächen mit professionellem Untergrund",
      "Hochwertige Optik durch exakte Verlegung",
      "Wertsteigerung für Grundstück und Immobilie",
    ],
    forWho: [
      "Eigentümer mit Sanierungsbedarf an Wegen und Einfahrten",
      "Bauherren mit Fokus auf langlebige Außenflächen",
      "Kunden mit Wunsch nach Naturstein-Optik",
    ],
    typicalProjects: [
      "Hof- und Einfahrtsflächen",
      "Gartenwege und Treppenanlagen",
      "Natursteinmauern und Einfassungen",
    ],
    faqs: [
      {
        question: "Wie wichtig ist der Unterbau?",
        answer:
          "Der Unterbau ist entscheidend für die Haltbarkeit. Ohne fachgerechten Untergrund drohen Setzungen und Schäden.",
      },
      {
        question: "Kann bestehendes Pflaster aufgenommen und neu gesetzt werden?",
        answer:
          "In vielen Fällen ja. Nach Sichtung vor Ort empfehlen wir, ob eine Neuverlegung oder Teilinstandsetzung sinnvoller ist.",
      },
      {
        question: "Welche Materialien sind möglich?",
        answer:
          "Je nach Nutzung und Stil kommen Betonpflaster, Klinker oder Naturstein in Frage.",
      },
    ],
    image: "/images/services/pflaster.svg",
  },
  {
    slug: "terrassenbau",
    title: "Terrassenbau",
    shortDescription:
      "Individuelle Terrassen als funktionaler und ästhetischer Mittelpunkt Ihres Gartens.",
    benefits: [
      "Nutzungskomfort für Alltag und Gäste",
      "Materialien passend zu Architektur und Pflegeaufwand",
      "Solide Ausführung für lange Lebensdauer",
    ],
    forWho: [
      "Familien mit Wunsch nach mehr Aufenthaltsqualität",
      "Eigentümer mit Erneuerungsbedarf alter Terrassen",
      "Kunden mit Fokus auf repräsentative Außenbereiche",
    ],
    typicalProjects: [
      "Terrassen aus Plattenbelag oder Naturstein",
      "Anbindung an Wege und Rasenflächen",
      "Erweiterung bestehender Terrassenflächen",
    ],
    faqs: [
      {
        question: "Welche Größe ist sinnvoll?",
        answer:
          "Das hängt von Nutzung und Grundstück ab. Wir planen Flächen, die alltagstauglich sind und gut in den Garten passen.",
      },
      {
        question: "Kann eine alte Terrasse überarbeitet werden?",
        answer:
          "Oft ist eine Sanierung möglich. Bei größeren Schäden ist ein Neuaufbau langfristig meist wirtschaftlicher.",
      },
      {
        question: "Wie lange dauert der Bau?",
        answer:
          "Je nach Umfang und Material in der Regel wenige Tage bis mehrere Wochen.",
      },
    ],
    image: "/images/services/terrasse.svg",
  },
  {
    slug: "zaun-sichtschutz",
    title: "Zaun & Sichtschutz",
    shortDescription:
      "Schutz, Struktur und Privatsphäre durch passgenaue Zaun- und Sichtschutzlösungen.",
    benefits: [
      "Mehr Privatsphäre im Garten",
      "Klare Grundstücksgrenzen",
      "Optisch harmonische Integration ins Gesamtbild",
    ],
    forWho: [
      "Eigentümer mit Bedarf an Sichtschutz",
      "Familien mit Kindern oder Haustieren",
      "Kunden mit Wunsch nach klarer Grundstücksgestaltung",
    ],
    typicalProjects: [
      "Holz- und Metallzäune",
      "Sichtschutzwände für Terrassen",
      "Eingangs- und Gartenabtrennungen",
    ],
    faqs: [
      {
        question: "Welcher Zaun passt zu meinem Grundstück?",
        answer:
          "Das hängt von Stil, Wartungsaufwand und Budget ab. Wir beraten neutral zu geeigneten Varianten.",
      },
      {
        question: "Können vorhandene Fundamente genutzt werden?",
        answer:
          "Teilweise ja. Wir prüfen vor Ort, ob die bestehende Basis tragfähig und sinnvoll nutzbar ist.",
      },
      {
        question: "Bieten Sie auch Komplettlösungen an?",
        answer:
          "Ja, von der Planung bis zur Montage inklusive Anpassung an Gelände und vorhandene Strukturen.",
      },
    ],
    image: "/images/services/zaun.svg",
  },
  {
    slug: "rollrasen-bepflanzung",
    title: "Rollrasen & Bepflanzung",
    shortDescription:
      "Schnell nutzbare Rasenflächen und stimmige Pflanzkonzepte für ein gepflegtes Gesamtbild.",
    benefits: [
      "Sofort sichtbarer Unterschied",
      "Pflanzenauswahl abgestimmt auf Standort",
      "Ganzjährig strukturierter Gartenaufbau",
    ],
    forWho: [
      "Kunden mit Wunsch nach schneller Grünfläche",
      "Eigentümer mit kargen oder ausgelaugten Bereichen",
      "Bauherren in der finalen Außenanlagengestaltung",
    ],
    typicalProjects: [
      "Neuaufbau von Rasenflächen",
      "Beetgestaltung mit Stauden und Gehölzen",
      "Nachbepflanzung zur Aufwertung bestehender Gärten",
    ],
    faqs: [
      {
        question: "Wann ist Rollrasen sinnvoll?",
        answer:
          "Wenn eine Fläche schnell nutzbar sein soll und ein gleichmäßiges Ergebnis gewünscht ist.",
      },
      {
        question: "Wie wird die Bepflanzung ausgewählt?",
        answer:
          "Nach Boden, Lichtverhältnissen, Wasserbedarf und gewünschter Pflegeintensität.",
      },
      {
        question: "Ist eine spätere Pflege aufwendig?",
        answer:
          "Das hängt vom Konzept ab. Wir können gezielt pflegearme Varianten planen.",
      },
    ],
    image: "/images/services/bepflanzung.svg",
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    shortDescription:
      "Regelmäßige Pflegeleistungen für dauerhaft gepflegte und funktionsfähige Außenanlagen.",
    benefits: [
      "Werterhalt Ihrer Gartenanlage",
      "Professionelles, saisongerechtes Vorgehen",
      "Flexible Einsätze nach Bedarf",
    ],
    forWho: [
      "Privatkunden mit wenig Zeit",
      "Eigentümer großer Grünflächen",
      "Kunden mit saisonalem Pflegebedarf",
    ],
    typicalProjects: [
      "Rückschnitt und Formschnitt",
      "Beetpflege und Unkrautmanagement",
      "Frühjahrs- und Herbstpflege",
    ],
    faqs: [
      {
        question: "Bieten Sie einmalige Einsätze an?",
        answer:
          "Ja, sowohl Einzeltermine als auch laufende Pflegeintervalle sind möglich.",
      },
      {
        question: "Was gehört zur saisonalen Pflege?",
        answer:
          "Je nach Jahreszeit z. B. Rückschnitt, Bodenverbesserung, Reinigung und Vorbereitung auf die nächste Saison.",
      },
      {
        question: "Kann ich Leistungen kombinieren?",
        answer:
          "Ja, Pflege kann mit Umgestaltungs- oder Instandsetzungsarbeiten kombiniert werden.",
      },
    ],
    image: "/images/services/pflege.svg",
  },
];

