import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { SITE_NAME, SITE_URL, PHONE_NUMBER } from "@/lib/seo-data"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: `${SITE_NAME} | Handwerker Notdienst 24h Schweiz`,
  description: `${SITE_NAME} - Ihr zuverlaessiger Notdienst in der ganzen Schweiz. Elektriker, Sanitaer, Schluesseldienst, Heizung und Rohrreinigung. 24/7 verfuegbar. Festpreise ohne Ueberraschungen.`,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: `${SITE_NAME} - Handwerker Notdienst 24/7 Schweiz`,
    description: "Gepruefte Fachkraefte in maximal 30 Minuten. Festpreise. Garantie auf alle Arbeiten.",
    type: "website",
    locale: "de_CH",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE_NAME,
              description: "Handwerker Notdienst 24/7 in der Schweiz",
              telephone: PHONE_NUMBER,
              priceRange: "CHF CHF",
              openingHours: "Mo-Su 00:00-23:59",
              areaServed: { "@type": "Country", name: "Schweiz" },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
