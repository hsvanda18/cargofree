import patioJpg from '../assets/photos/patio-hero.jpg'
import patioWebp from '../assets/photos/patio-hero.webp'
import Plate from './Plate'
import StampMark from './StampMark'
import { IconRoute } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-graphite pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #F6F3EC 0 2px, transparent 2px 84px)',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <h1 className="font-display text-[2.75rem] font-black uppercase leading-[0.96] tracking-tight text-paper sm:text-[3.6rem] lg:text-[4.1rem]">
            Confiança construída na satisfação dos nossos{' '}
            <span className="text-orange">stakeholders</span>.
          </h1>

          <p className="mt-6 max-w-[58ch] font-body text-lg leading-relaxed text-paper/75">
            A CARGO FREE é uma empresa transitária e agente de transporte angolana,
            especializada na coordenação e optimização das operações de transporte e
            logística na importação e exportação de mercadorias diversas.
          </p>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border-2 border-paper/15 bg-graphite-soft/60 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <ManifestPoint code="SAÍDA" label="Estância aduaneira de origem" />
            <IconRoute className="hidden h-8 w-10 shrink-0 text-orange sm:block" stroke="currentColor" />
            <div className="h-px w-full bg-paper/15 sm:hidden" />
            <ManifestPoint code="ENTRADA" label="Estância aduaneira de destino" align="right" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contacto"
              className="group relative inline-flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 animate-stamp-press"
              aria-label="Falar com a CargoFree — ir para contactos"
            >
              <StampMark size={92} label="CARGO FREE · CONTACTAR" seed={3} />
            </a>
            <div className="font-body text-sm text-paper/60">
              <p className="font-semibold text-paper">Fale directamente connosco</p>
              <p>Sem intermediários, sem formulários — só uma chamada.</p>
            </div>
            <a
              href="#servicos"
              className="ml-auto font-mono text-xs font-medium uppercase tracking-[0.2em] text-paper/50 underline decoration-orange/50 decoration-2 underline-offset-4 transition-colors hover:text-orange"
            >
              Ver serviços ↓
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-3 -z-10 rounded-[28px] border-2 border-dashed border-kraft/40" aria-hidden="true" />
          <Plate
            webp={patioWebp}
            jpg={patioJpg}
            alt="Pátio de contentores empilhados junto a uma praça de camiões, ao início da manhã"
            caption="Consolidação e expedição de carga"
            frameClass="shadow-card"
            imgClass="h-[420px] sm:h-[520px]"
            width={1400}
            height={1164}
          />
          <div className="absolute -top-5 -right-3 flex -rotate-3 items-center gap-2 rounded-full border-2 border-orange bg-graphite px-4 py-2.5 shadow-stamp sm:-right-5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-orange" aria-hidden="true" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/85">
              Terrestre · Marítimo · Aéreo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ManifestPoint({ code, label, align = 'left' }) {
  return (
    <div className={align === 'right' ? 'text-left sm:text-right' : 'text-left'}>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-orange">
        {code}
      </p>
      <p className="mt-1 font-body text-sm text-paper/85">{label}</p>
    </div>
  )
}
