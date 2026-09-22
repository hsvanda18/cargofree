import terrenoJpg from '../assets/photos/operacao-terreno.jpg'
import terrenoWebp from '../assets/photos/operacao-terreno.webp'
import armazemJpg from '../assets/photos/armazem.jpg'
import armazemWebp from '../assets/photos/armazem.webp'
import Plate from './Plate'
import { IconDocument, IconTruck } from './icons'

export default function About({ content }) {
  const rows = [
    { field: 'Missão', text: content.missao },
    { field: 'Visão', text: content.visao },
    { field: 'Valores', text: content.valores },
  ]

  return (
    <section id="quem-somos" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-graphite sm:text-5xl">
              Quem somos
            </h2>
            <p className="mt-6 max-w-[46ch] font-body text-lg leading-relaxed text-graphite/75">
              {content.intro}
            </p>
          </div>

          <dl className="border-t-4 border-graphite">
            {rows.map((row) => (
              <div
                key={row.field}
                className="grid grid-cols-1 gap-2 border-b-4 border-graphite py-7 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-8"
              >
                <dt className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-orange-ink">
                  {row.field}
                </dt>
                <dd className="max-w-[62ch] font-body text-base leading-relaxed text-graphite/85 sm:text-lg">
                  {row.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The valores row above claims a team that executes; these two frames
            are that claim's evidence — the only people on the page. */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2">
          <Plate
            webp={terrenoWebp}
            jpg={terrenoJpg}
            alt="Técnica de logística com colete reflector CARGO FREE e capacete, segurando uma prancheta"
            caption="Conferência de carga · equipamento de protecção"
            icon={IconDocument}
            tone="light"
            imgClass="h-72 object-top sm:h-[380px]"
            width={1200}
            height={699}
            loading="lazy"
          />
          <Plate
            webp={armazemWebp}
            jpg={armazemJpg}
            alt="Operadora de empilhadora ao volante, num armazém de mercadorias"
            caption="Movimentação e consolidação em armazém"
            icon={IconTruck}
            tone="light"
            imgClass="h-72 sm:h-[380px]"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
