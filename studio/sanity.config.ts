import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure, SINGLETON_TYPES } from './structure'

export default defineConfig({
  name: 'default',
  title: 'CARGO FREE',

  projectId: 't2t3490q',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    // singletons (Hero, Quem somos, Serviços, Contactos, Definições) have
    // exactly one document each, fixed in structure.ts — hide them from the
    // "+ Create new" menu so nobody accidentally creates a second one
    templates: (templates) => templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },

  document: {
    // and hide the duplicate/delete actions on those same singletons
    actions: (input, context) =>
      SINGLETON_TYPES.has(context.schemaType)
        ? input.filter(({ action }) => action && !['duplicate', 'delete'].includes(action))
        : input,
  },
})
