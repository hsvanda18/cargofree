import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Serviços',
  type: 'document',
  fields: [
    defineField({
      name: 'consultoriaTitle',
      title: 'Serviço 01 — título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'consultoriaItems',
      title: 'Serviço 01 — lista de itens',
      description: 'Cada linha aparece como um item com um símbolo de visto ao lado.',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'transporteTitle',
      title: 'Serviço 02 — título',
      type: 'string',
      description:
        'O agente de transporte é ilustrado pelas fotografias das três vias (terrestre/marítima/aérea), que continuam fixas no código — aqui só se edita o título.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Serviços' }
    },
  },
})
