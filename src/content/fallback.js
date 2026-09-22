/**
 * Fallback content — the exact copy this page shipped with before Sanity.
 *
 * The site renders this immediately on load, then swaps in whatever Sanity
 * returns once the fetch resolves. Two reasons this exists rather than
 * showing a loading state:
 *
 *  1. Resilience: if the Sanity API is unreachable, slow, or the dataset is
 *     ever emptied by mistake, the page still reads correctly instead of
 *     going blank — a business site cannot depend on a third-party API
 *     being up to show its own phone number.
 *  2. It matches this project's own motion rule (see DESIGN.md): the page
 *     must render its real content with nothing else needing to fire first.
 *     A CMS fetch is the same kind of progressive enhancement as an
 *     entrance animation — content must not be gated behind it.
 *
 * Keep this in sync with whatever is actually live in the Sanity dataset
 * when you notice they've drifted; it is a safety net, not the source of
 * truth. The client roster below is a snapshot from the Sanity cutover
 * (2026-09-22, 16 clients) for the same reason — a client added in the
 * Studio afterwards simply won't show up if the API is ever unreachable,
 * which is an acceptable gap; what matters is that the section never goes
 * empty.
 */

import admac from '../assets/clients/admac.png'
import angelec from '../assets/clients/angelec.png'
import atc from '../assets/clients/atc.png'
import bucoZau from '../assets/clients/buco-zau.png'
import engeminas from '../assets/clients/engeminas.png'
import electroPanga from '../assets/clients/electro-panga.png'
import engevia from '../assets/clients/engevia.png'
import facul from '../assets/clients/facul.png'
import frotcom from '../assets/clients/frotcom.png'
import ip4u from '../assets/clients/ip4u.png'
import ohuasi from '../assets/clients/ohuasi.png'
import shamlan from '../assets/clients/shamlan.png'
import smartec from '../assets/clients/smartec.png'
import teia from '../assets/clients/teia.png'
import turbotest from '../assets/clients/turbotest.png'
import zahara from '../assets/clients/zahara.png'

export const FALLBACK_CLIENTS = [
  { name: 'Angelec, Lda', logo: angelec, compact: true },
  { name: 'Facul Centro Académico Digital', logo: facul, compact: true },
  { name: 'Ang Trust Company', logo: atc },
  { name: 'IP4U Segurança, Redes e Integração de Sistemas', logo: ip4u, compact: true },
  { name: 'Frotcom Comunicações Lda', logo: frotcom },
  { name: 'Mineração Buco-Zau, Lda', logo: bucoZau },
  { name: 'Engevia — Construção Civil e Obras Públicas Lda', logo: engevia },
  { name: 'Turbotest Angola, S.A', logo: turbotest },
  { name: 'TEIA — Tecnologias de Informação Angola Lda', logo: teia },
  { name: 'Engeminas — Engenharia e Mineração Lda', logo: engeminas },
  { name: 'OHUASI Investment S.G.O.I.C, S.A', logo: ohuasi },
  { name: 'Zahara Imobiliária', logo: zahara, compact: true },
  { name: 'Admac Gráfica, Lda', logo: admac },
  { name: 'Electro Panga — Comercialização de Material Eléctrico', logo: electroPanga, compact: true },
  { name: 'Smartec — Engenharia Industrial', logo: smartec },
  { name: 'Shamlan Tobacco', logo: shamlan, tone: 'dark', compact: true },
]

export const FALLBACK_CONTENT = {
  hero: {
    headlineLine: 'Confiança construída na satisfação dos nossos',
    headlineHighlight: 'stakeholders',
    intro:
      'A CARGO FREE é uma empresa angolana de serviços logísticos integrados e agente de transporte, especializada na coordenação e optimização das operações de transporte e logística na importação e exportação de mercadorias diversas.',
  },
  about: {
    intro:
      'Empresa angolana de serviços logísticos integrados e agente de transporte, especializada na coordenação e optimização das operações de transporte e logística na importação e exportação de mercadorias diversas.',
    missao:
      'Oferecer a melhor solução de transporte e logística entre a estância aduaneira de saída (país de origem) e a estância aduaneira de entrada (país de destino), com os preços mais ajustados deste mercado, atendimento directo e com a plena empatia.',
    visao: 'Dispor de uma rede de transporte e logística a nível nacional com a mais recente tecnologia.',
    valores:
      'Uma equipa completamente jovem e disruptiva, experiente, que executa as operações com integridade, empenho, disciplina, honestidade e empatia.',
  },
  services: {
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
  },
  contact: {
    phone: '+244 976 547 901',
    emailComercial: 'comercial@grupocargofree.com',
    emailGeral: 'geral@grupocargofree.com',
    address: 'Rua 28 de Maio n.° 17, Edifício KENDE — Maianga, Luanda',
  },
  siteSettings: {
    tagline: 'Confiança construída na satisfação dos nossos stakeholders.',
  },
}
