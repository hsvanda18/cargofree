import type { StructureResolver } from 'sanity/structure'

// The site has exactly one document of each of these types — Hero, Quem
// somos, Serviços, Contactos, Definições — so each gets pinned to a single
// fixed document id instead of the usual "list of documents" view. Clientes
// is the one real collection and keeps the default list.
const SINGLETONS = [
  { id: 'hero', type: 'hero', title: 'Hero' },
  { id: 'about', type: 'about', title: 'Quem somos' },
  { id: 'services', type: 'services', title: 'Serviços' },
  { id: 'contact', type: 'contact', title: 'Contactos' },
  { id: 'siteSettings', type: 'siteSettings', title: 'Definições do site' },
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('CARGO FREE')
    .items([
      ...SINGLETONS.map(({ id, type, title }) =>
        S.listItem()
          .id(id)
          .title(title)
          .child(S.document().schemaType(type).documentId(id)),
      ),
      S.divider(),
      S.listItem()
        .id('client')
        .title('Clientes e parceiros')
        .child(
          S.documentTypeList('client')
            .title('Clientes e parceiros')
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),
    ])

export const SINGLETON_TYPES = new Set(SINGLETONS.map((s) => s.type))
