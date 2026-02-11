import Link from "next/link"
import { Phone, ArrowRight, Shield, Clock, Award, Star, Zap, Droplets, Key, Flame, Waves } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PROFESSIONS, PHONE_NUMBER, PHONE_RAW, SITE_NAME } from "@/lib/seo-data"

const ICONS: Record<string, typeof Zap> = { Zap, Droplets, Key, Flame, Waves }

const TOP_CITIES = [
  { slug: "zuerich", name: "Zuerich", canton: "ZH" },
  { slug: "bern", name: "Bern", canton: "BE" },
  { slug: "basel", name: "Basel", canton: "BS" },
  { slug: "luzern", name: "Luzern", canton: "LU" },
  { slug: "st-gallen", name: "St. Gallen", canton: "SG" },
  { slug: "winterthur", name: "Winterthur", canton: "ZH" },
  { slug: "aarau", name: "Aarau", canton: "AG" },
  { slug: "zug", name: "Zug", canton: "ZG" },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-28">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-accent tracking-wide uppercase">Handwerker-Notdienst Schweiz</p>
              <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
                Professionelle Hilfe. Sofort.
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
                {SITE_NAME} verbindet Sie mit geprüften Handwerkern in Ihrer Naehe. Rund um die Uhr. Faire Festpreise. Garantie auf alle Arbeiten.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_NUMBER}
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Aktuell verfuegbar - 24/7 Notdienst
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-y border-border/60 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { icon: Shield, label: "Gepruefte Fachkraefte", sub: "Alle zertifiziert" },
                { icon: Clock, label: "In 30 Min. vor Ort", sub: "Schnelle Reaktion" },
                { icon: Award, label: "24 Monate Garantie", sub: "Auf alle Arbeiten" },
                { icon: Star, label: "4.8 / 5 Sterne", sub: "Kundenbewertungen" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <item.icon className="w-5 h-5 text-accent" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Unsere Dienste
            </h2>
            <p className="mt-4 text-muted-foreground">
              Von Elektrik ueber Sanitaer bis zum Schluesseldienst - wir decken alle handwerklichen Notfaelle ab.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONS.map((p) => {
              const Icon = ICONS[p.icon] || Zap
              return (
                <Link
                  key={p.id}
                  href={`/${p.id}/zuerich`}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${p.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    ab CHF {p.priceRange.min}
                  </p>
                  <ArrowRight className="absolute top-8 right-8 w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors" />
                </Link>
              )
            })}
          </div>
        </section>

        {/* CITIES */}
        <section className="bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                Abdeckung in der ganzen Schweiz
              </h2>
              <p className="mt-4 text-muted-foreground">
                Von Zuerich bis Genf - unser Netzwerk umfasst ueber 150 Staedte in allen Kantonen.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TOP_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/elektriker/${city.slug}`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-all"
                >
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">{city.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Kanton {city.canton}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold">
              Brauchen Sie sofort Hilfe?
            </h2>
            <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto">
              Rufen Sie uns an - ein geprüfter Handwerker ist in kuerzester Zeit bei Ihnen. Kostenlose Beratung, transparente Festpreise.
            </p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 mt-8 bg-accent text-accent-foreground px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
