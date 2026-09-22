import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client',
  title: 'Cliente / Parceiro',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      description: 'Nome completo tal como aparece por baixo do logótipo (texto acessível da imagem).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logótipo',
      type: 'image',
      description:
        'Use um ficheiro com fundo transparente (PNG) sempre que possível — os cartões do roteiro são brancos (ou grafite, ver abaixo) e um logótipo com fundo próprio aparece como "autocolante" em vez de se integrar no cartão.',
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tone',
      title: 'Cartão',
      type: 'string',
      description:
        'A maioria dos logótipos assenta bem em cartão branco. Escolha "Escuro" apenas se o logótipo for claro/branco e desaparecer sobre fundo branco.',
      options: {
        list: [
          { title: 'Claro (cartão branco) — normal', value: 'light' },
          { title: 'Escuro (cartão grafite) — só para logótipos claros', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'light',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'compact',
      title: 'Logótipo quadrado/alto',
      type: 'boolean',
      description:
        'Active esta opção se o logótipo for mais quadrado ou vertical do que largo (proporção abaixo de ~1.6:1). Sem isto, um logótipo quadrado lê-se visualmente mais pequeno do que os vizinhos largos.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordem',
      type: 'number',
      description: 'Números mais baixos aparecem primeiro no roteiro. Use intervalos (10, 20, 30…) para poder inserir entre dois mais tarde.',
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: 'Ordem do roteiro',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', media: 'logo', subtitle: 'tone' },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: subtitle === 'dark' ? 'cartão escuro' : undefined,
      }
    },
  },
})
