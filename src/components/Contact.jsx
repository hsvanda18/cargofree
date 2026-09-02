import StampMark from './StampMark'
import { IconMail, IconPhone, IconPin, IconWhatsapp } from './icons'

const SIGNATORIES = [
  {
    name: 'António Lucas',
    role: 'Director Geral',
    phone: '+244 941 303 935',
    tel: '+244941303935',
    wa: '244941303935',
    email: 'antonio.lucas@grupocargofree.com',
  },
  {
    name: 'Edilson Pires',
    role: 'Director de Negociações',
    phone: '+244 943 805 410',
    tel: '+244943805410',
    wa: '244943805410',
    email: 'edilson.pires@grupocargofree.com',
  },
]

export default function Contact() {
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
          Sem formulário, sem espera — fale directamente com quem decide.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t-4 border-paper/20 pt-12 md:grid-cols-2">
          {SIGNATORIES.map((s) => (
            <div key={s.name} className="rounded-2xl border-2 border-paper/15 bg-graphite-soft/60 p-7">
              <p className="font-display text-3xl font-bold text-paper">{s.name}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-orange">{s.role}</p>

              <div className="mt-6 flex flex-col gap-3 font-body text-sm">
                <a href={`tel:${s.tel}`} className="flex items-center gap-3 text-paper/85 transition-colors hover:text-orange">
                  <IconPhone className="h-5 w-5 shrink-0" stroke="currentColor" />
                  {s.phone}
                </a>
                <a
                  href={`https://wa.me/${s.wa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-paper/85 transition-colors hover:text-orange"
                >
                  <IconWhatsapp className="h-5 w-5 shrink-0" stroke="currentColor" />
                  WhatsApp
                </a>
                <a href={`mailto:${s.email}`} className="flex items-center gap-3 break-all text-paper/85 transition-colors hover:text-orange">
                  <IconMail className="h-5 w-5 shrink-0" stroke="currentColor" />
                  {s.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t-4 border-paper/20 pt-8 text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <IconPin className="h-5 w-5 shrink-0 text-orange" stroke="currentColor" />
            <p className="font-body text-sm">
              Rua 28 de Maio n.° 17, Edifício KENDE — Maianga, Luanda
            </p>
          </div>
          <a href="mailto:geral@grupocargofree.com" className="flex items-center gap-3 font-body text-sm transition-colors hover:text-orange">
            <IconMail className="h-5 w-5 shrink-0 text-orange" stroke="currentColor" />
            geral@grupocargofree.com
          </a>
        </div>
      </div>
    </section>
  )
}
