import Link from "next/link"
import {
  Phone, Shield, Clock, CheckCircle2, MapPin, ArrowRight,
  Zap, Droplets, Key, Flame, Waves, Award, Star,
} from "lucide-react"
import {
  PROFESSIONS, PROBLEMS, PHONE_NUMBER, PHONE_RAW, SITE_NAME,
  getCityDisplayName, getCityCanton, getNearbyCities,
} from "@/lib/seo-data"

const ICONS: Record<string, typeof Zap> = { Zap, Droplets, Key, Flame, Waves }

interface ServicePageProps {
  professionId: string
  citySlug: string
  aiContent?: {
    intro: string
    localContext: string
    serviceDetails: string
    expertGuide: string
    pricing: string
    faq: Array<{ question: string; answer: string }>
  } | null
}

export function ServicePage({ professionId, citySlug, aiContent }: ServicePageProps) {
  const profession = PROFESSIONS.find((p) => p.id === professionId) || PROFESSIONS[0]
  const cityName = getCityDisplayName(citySlug)
  const canton = getCityCanton(citySlug)
  const problems = PROBLEMS[profession.id] || []
  const urgentProblems = problems.filter((p) => p.urgent)
  const nearbyCities = getNearbyCities(citySlug, 6)
  const otherProfessions = PROFESSIONS.filter((p) => p.id !== professionId)
  const IconComponent = ICONS[profession.icon] || Zap

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-gradient-to-b from-primary/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Startseite</Link>
              <span>/</span>
              <Link href={`/${profession.id}/zuerich`} className="hover:text-foreground transition-colors">{profession.name}</Link>
              <span>/</span>
              <span className="text-foreground">{cityName}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              {profession.name} in {cityName}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {profession.description} in {cityName} und Umgebung, Kanton {canton}. Wir sind in maximal 30 Minuten bei Ihnen. Festpreise ohne Ueberraschungen.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen - {PHONE_NUMBER}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Aktuell verfuegbar
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Max. Anfahrt", value: "30 Min" },
                { label: "Garantie", value: "24 Monate" },
                { label: "Kostenvoranschlag", value: "Gratis" },
                { label: "Verfuegbar", value: "24/7" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent" /> Gepruefte Fachkraefte</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-accent" /> Festpreis-Garantie</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> 24/7 Notdienst</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-accent" /> 4.8/5 Bewertung</span>
          </div>
        </div>
      </section>

      {/* ============ URGENT PROBLEMS ============ */}
      {urgentProblems.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Haeufige Notfaelle in {cityName}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Diese Probleme erfordern sofortige Aufmerksamkeit. Rufen Sie uns an und ein {profession.name} ist schnellstmoeglich bei Ihnen.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className={`group p-6 rounded-xl border transition-all ${
                  problem.urgent
                    ? "border-red-200 bg-red-50/50 hover:border-red-300"
                    : "border-border hover:border-border/80 bg-card"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">{problem.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                  {problem.urgent && (
                    <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                      Dringend
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============ AI INTRO CONTENT ============ */}
      {aiContent?.intro && (
        <section className="bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                {profession.name} in {cityName} - Ihr lokaler Partner
              </h2>
              <div className="mt-8 prose prose-stone prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: aiContent.intro.replace(/\n/g, "<br/>") }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ LOCAL CONTEXT ============ */}
      {aiContent?.localContext && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Unser Service in {cityName}, Kanton {canton}
              </h2>
            </div>
            <div className="prose prose-stone prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: aiContent.localContext.replace(/\n/g, "<br/>") }} />
            </div>
          </div>
        </section>
      )}

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="font-serif text-3xl font-semibold text-center">So funktioniert unser Service</h2>
          <p className="mt-3 text-center text-primary-foreground/70 max-w-xl mx-auto">
            In vier einfachen Schritten zu Ihrem {profession.name} in {cityName}.
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Anrufen", desc: `Rufen Sie uns an unter ${PHONE_NUMBER} und schildern Sie Ihr Problem.` },
              { step: "02", title: "Beratung", desc: "Sie erhalten sofort eine Einschaetzung und einen Festpreis-Kostenvoranschlag." },
              { step: "03", title: "Einsatz", desc: `Ein geprüfter ${profession.name} ist in maximal 30 Minuten bei Ihnen in ${cityName}.` },
              { step: "04", title: "Erledigt", desc: "Das Problem wird professionell geloest. Sie erhalten eine Garantie auf alle Arbeiten." },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-sm font-mono text-primary-foreground/40">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE DETAILS / EXPERT GUIDE ============ */}
      {aiContent?.serviceDetails && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Unsere {profession.name}-Leistungen im Detail
            </h2>
            <div className="mt-8 prose prose-stone prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: aiContent.serviceDetails.replace(/\n/g, "<br/>") }} />
            </div>
          </div>
        </section>
      )}

      {aiContent?.expertGuide && (
        <section className="bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">Ratgeber</span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground">
                Experten-Ratgeber: {profession.name} in {cityName}
              </h2>
              <div className="mt-8 prose prose-stone prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: aiContent.expertGuide.replace(/\n/g, "<br/>") }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ PRICING ============ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Preise fuer {profession.name} in {cityName}
          </h2>
          <p className="mt-3 text-muted-foreground">
            Transparente Festpreise ohne versteckte Kosten. Alle Preise verstehen sich inklusive Anfahrt in {cityName} und Mehrwertsteuer.
          </p>

          {aiContent?.pricing ? (
            <div className="mt-8 prose prose-stone prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: aiContent.pricing.replace(/\n/g, "<br/>") }} />
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="text-foreground">Anfahrt und Diagnose</span>
                <span className="font-medium text-foreground">CHF {profession.priceRange.min}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="text-foreground">Standard-Reparatur</span>
                <span className="font-medium text-foreground">ab CHF {profession.priceRange.min + 50}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="text-foreground">Komplexe Reparatur</span>
                <span className="font-medium text-foreground">ab CHF {profession.priceRange.max - 100}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="text-foreground">Nachtzuschlag (22-06 Uhr)</span>
                <span className="font-medium text-foreground">+50%</span>
              </div>
            </div>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            Alle Preise sind Richtwerte. Sie erhalten vor Arbeitsbeginn immer einen verbindlichen Festpreis-Kostenvoranschlag.
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Haeufig gestellte Fragen
            </h2>
            <div className="mt-10 space-y-6">
              {(aiContent?.faq || [
                { question: `Wie schnell ist ein ${profession.name} bei mir in ${cityName}?`, answer: `In der Regel sind wir innerhalb von 30 Minuten bei Ihnen in ${cityName}. Bei hoher Nachfrage kann es etwas laenger dauern, aber wir informieren Sie transparent ueber die voraussichtliche Ankunftszeit.` },
                { question: "Gibt es versteckte Kosten?", answer: "Nein. Sie erhalten vor Arbeitsbeginn einen verbindlichen Festpreis-Kostenvoranschlag. Erst wenn Sie diesen akzeptieren, beginnen wir mit der Arbeit. Keine Ueberraschungen." },
                { question: "Welche Garantie bieten Sie?", answer: "Auf alle unsere Arbeiten gewaehren wir eine Garantie von 24 Monaten. Sollte innerhalb dieser Zeit ein Problem mit unserer Reparatur auftreten, beheben wir es kostenlos." },
                { question: `Arbeiten Sie auch am Wochenende in ${cityName}?`, answer: `Ja, unser Notdienst ist 365 Tage im Jahr verfuegbar, auch an Wochenenden und Feiertagen. Fuer Einsaetze ausserhalb der regulaeren Arbeitszeiten faellt ein Zuschlag an, der im Kostenvoranschlag transparent ausgewiesen wird.` },
                { question: "Sind Ihre Handwerker qualifiziert?", answer: "Alle unsere Fachkraefte verfuegen ueber eine abgeschlossene Berufsausbildung und werden regelmaessig weitergebildet. Sie sind versichert und arbeiten nach den geltenden Schweizer Normen und Vorschriften." },
              ]).map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-4 text-foreground font-medium hover:text-accent transition-colors">
                    {faq.question}
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="pb-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEARBY CITIES ============ */}
      {nearbyCities.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            {profession.name} in der Naehe
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Wir sind auch in diesen Staedten im Kanton {canton} fuer Sie da.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {nearbyCities.map((slug) => (
              <Link
                key={slug}
                href={`/${profession.id}/${slug}`}
                className="text-center py-3 px-4 rounded-lg border border-border bg-card text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {getCityDisplayName(slug)}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ============ OTHER SERVICES ============ */}
      <section className="bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Weitere Dienste in {cityName}
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProfessions.map((p) => {
              const Icon = ICONS[p.icon] || Zap
              return (
                <Link
                  key={p.id}
                  href={`/${p.id}/${citySlug}`}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">24/7 Notdienst</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">
            {profession.name} in {cityName} gesucht?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto">
            Rufen Sie jetzt an und ein geprüfter {profession.name} ist in kuerzester Zeit bei Ihnen. Festpreis-Garantie und 24 Monate Gewaehrleistung.
          </p>
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-2 mt-8 bg-accent text-accent-foreground px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {PHONE_NUMBER}
          </a>
          <p className="mt-4 text-sm text-primary-foreground/50">
            Kostenlose Beratung. Kein Risiko. Festpreis vor Arbeitsbeginn.
          </p>
        </div>
      </section>
    </>
  )
}
