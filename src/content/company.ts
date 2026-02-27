export const company = {
  name: "Galabau Kuhlmann",
  contactPerson: "Dirk Kuhlmann",
  address: {
    street: "Pflaumenallee 10",
    postalCode: "31535",
    city: "Neustadt am Rübenberge OT Poggenhagen",
    country: "Deutschland",
  },
  phone: "+49 172 5117361",
  email: "info@galabau-kuhlmann.de",
  domain: "galabau-kuhlmann.de",
  region: "Neustadt am Rübenberge / Region Hannover / Poggenhagen",
  openingHoursNote: "Bitte ergänzen",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Pflaumenallee+10%2C+31535+Neustadt+am+R%C3%BCbenberge",
} as const;

export const mainNav = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

