import type { MetadataRoute } from "next"
import { PROFESSIONS, getAllCities, SITE_URL } from "@/lib/seo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const cities = getAllCities()
  const urls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ]

  for (const profession of PROFESSIONS) {
    for (const city of cities) {
      urls.push({
        url: `${SITE_URL}/${profession.id}/${city}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  }

  return urls
}
