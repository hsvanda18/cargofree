#!/usr/bin/env node
/**
 * One-time content cutover for the Sanity migration (2026-09-22).
 *
 * Pushes the site's current copy and the 16-logo client roster into the
 * Sanity dataset, so the Studio opens already populated instead of empty.
 * Safe to re-run: every document uses a fixed _id with createOrReplace, so
 * running it twice updates in place rather than duplicating anything.
 *
 * Run this yourself, once, from your own terminal — never hand the token it
 * needs to anyone else, including an AI assistant:
 *
 *   1. sanity.io/manage → the CARGO FREE project → API → Tokens
 *      → Add API token → role "Editor" → copy the token
 *   2. From the repo root:
 *        SANITY_API_TOKEN=sk... node scripts/seed-sanity.mjs
 *
 * The copy below is a plain-Node duplicate of src/content/fallback.js (that
 * file uses Vite's `import x from '*.png'`, which only resolves inside the
 * Vite build — a script run with plain `node` can't use it). This file's
 * job ends once it has run; after that, the Studio is where this content
 * gets edited, and this script is only useful again if the dataset needs
 * to be rebuilt from scratch.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('Falta a variável de ambiente SANITY_API_TOKEN — veja o comentário no topo deste ficheiro.')
  process.exit(1)
}

const client = createClient({
  projectId: 't2t3490q',
  dataset: 'production',
  apiVersion: '2026-09-22',
  token,
  useCdn: false,
})

// ---------------------------------------------------------------- singletons

const HERO = {
  _id: 'hero',
  _type: 'hero',
  headlineLine: 'Confiança construída na satisfação dos nossos',
  headlineHighlight: 'stakeholders',
  intro:
    'A CARGO FREE é uma empresa angolana de serviços logísticos integrados e agente de transporte, especializada na coordenação e optimização das operações de transporte e logística na importação e exportação de mercadorias diversas.',
}

const ABOUT = {
  _id: 'about',
  _type: 'about',
  intro:
    'Empresa angolana de serviços logísticos integrados e agente de transporte, especializada na coordenação e optimização das operações de transporte e logística na importação e exportação de mercadorias diversas.',
  missao:
    'Oferecer a melhor solução de transporte e logística entre a estância aduaneira de saída (país de origem) e a estância aduaneira de entrada (país de destino), com os preços mais ajustados deste mercado, atendimento directo e com a plena empatia.',
  visao: 'Dispor de uma rede de transporte e logística a nível nacional com a mais recente tecnologia.',
  valores:
    'Uma equipa completamente jovem e disruptiva, experiente, que executa as operações com integridade, empenho, disciplina, honestidade e empatia.',
}

const SERVICES = {
  _id: 'services',
  _type: 'services',
  consultoriaTitle: 'Consultoria em importação e exportação de mercadorias',
  consultoriaItems: [
    'Assessoria sobre custos de exportação, transporte, seguros e gestão de mercadorias',
    'Intermediação na negociação com a alfândega',
    'Trâmites dos Documentos de Transporte Internacional',
    'Preparação da cotação',
    'Planeamento da melhor rota — por tipo de mercadoria, segurança, custo e duração',
    'Aconselhamento sobre o modo mais adequado de transporte',
  ],
  transporteTitle: 'Agente de transporte e logística nacional',
}

const CONTACT = {
  _id: 'contact',
  _type: 'contact',
  phone: '+244 976 547 901',
  emailComercial: 'comercial@grupocargofree.com',
  emailGeral: 'geral@grupocargofree.com',
  address: 'Rua 28 de Maio n.° 17, Edifício KENDE — Maianga, Luanda',
}

const SITE_SETTINGS = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  tagline: 'Confiança construída na satisfação dos nossos stakeholders.',
}

// ------------------------------------------------------------- client roster

const CLIENTS = [
  { slug: 'angelec', name: 'Angelec, Lda', file: 'angelec.png', compact: true },
  { slug: 'facul', name: 'Facul Centro Académico Digital', file: 'facul.png', compact: true },
  { slug: 'atc', name: 'Ang Trust Company', file: 'atc.png' },
  { slug: 'ip4u', name: 'IP4U Segurança, Redes e Integração de Sistemas', file: 'ip4u.png', compact: true },
  { slug: 'frotcom', name: 'Frotcom Comunicações Lda', file: 'frotcom.png' },
  { slug: 'buco-zau', name: 'Mineração Buco-Zau, Lda', file: 'buco-zau.png' },
  { slug: 'engevia', name: 'Engevia — Construção Civil e Obras Públicas Lda', file: 'engevia.png' },
  { slug: 'turbotest', name: 'Turbotest Angola, S.A', file: 'turbotest.png' },
  { slug: 'teia', name: 'TEIA — Tecnologias de Informação Angola Lda', file: 'teia.png' },
  { slug: 'engeminas', name: 'Engeminas — Engenharia e Mineração Lda', file: 'engeminas.png' },
  { slug: 'ohuasi', name: 'OHUASI Investment S.G.O.I.C, S.A', file: 'ohuasi.png' },
  { slug: 'zahara', name: 'Zahara Imobiliária', file: 'zahara.png', compact: true },
  { slug: 'admac', name: 'Admac Gráfica, Lda', file: 'admac.png' },
  {
    slug: 'electro-panga',
    name: 'Electro Panga — Comercialização de Material Eléctrico',
    file: 'electro-panga.png',
    compact: true,
  },
  { slug: 'smartec', name: 'Smartec — Engenharia Industrial', file: 'smartec.png' },
  { slug: 'shamlan', name: 'Shamlan Tobacco', file: 'shamlan.png', tone: 'dark', compact: true },
]

async function uploadLogo(file) {
  const filePath = path.join(ROOT, 'src', 'assets', 'clients', file)
  const buffer = readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, { filename: file })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function run() {
  console.log('A criar/actualizar Hero, Quem somos, Serviços, Contactos e Definições…')
  const tx = client.transaction()
  for (const doc of [HERO, ABOUT, SERVICES, CONTACT, SITE_SETTINGS]) {
    tx.createOrReplace(doc)
  }
  await tx.commit()
  console.log('  feito.')

  console.log(`A carregar ${CLIENTS.length} logótipos e a criar os documentos de cliente…`)
  for (const c of CLIENTS) {
    const index = CLIENTS.indexOf(c)
    const logo = await uploadLogo(c.file)
    await client.createOrReplace({
      _id: `client-${c.slug}`,
      _type: 'client',
      name: c.name,
      logo,
      tone: c.tone ?? 'light',
      compact: Boolean(c.compact),
      order: (index + 1) * 10,
    })
    console.log(`  ${c.name}`)
  }

  console.log('\nConcluído. Confirme no Studio: npm run dev, dentro da pasta studio/.')
}

run().catch((err) => {
  console.error('Falhou:', err.message)
  process.exit(1)
})
