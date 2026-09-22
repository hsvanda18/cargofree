import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// projectId and dataset are not secrets — the Sanity client ships them in the
// browser bundle by design, the same way every public Sanity tutorial
// hardcodes them. Read access is controlled by the dataset's own visibility
// (public), not by hiding these two identifiers.
export const sanityClient = createClient({
  projectId: 't2t3490q',
  dataset: 'production',
  apiVersion: '2026-09-22',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlForImage(source) {
  return builder.image(source)
}
