import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePage } from "@/components/service-page"
import { PROFESSIONS, getCityDisplayName, getCityCanton, getAllCities, SITE_NAME, SITE_URL } from "@/lib/seo-data"

export const dynamicParams = true
export const revalidate = 604800

const VALID_PROFESSIONS = PROFESSIONS.map((p) => p.id)

interface PageProps {
  params: Promise<{ profession: string; city: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { profession: professionId, city: citySlug } = await params

  if (!VALID_PROFESSIONS.includes(professionId)) return {}

  const profession = PROFESSIONS.find((p) => p.id === professionId)
  if (!profession) return {}

  const cityName = getCityDisplayName(citySlug)
  const canton = getCityCanton(citySlug)
  const title = `${profession.name} in ${cityName} | Notdienst 24h | ${SITE_NAME}`
  const description = `${profession.name} Notdienst in ${cityName}, Kanton ${canton}. 24/7 verfuegbar. In 30 Minuten bei Ihnen. Festpreise ohne Ueberraschungen. Jetzt anrufen.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_CH",
      siteName: SITE_NAME,
      url: `${SITE_URL}/${professionId}/${citySlug}`,
    },
    alternates: {
      canonical: `${SITE_URL}/${professionId}/${citySlug}`,
    },
  }
}

export default async function CityServicePage({ params }: PageProps) {
  const { profession: professionId, city: citySlug } = await params

  if (!VALID_PROFESSIONS.includes(professionId)) {
    notFound()
  }

  const allCities = getAllCities()
  if (!allCities.includes(citySlug)) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <ServicePage professionId={professionId} citySlug={citySlug} />
      </main>
      <Footer />
    </>
  )
}
