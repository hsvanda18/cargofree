# CARGO FREE — Studio

A interface de edição de conteúdo do site, feita com [Sanity Studio](https://www.sanity.io/).
É um projecto separado do site (pasta irmã, sem dependências partilhadas) — o
site lê o conteúdo publicado aqui através da API pública do Sanity.

## O que se edita aqui

- **Hero** — título e parágrafo de introdução
- **Quem somos** — introdução, Missão, Visão, Valores
- **Serviços** — título e lista de itens da consultoria; título do agente de transporte
- **Contactos** — telefone, os dois emails, morada
- **Definições do site** — a tagline do rodapé
- **Clientes e parceiros** — a lista completa: nome, logótipo, ordem, e se o
  cartão deve ser claro ou escuro

Fotografia (hero, serviços, quem somos) **não** é editável aqui — continua a
viver em `src/assets/photos/` no repositório do site, com o tratamento de cor
e recorte feito pelos scripts Python do projecto. Ver PRODUCT.md na raiz do
repositório para a razão.

## Primeira utilização

```bash
npm install
npx sanity login    # abre o browser — inicie sessão com a sua conta Sanity
npm run dev          # abre o Studio em http://localhost:3333
```

Da primeira vez que o Studio abrir, os documentos de conteúdo estarão vazios
a menos que o script de arranque já tenha corrido — ver `scripts/seed-sanity.mjs`
na raiz do repositório.

## Publicar o Studio online

Para que outra pessoa (ex.: um director da empresa) possa editar sem instalar
nada, publique o Studio num endereço próprio, gratuito, do tipo
`cargofree.sanity.studio`:

```bash
npm run deploy
```

Da primeira vez pergunta o nome do endereço; das seguintes actualiza o mesmo.

## Depois de editar

As alterações publicadas no Studio ficam visíveis no site ao fim de alguns
segundos — o site vai buscar o conteúdo ao Sanity a cada carregamento de
página, sem necessidade de reconstruir ou publicar o site novamente.
