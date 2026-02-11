import Link from "next/link"
import { SITE_NAME, PHONE_NUMBER, PHONE_RAW, PROFESSIONS, SITE_URL } from "@/lib/seo-data"

const TOP_CITIES = [
  { slug: "zuerich", name: "Zuerich" },
  { slug: "bern", name: "Bern" },
  { slug: "basel", name: "Basel" },
  { slug: "luzern", name: "Luzern" },
  { slug: "st-gallen", name: "St. Gallen" },
  { slug: "winterthur", name: "Winterthur" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif text-2xl font-semibold">{SITE_NAME}</span>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Ihr zuverlaessiger Handwerker-Notdienst in der ganzen Schweiz. Gepruefte Fachkraefte, faire Festpreise und Garantie auf alle Arbeiten.
            </p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-block mt-6 text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Unsere Dienste
            </h3>
            <ul className="space-y-3">
              {PROFESSIONS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/${p.id}/zuerich`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              Staedte
            </h3>
            <ul className="space-y-3">
              {TOP_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/elektriker/${c.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
