import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Definições do site',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Frase curta usada no rodapé do site.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Definições do site' }
    },
  },
})
