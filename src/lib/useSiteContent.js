import { useEffect, useState } from 'react'
import { sanityClient, urlForImage } from './sanity'
import { FALLBACK_CLIENTS, FALLBACK_CONTENT } from '../content/fallback'

// One combined query — five singletons plus the ordered client list — so the
// page needs exactly one round trip, not one per section.
const QUERY = /* groq */ `{
  "hero": *[_type == "hero" && _id == "hero"][0],
  "about": *[_type == "about" && _id == "about"][0],
  "services": *[_type == "services" && _id == "services"][0],
  "contact": *[_type == "contact" && _id == "contact"][0],
  "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0],
  "clients": *[_type == "client"] | order(order asc) {
    name,
    "logo": logo,
    tone,
    compact
  }
}`

/**
 * Fetches all editable site content from Sanity once on mount. Starts from
 * — and on any failure, stays on — FALLBACK_CONTENT, so the page always
 * renders correctly even before the request resolves or if it never does.
 * See src/content/fallback.js for why that matters here.
 */
export function useSiteContent() {
  const [content, setContent] = useState({
    ...FALLBACK_CONTENT,
    clients: FALLBACK_CLIENTS,
  })

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch(QUERY)
      .then((data) => {
        if (cancelled) return
        setContent((prev) => ({
          hero: data.hero ?? prev.hero,
          about: data.about ?? prev.about,
          services: data.services ?? prev.services,
          contact: data.contact ?? prev.contact,
          siteSettings: data.siteSettings ?? prev.siteSettings,
          clients:
            data.clients && data.clients.length > 0
              ? data.clients.map((c) => ({
                  name: c.name,
                  logo: urlForImage(c.logo).width(400).fit('max').auto('format').url(),
                  tone: c.tone,
                  compact: c.compact,
                }))
              : prev.clients,
        }))
      })
      .catch((err) => {
        // Sanity unreachable, CORS not configured yet, dataset empty — any
        // of these leave the fallback content in place rather than throwing.
        console.error('Não foi possível carregar o conteúdo do Sanity; a usar o conteúdo de reserva.', err)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return content
}
