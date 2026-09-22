import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Quem somos',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Parágrafo de introdução',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'missao',
      title: 'Missão',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visao',
      title: 'Visão',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'valores',
      title: 'Valores',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Quem somos' }
    },
  },
})
