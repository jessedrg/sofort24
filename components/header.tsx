import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { SITE_NAME, PHONE_NUMBER, PHONE_RAW, PROFESSIONS } from "@/lib/seo-data"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Vector (3).svg"
              alt={SITE_NAME}
              width={28}
              height={40}
              className="w-7 h-10"
            />
            <span className="font-serif text-xl font-semibold tracking-tight text-primary">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {PROFESSIONS.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={`/${p.id}/zuerich`}
                className="text-sm text-stone-600 hover:text-primary transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            <span className="sm:hidden">Anrufen</span>
          </a>
        </div>
      </div>
    </header>
  )
}
