import lockup from '../assets/cargofree-lockup.png'
import { IconPhone } from './icons'

const LINKS = [
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clientes', label: 'Clientes e parceiros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-orange bg-graphite/95 backdrop-blur supports-[backdrop-filter]:bg-graphite/85">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-3 sm:px-10">
        <a href="#top" className="shrink-0" aria-label="CARGO FREE — página inicial">
          <img src={lockup} alt="CARGO FREE" className="h-12 w-auto sm:h-14" />
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm font-semibold uppercase tracking-wide text-paper/80 md:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-orange">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+244941303935"
          className="flex shrink-0 items-center gap-2 rounded-full border-2 border-orange bg-orange/10 px-4 py-2 font-mono text-xs font-medium text-paper transition-colors hover:bg-orange hover:text-graphite sm:text-sm"
        >
          <IconPhone className="h-4 w-4" stroke="currentColor" />
          <span className="hidden sm:inline">+244 941 303 935</span>
          <span className="sm:hidden">Ligar</span>
        </a>
      </div>
    </header>
  )
}
