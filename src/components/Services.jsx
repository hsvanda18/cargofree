import aereaJpg from '../assets/photos/via-aerea.jpg'
import aereaWebp from '../assets/photos/via-aerea.webp'
import maritimaJpg from '../assets/photos/via-maritima.jpg'
import maritimaWebp from '../assets/photos/via-maritima.webp'
import terrestreJpg from '../assets/photos/via-terrestre.jpg'
import terrestreWebp from '../assets/photos/via-terrestre.webp'
import Plate from './Plate'
import { IconCheck, IconPlane, IconShip, IconTruck } from './icons'

const VIAS = [
  {
    caption: 'Via terrestre',
    icon: IconTruck,
    webp: terrestreWebp,
    jpg: terrestreJpg,
    alt: 'Dois camiões de mercadorias em marcha numa auto-estrada',
    width: 1400,
    height: 538,
  },
  {
    caption: 'Via marítima',
    icon: IconShip,
    webp: maritimaWebp,
    jpg: maritimaJpg,
    alt: 'Contentores marítimos empilhados em pátio de terminal',
    width: 1300,
    height: 860,
  },
  {
    caption: 'Via aérea',
    icon: IconPlane,
    webp: aereaWebp,
    jpg: aereaJpg,
    alt: 'Aeronave de carga estacionada em placa ao pôr do sol, com carregador acoplado',
    width: 1400,
    height: 711,
  },
]

export default function Services({ content }) {
  return (
    <section id="servicos" className="bg-graphite py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
          Nossos serviços
        </h2>

        <div className="mt-12 border-t-4 border-paper/20">
          {/* Item 01 — consultoria: six real sub-services */}
          <div className="grid grid-cols-1 gap-6 border-b-4 border-paper/20 py-10 lg:grid-cols-[7rem_1fr] lg:gap-10">
            <span className="font-display text-6xl font-black leading-none text-orange">01</span>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-paper sm:text-3xl">
                {content.consultoriaTitle}
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {content.consultoriaItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-orange text-orange">
                      <IconCheck className="h-3.5 w-3.5" stroke="currentColor" strokeWidth={3} />
                    </span>
                    <span className="font-body text-base leading-snug text-paper/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 02 — one line of copy, carried by evidence plates rather than
              padded out to match 01's checklist */}
          <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[7rem_1fr] lg:gap-10">
            <span className="font-display text-6xl font-black leading-none text-orange">02</span>
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-paper sm:text-3xl">
                {content.transporteTitle}
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {VIAS.map((via) => (
                  <Plate
                    key={via.caption}
                    webp={via.webp}
                    jpg={via.jpg}
                    alt={via.alt}
                    caption={via.caption}
                    icon={via.icon}
                    imgClass="h-48 sm:h-56"
                    width={via.width}
                    height={via.height}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
