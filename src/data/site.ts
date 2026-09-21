export const atelier = {
  eyebrow: "01 — Atelier",
  title: "Un studio d'impression, pas une usine anonyme.",
  body: "À Lyon, on grave, on presse, on contrôle chaque passage d'encre. DTG, sérigraphie et broderie sous le même toit — pour que ton textile ait la présence d'une pièce édition limitée.",
  facts: [
    { label: "Repères", value: "Lyon 7e" },
    { label: "Tirages", value: "1 → 5 000" },
    { label: "Délai atelier", value: "5–10 j" },
    { label: "Encres", value: "OEKO-TEX" },
  ],
};

export const processSteps = [
  {
    n: "01",
    title: "Uploade ton visuel",
    text: "PNG, SVG, AI. On lit la résolution, on te dit si ça tiendra le grand format.",
  },
  {
    n: "02",
    title: "Choisis le support",
    text: "Tee heavyweight, hoodie, tote, casquette. Coton bio, recycled blend, ou blank premium.",
  },
  {
    n: "03",
    title: "On presse",
    text: "Épreuve numérique puis production. Tu valides. On imprime. Fin.",
  },
];

export const collections = [
  {
    code: "TR-01",
    name: "Heavyweight Tee",
    weight: "240 g/m²",
    finish: "DTG / Sérigraphie",
    price: "dès 29 €",
    note: "Coupe boxy, col renforcé.",
  },
  {
    code: "TR-02",
    name: "Studio Hoodie",
    weight: "400 g/m²",
    finish: "Broderie / DTG",
    price: "dès 59 €",
    note: "Molleton brossé, poche kangourou.",
  },
  {
    code: "TR-03",
    name: "Tote Archive",
    weight: "340 g/m²",
    finish: "Sérigraphie",
    price: "dès 18 €",
    note: "Anses longues, fond renforcé.",
  },
  {
    code: "TR-04",
    name: "Cap Signal",
    weight: "Structurée",
    finish: "Broderie 3D",
    price: "dès 24 €",
    note: "Visette plate, boucle métal.",
  },
];

export const faqItems = [
  {
    q: "Quel format de fichier faut-il envoyer ?",
    a: "PNG transparent ou SVG pour les logos. PDF/AI acceptés pour les compositions. Minimum 300 DPI à la taille réelle d'impression. On te prévient si le fichier est trop léger.",
  },
  {
    q: "Quelle est la quantité minimum ?",
    a: "À partir d'1 pièce en DTG. Sérigraphie dès 20 pièces (meilleur prix unitaire). Broderie dès 10 pièces.",
  },
  {
    q: "Quels sont les délais ?",
    a: "5 à 10 jours ouvrés en atelier après validation du BAT. Express 72 h possible selon charge machine — demande-le au devis.",
  },
  {
    q: "Livrez-vous en France et en Europe ?",
    a: "Oui. France métropolitaine en 48–72 h après expédition. UE en 3–6 jours. On peut aussi dropshipper vers tes clients.",
  },
  {
    q: "Puis-je commander un échantillon ?",
    a: "Oui — échantillon blank ou imprimé à tarif préférentiel. Idéal avant un gros tirage événement ou merch.",
  },
  {
    q: "Les encres sont-elles durables ?",
    a: "Encres à base d'eau certifiées OEKO-TEX. Supports coton bio et blends recyclés disponibles sur toute la gamme studio.",
  },
];

export const footer = {
  tagline: "Textile personnalisé. Impression cinéma.",
  columns: [
    {
      title: "Studio",
      links: [
        { label: "Atelier", href: "#atelier" },
        { label: "Processus", href: "#créer" },
        { label: "Collections", href: "#collections" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "hello@trame.studio", href: "mailto:hello@trame.studio" },
        { label: "+33 4 78 00 00 00", href: "tel:+33478000000" },
        { label: "12 rue de la Pression, Lyon", href: "#atelier" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Behance", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  legal: "© 2026 TRAME Atelier. Tous droits réservés.",
};
