import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'headlineLine',
      title: 'Título — parte normal',
      type: 'string',
      description: 'A frase antes da palavra destacada a laranja. Ex.: "Confiança construída na satisfação dos nossos"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineHighlight',
      title: 'Título — palavra destacada (laranja)',
      type: 'string',
      description: 'Ex.: "stakeholders". Aparece a seguir à frase acima, sempre em laranja.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Parágrafo de introdução',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero' }
    },
  },
})
