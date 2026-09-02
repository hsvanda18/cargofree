import angelec from '../assets/clients/angelec.png'
import atc from '../assets/clients/atc.png'
import bucoZau from '../assets/clients/buco-zau.png'
import engeminas from '../assets/clients/engeminas.png'
import engevia from '../assets/clients/engevia.png'
import facul from '../assets/clients/facul.png'
import frotcom from '../assets/clients/frotcom.png'
import ip4u from '../assets/clients/ip4u.png'
import ohuasi from '../assets/clients/ohuasi.png'
import teia from '../assets/clients/teia.png'
import turbotest from '../assets/clients/turbotest.png'
import zahara from '../assets/clients/zahara.png'
import remotaJpg from '../assets/photos/operacao-remota.jpg'
import remotaWebp from '../assets/photos/operacao-remota.webp'
import Plate from './Plate'
import { IconCheck, IconRoute } from './icons'

const CLIENTS = [
  { name: 'Angelec, Lda', logo: angelec },
  { name: 'Facul Centro Académico Digital', logo: facul },
  { name: 'Ang Trust Company', logo: atc },
  { name: 'IP4U Segurança, Redes e Integração de Sistemas', logo: ip4u },
  { name: 'Frotcom Comunicações Lda', logo: frotcom },
  { name: 'Mineração Buco-Zau, Lda', logo: bucoZau },
  { name: 'Engevia — Construção Civil e Obras Públicas Lda', logo: engevia },
  { name: 'Turbotest Angola, S.A', logo: turbotest },
  { name: 'TEIA — Tecnologias de Informação Angola Lda', logo: teia },
  { name: 'Engeminas — Engenharia e Mineração Lda', logo: engeminas },
  { name: 'OHUASI Investment S.G.O.I.C, S.A', logo: ohuasi },
  { name: 'Zahara Imobiliária', logo: zahara },
]

// deterministic gentle tilt per card — a hand-stamped roster, not a grid
const TILTS = [-1.4, 1.1, -0.6, 1.6, -1.1, 0.7, -1.7, 1.2, -0.8, 1.4, -1.2, 0.9]

export default function Clients() {
  return (
    <section id="clientes" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-graphite sm:text-5xl">
            Clientes e parceiros
          </h2>
          <p className="max-w-[36ch] font-mono text-xs uppercase tracking-[0.2em] text-graphite/70">
            Roteiro de carga aprovado — 12 empresas angolanas
          </p>
        </div>

        <Plate
          webp={remotaWebp}
          jpg={remotaJpg}
          alt="Aeronave de carga e maquinaria pesada numa pista junto a uma mina a céu aberto"
          caption="Carga para operações remotas · sector mineiro e industrial"
          icon={IconRoute}
          tone="light"
          frameClass="mt-12"
          imgClass="h-56 sm:h-72"
          width={1024}
          height={650}
          loading="lazy"
        />

        <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((client, i) => (
            <li
              key={client.name}
              className="group relative flex h-32 items-center justify-center rounded-2xl border-2 border-graphite/10 bg-white p-5 shadow-[0_10px_24px_-16px_rgb(28_31_30_/_0.35)] transition-[border-color,box-shadow] hover:border-orange/50 hover:shadow-[0_14px_30px_-16px_rgb(234_107_72_/_0.45)]"
              style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
            >
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-graphite bg-orange text-graphite">
                <IconCheck className="h-3.5 w-3.5" stroke="currentColor" strokeWidth={3.2} />
              </span>
              <img src={client.logo} alt={client.name} className="max-h-16 max-w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
