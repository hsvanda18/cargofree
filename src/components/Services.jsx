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
    alt: 'Camião de mercadorias CargoFree em estrada de corredor',
    width: 512,
    height: 338,
  },
  {
    caption: 'Via marítima',
    icon: IconShip,
    webp: maritimaWebp,
    jpg: maritimaJpg,
    alt: 'Contentores empilhados em pátio portuário',
    width: 1200,
    height: 751,
  },
  {
    caption: 'Via aérea',
    icon: IconPlane,
    webp: aereaWebp,
    jpg: aereaJpg,
    alt: 'Aeronave de carga CargoFree em placa, com paletes a serem carregadas',
    width: 1024,
    height: 696,
  },
]

const CONSULTORIA_ITEMS = [
  'Assessoria sobre custos de exportação, transporte, seguros e gestão de mercadorias',
  'Intermediação na negociação com a alfândega',
  'Trâmites dos Documentos de Transporte Internacional',
  'Preparação da cotação',
  'Planeamento da melhor rota — por tipo de mercadoria, segurança, custo e duração',
  'Aconselhamento sobre o modo mais adequado de transporte',
]

export default function Services() {
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
                Consultoria em importação e exportação de mercadorias
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {CONSULTORIA_ITEMS.map((item) => (
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
                Agente de transporte e logística nacional
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
                    imgClass="h-44"
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
