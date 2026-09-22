import StampMark from './StampMark'
import { IconMail, IconPhone, IconPin } from './icons'

export default function Contact({ content }) {
  // The Studio only asks for one phone field, in display format ("+244 976
  // 547 901") — the tel: link is derived here instead of also being typed
  // in Sanity, so the two can never drift apart the way an earlier build's
  // two hand-typed copies of a phone number once did.
  const telHref = `tel:${content.phone.replace(/[^\d+]/g, '')}`

  const emails = [
    { field: 'Comercial', address: content.emailComercial },
    { field: 'Geral', address: content.emailGeral },
  ]

  return (
    <section id="contacto" className="relative overflow-hidden bg-graphite py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-16 top-10 opacity-[0.07] sm:-right-4" aria-hidden="true">
        <StampMark size={340} seed={11} label="CARGO FREE · CONFIANÇA" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl">
          Contactos
        </h2>
        <p className="mt-4 max-w-[52ch] font-body text-lg text-paper/70">
          Sem formulário, sem espera — uma chamada ou um email directo.
        </p>

        <div className="mt-12 border-t-4 border-paper/20">
          {/* the call is the page's conversion, so it gets display scale and the
              whole row as its target */}
          <a
            href={telHref}
            className="group flex flex-col gap-6 border-b-4 border-paper/20 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10"
          >
            <span className="block">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-orange">
                Telefone
              </span>
              <span className="mt-3 block font-display text-[2.75rem] font-black leading-none tracking-tight text-paper transition-colors group-hover:text-orange sm:text-6xl">
                {content.phone}
              </span>
            </span>
            <span className="flex w-fit shrink-0 items-center gap-2.5 rounded-full border-2 border-orange bg-orange/10 px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-paper transition-colors group-hover:bg-orange group-hover:text-graphite">
              <IconPhone className="h-4 w-4" stroke="currentColor" />
              Ligar agora
            </span>
          </a>

          <div className="grid grid-cols-1 border-b-4 border-paper/20 sm:grid-cols-2">
            {emails.map((e, i) => (
              <div
                key={e.field}
                className={`py-7 sm:py-8 ${i === 0 ? 'border-b-2 border-paper/15 sm:border-b-0 sm:border-r-2 sm:pr-8' : 'sm:pl-8'}`}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-orange">
                  {e.field}
                </p>
                <a
                  href={`mailto:${e.address}`}
                  className="mt-3 flex items-center gap-3 font-body text-base text-paper/85 transition-colors hover:text-orange sm:text-lg"
                >
                  <IconMail className="h-5 w-5 shrink-0 text-orange" stroke="currentColor" />
                  <span className="break-all">{e.address}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="py-7 sm:py-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              Morada
            </p>
            <p className="mt-3 flex items-start gap-3 font-body text-base text-paper/85 sm:text-lg">
              <IconPin className="h-5 w-5 shrink-0 text-orange" stroke="currentColor" />
              {content.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
