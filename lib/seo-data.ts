export const PHONE_NUMBER = "+41 61 505 01 29"
export const PHONE_RAW = "+41615050129"
export const SITE_NAME = "Sofort24"
export const SITE_DOMAIN = "sofort-24.com"
export const SITE_URL = "https://sofort-24.com"

export const PROFESSIONS = [
  {
    id: "elektriker",
    name: "Elektriker",
    namePlural: "Elektriker",
    icon: "Zap",
    color: "#2563eb",
    description: "Zertifizierte Elektriker rund um die Uhr verfuegbar",
    metaDescription: "Elektriker Notdienst 24h. Wir sind in 30 Minuten bei Ihnen. Professioneller Service mit Garantie.",
    urgentProblems: ["stromausfall", "kurzschluss", "brandgeruch", "fi-schalter"],
    priceRange: { min: 120, max: 350, currency: "CHF" },
  },
  {
    id: "sanitaer",
    name: "Sanitaer",
    namePlural: "Sanitaer-Installateure",
    icon: "Droplets",
    color: "#0891b2",
    description: "Professionelle Sanitaer-Installateure fuer Notfaelle",
    metaDescription: "Sanitaer Notdienst 24h. Rohrbruch, Verstopfung, Wasserleck. Schnelle Hilfe mit Garantie.",
    urgentProblems: ["wasserleck", "rohrbruch", "verstopfung", "ueberschwemmung"],
    priceRange: { min: 150, max: 400, currency: "CHF" },
  },
  {
    id: "schluesseldienst",
    name: "Schluesseldienst",
    namePlural: "Schluesseldienste",
    icon: "Key",
    color: "#7c3aed",
    description: "Zuverlaessiger Schluesseldienst ohne Schaeden",
    metaDescription: "Schluesseldienst 24h. Tueroeffnung ohne Beschaedigung. Faire Festpreise.",
    urgentProblems: ["ausgesperrt", "schloss-defekt", "schluessel-abgebrochen", "einbruchschutz"],
    priceRange: { min: 150, max: 350, currency: "CHF" },
  },
  {
    id: "heizung",
    name: "Heizungstechniker",
    namePlural: "Heizungstechniker",
    icon: "Flame",
    color: "#dc2626",
    description: "Heizungs-Notdienst fuer alle Marken und Systeme",
    metaDescription: "Heizung Notdienst 24h. Alle Marken. Schnelle Reparatur mit Garantie.",
    urgentProblems: ["heizung-ausfall", "kein-warmwasser", "gasleck", "heizung-geraeusche"],
    priceRange: { min: 180, max: 500, currency: "CHF" },
  },
  {
    id: "rohrreinigung",
    name: "Rohrreinigung",
    namePlural: "Rohrreiniger",
    icon: "Waves",
    color: "#059669",
    description: "Professionelle Rohrreinigung und Kanalreinigung",
    metaDescription: "Rohrreinigung 24h. WC verstopft, Abfluss verstopft. Kamera-Inspektion verfuegbar.",
    urgentProblems: ["wc-verstopft", "abfluss-verstopft", "kanalverstopfung", "geruchsbelaestigung"],
    priceRange: { min: 200, max: 600, currency: "CHF" },
  },
]

export const PROBLEMS: Record<string, Array<{ id: string; name: string; description: string; urgent: boolean }>> = {
  elektriker: [
    { id: "stromausfall", name: "Stromausfall", description: "Kein Strom im Haus oder in der Wohnung", urgent: true },
    { id: "kurzschluss", name: "Kurzschluss", description: "Sicherung loest wiederholt aus", urgent: true },
    { id: "brandgeruch", name: "Brandgeruch", description: "Verbrannter Geruch aus Steckdose oder Leitung", urgent: true },
    { id: "fi-schalter", name: "FI-Schalter loest aus", description: "Der Fehlerstromschutzschalter springt raus", urgent: true },
    { id: "steckdose-defekt", name: "Steckdose defekt", description: "Steckdose funktioniert nicht oder gibt Funken", urgent: false },
    { id: "licht-flackert", name: "Licht flackert", description: "Lampen flackern oder dimmen sich", urgent: false },
  ],
  sanitaer: [
    { id: "wasserleck", name: "Wasserleck", description: "Wasser tritt aus Leitung oder Anschluss aus", urgent: true },
    { id: "rohrbruch", name: "Rohrbruch", description: "Wasserrohr gebrochen oder geplatzt", urgent: true },
    { id: "verstopfung", name: "Verstopfung", description: "Abfluss oder WC verstopft", urgent: true },
    { id: "ueberschwemmung", name: "Ueberschwemmung", description: "Wasser steht in Raeumen", urgent: true },
    { id: "kein-warmwasser", name: "Kein Warmwasser", description: "Warmwasser funktioniert nicht", urgent: false },
    { id: "tropfender-hahn", name: "Tropfender Hahn", description: "Wasserhahn tropft oder leckt", urgent: false },
  ],
  schluesseldienst: [
    { id: "ausgesperrt", name: "Ausgesperrt", description: "Schluessel vergessen, Tuer zugefallen", urgent: true },
    { id: "schloss-defekt", name: "Schloss defekt", description: "Schloss klemmt oder ist kaputt", urgent: true },
    { id: "schluessel-abgebrochen", name: "Schluessel abgebrochen", description: "Schluessel im Schloss abgebrochen", urgent: true },
    { id: "einbruchschutz", name: "Einbruchschutz", description: "Sicherheitsschloss oder Zusatzsicherung", urgent: false },
  ],
  heizung: [
    { id: "heizung-ausfall", name: "Heizungsausfall", description: "Heizung funktioniert nicht mehr", urgent: true },
    { id: "kein-warmwasser", name: "Kein Warmwasser", description: "Boiler oder Durchlauferhitzer defekt", urgent: true },
    { id: "gasleck", name: "Gasleck", description: "Gasgeruch in der Wohnung", urgent: true },
    { id: "heizung-geraeusche", name: "Heizung macht Geraeusche", description: "Klopfen, Pfeifen oder Gluckern in der Heizung", urgent: false },
  ],
  rohrreinigung: [
    { id: "wc-verstopft", name: "WC verstopft", description: "Toilette verstopft oder laeuft nicht ab", urgent: true },
    { id: "abfluss-verstopft", name: "Abfluss verstopft", description: "Waschbecken oder Dusche laeuft nicht ab", urgent: true },
    { id: "kanalverstopfung", name: "Kanalverstopfung", description: "Hauptkanal oder Grundleitung verstopft", urgent: true },
    { id: "geruchsbelaestigung", name: "Geruchsbelaestigung", description: "Unangenehme Gerueche aus dem Abfluss", urgent: false },
  ],
}

export const CITIES_SWITZERLAND: Record<string, string[]> = {
  "Zuerich": [
    "zuerich", "winterthur", "uster", "duebendorf", "dietikon", "wetzikon",
    "waedenswil", "buelach", "horgen", "adliswil", "kloten", "opfikon",
    "illnau-effretikon", "volketswil", "kuesnacht", "thalwil", "wallisellen",
    "regensdorf", "schlieren", "staefa", "maennedorf", "meilen", "rueschlikon",
    "zollikon", "erlenbach", "uitikon", "oberrieden",
  ],
  "Bern": [
    "bern", "biel-bienne", "thun", "koeniz", "burgdorf", "langenthal",
    "spiez", "muensingen", "interlaken", "ittigen", "muri-bei-bern",
    "ostermundigen", "belp", "lyss", "steffisburg", "worb", "zollikofen",
    "muenchenbuchsee", "herzogenbuchsee",
  ],
  "Basel": [
    "basel", "allschwil", "reinach-bl", "muttenz", "binningen", "liestal",
    "pratteln", "birsfelden", "muenchenstein", "oberwil-bl", "arlesheim",
    "laufen", "sissach", "gelterkinden",
  ],
  "Luzern": [
    "luzern", "emmen", "kriens", "horw", "ebikon", "sursee", "meggen",
    "rothenburg", "root", "adligenswil", "buchrain",
  ],
  "St. Gallen": [
    "st-gallen", "rapperswil-jona", "gossau-sg", "wil-sg", "buchs-sg",
    "uzwil", "rorschach", "alstaetten", "heerbrugg", "goldach",
  ],
  "Aargau": [
    "aarau", "baden", "wettingen", "brugg", "lenzburg", "rheinfelden",
    "zofingen", "wohlen-ag", "windisch", "spreitenbach", "oftringen",
    "obersiggenthal", "muri-ag",
  ],
  "Zug": [
    "zug", "baar", "cham", "steinhausen", "rotkreuz", "huenenberg",
  ],
  "Solothurn": [
    "solothurn", "olten", "grenchen", "zuchwil", "derendingen",
  ],
  "Thurgau": [
    "frauenfeld", "kreuzlingen", "weinfelden", "amriswil", "arbon",
    "romanshorn",
  ],
  "Schwyz": [
    "schwyz", "freienbach", "einsiedeln", "kuessnacht-sz", "wollerau",
  ],
  "Graubuenden": [
    "chur", "davos", "st-moritz", "landquart", "ilanz", "thusis",
  ],
  "Wallis": [
    "sion", "brig", "visp", "martigny", "sierre", "naters", "monthey",
  ],
  "Freiburg": [
    "freiburg-fr", "bulle", "murten",
  ],
  "Schaffhausen": [
    "schaffhausen", "neuhausen",
  ],
  "Appenzell": [
    "herisau", "appenzell",
  ],
}

const CITY_DISPLAY_NAMES: Record<string, string> = {
  "zuerich": "Zuerich",
  "winterthur": "Winterthur",
  "uster": "Uster",
  "duebendorf": "Duebendorf",
  "dietikon": "Dietikon",
  "wetzikon": "Wetzikon",
  "waedenswil": "Waedenswil",
  "buelach": "Buelach",
  "horgen": "Horgen",
  "adliswil": "Adliswil",
  "kloten": "Kloten",
  "opfikon": "Opfikon",
  "illnau-effretikon": "Illnau-Effretikon",
  "volketswil": "Volketswil",
  "kuesnacht": "Kuesnacht",
  "thalwil": "Thalwil",
  "wallisellen": "Wallisellen",
  "regensdorf": "Regensdorf",
  "schlieren": "Schlieren",
  "staefa": "Staefa",
  "maennedorf": "Maennedorf",
  "meilen": "Meilen",
  "rueschlikon": "Rueschlikon",
  "zollikon": "Zollikon",
  "erlenbach": "Erlenbach",
  "uitikon": "Uitikon",
  "oberrieden": "Oberrieden",
  "bern": "Bern",
  "biel-bienne": "Biel/Bienne",
  "thun": "Thun",
  "koeniz": "Koeniz",
  "burgdorf": "Burgdorf",
  "langenthal": "Langenthal",
  "spiez": "Spiez",
  "muensingen": "Muensingen",
  "interlaken": "Interlaken",
  "ittigen": "Ittigen",
  "muri-bei-bern": "Muri bei Bern",
  "ostermundigen": "Ostermundigen",
  "belp": "Belp",
  "lyss": "Lyss",
  "steffisburg": "Steffisburg",
  "worb": "Worb",
  "zollikofen": "Zollikofen",
  "muenchenbuchsee": "Muenchenbuchsee",
  "herzogenbuchsee": "Herzogenbuchsee",
  "basel": "Basel",
  "allschwil": "Allschwil",
  "reinach-bl": "Reinach BL",
  "muttenz": "Muttenz",
  "binningen": "Binningen",
  "liestal": "Liestal",
  "pratteln": "Pratteln",
  "birsfelden": "Birsfelden",
  "muenchenstein": "Muenchenstein",
  "oberwil-bl": "Oberwil BL",
  "arlesheim": "Arlesheim",
  "laufen": "Laufen",
  "sissach": "Sissach",
  "gelterkinden": "Gelterkinden",
  "luzern": "Luzern",
  "emmen": "Emmen",
  "kriens": "Kriens",
  "horw": "Horw",
  "ebikon": "Ebikon",
  "sursee": "Sursee",
  "meggen": "Meggen",
  "rothenburg": "Rothenburg",
  "root": "Root",
  "adligenswil": "Adligenswil",
  "buchrain": "Buchrain",
  "st-gallen": "St. Gallen",
  "rapperswil-jona": "Rapperswil-Jona",
  "gossau-sg": "Gossau SG",
  "wil-sg": "Wil SG",
  "buchs-sg": "Buchs SG",
  "uzwil": "Uzwil",
  "rorschach": "Rorschach",
  "alstaetten": "Alstaetten",
  "heerbrugg": "Heerbrugg",
  "goldach": "Goldach",
  "aarau": "Aarau",
  "baden": "Baden",
  "wettingen": "Wettingen",
  "brugg": "Brugg",
  "lenzburg": "Lenzburg",
  "rheinfelden": "Rheinfelden",
  "zofingen": "Zofingen",
  "wohlen-ag": "Wohlen AG",
  "windisch": "Windisch",
  "spreitenbach": "Spreitenbach",
  "oftringen": "Oftringen",
  "obersiggenthal": "Obersiggenthal",
  "muri-ag": "Muri AG",
  "zug": "Zug",
  "baar": "Baar",
  "cham": "Cham",
  "steinhausen": "Steinhausen",
  "rotkreuz": "Rotkreuz",
  "huenenberg": "Huenenberg",
  "solothurn": "Solothurn",
  "olten": "Olten",
  "grenchen": "Grenchen",
  "zuchwil": "Zuchwil",
  "derendingen": "Derendingen",
  "frauenfeld": "Frauenfeld",
  "kreuzlingen": "Kreuzlingen",
  "weinfelden": "Weinfelden",
  "amriswil": "Amriswil",
  "arbon": "Arbon",
  "romanshorn": "Romanshorn",
  "schwyz": "Schwyz",
  "freienbach": "Freienbach",
  "einsiedeln": "Einsiedeln",
  "kuessnacht-sz": "Kuessnacht SZ",
  "wollerau": "Wollerau",
  "chur": "Chur",
  "davos": "Davos",
  "st-moritz": "St. Moritz",
  "landquart": "Landquart",
  "ilanz": "Ilanz",
  "thusis": "Thusis",
  "sion": "Sion",
  "brig": "Brig",
  "visp": "Visp",
  "martigny": "Martigny",
  "sierre": "Sierre",
  "naters": "Naters",
  "monthey": "Monthey",
  "freiburg-fr": "Freiburg",
  "bulle": "Bulle",
  "murten": "Murten",
  "schaffhausen": "Schaffhausen",
  "neuhausen": "Neuhausen am Rheinfall",
  "herisau": "Herisau",
  "appenzell": "Appenzell",
}

export function getCityDisplayName(slug: string): string {
  return CITY_DISPLAY_NAMES[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

export function getCityCanton(slug: string): string {
  for (const [canton, cities] of Object.entries(CITIES_SWITZERLAND)) {
    if (cities.includes(slug)) return canton
  }
  return ""
}

export function getNearbyCities(slug: string, limit = 6): string[] {
  const canton = getCityCanton(slug)
  if (!canton) return []
  const cities = CITIES_SWITZERLAND[canton] || []
  return cities.filter(c => c !== slug).slice(0, limit)
}

export function getAllCities(): string[] {
  return Object.values(CITIES_SWITZERLAND).flat()
}

export function getAllCantons(): string[] {
  return Object.keys(CITIES_SWITZERLAND)
}
