import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contactos',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'string',
      description:
        'Escreva com espaços, como deve aparecer no site — ex.: "+244 976 547 901". O link para ligar (tel:) é gerado automaticamente a partir deste número, por isso só precisa de escrever aqui, uma vez.',
      validation: (Rule) =>
        Rule.required().regex(/^\+\d[\d\s]+$/, {
          name: 'telefone',
          invert: false,
        }).error('Use o formato internacional, começando por "+", ex.: +244 976 547 901'),
    }),
    defineField({
      name: 'emailComercial',
      title: 'Email — Comercial',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'emailGeral',
      title: 'Email — Geral',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Morada',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contactos' }
    },
  },
})
