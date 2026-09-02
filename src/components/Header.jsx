import { useEffect, useState } from 'react'
import lockup from '../assets/cargofree-lockup.png'
import { IconPhone } from './icons'

const LINKS = [
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clientes', label: 'Clientes e parceiros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 border-b-4 border-orange ${
        open
          ? 'bg-graphite'
          : 'bg-graphite/95 backdrop-blur supports-[backdrop-filter]:bg-graphite/85'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3 sm:gap-6 sm:px-10">
        <a href="#top" className="shrink-0" aria-label="CARGO FREE — página inicial" onClick={() => setOpen(false)}>
          <img src={lockup} alt="CARGO FREE" className="h-12 w-auto sm:h-14" />
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm font-semibold uppercase tracking-wide text-paper/80 md:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-orange">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="tel:+244941303935"
            className="flex shrink-0 items-center gap-2 rounded-full border-2 border-orange bg-orange/10 px-3 py-2 font-mono text-xs font-medium text-paper transition-colors hover:bg-orange hover:text-graphite sm:px-4 sm:text-sm"
            aria-label="Ligar para +244 941 303 935"
          >
            <IconPhone className="h-4 w-4" stroke="currentColor" />
            <span className="hidden sm:inline">+244 941 303 935</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-paper/25 bg-graphite-soft text-paper transition-colors hover:border-orange hover:text-orange md:hidden"
          >
            <MenuGlyph open={open} />
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        className={`${open ? 'block animate-menu-drop' : 'hidden'} border-t-2 border-paper/15 bg-graphite md:hidden`}
      >
        <nav aria-label="Navegação principal (telemóvel)">
          <ul>
            {LINKS.map((l, i) => (
              <li key={l.href} className="border-b-2 border-paper/10 last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 px-6 py-4 transition-colors hover:bg-graphite-soft"
                >
                  <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-2xl font-black uppercase leading-none tracking-tight text-paper">
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

// hamburger that folds into a cross — thick bars, no hairlines
function MenuGlyph({ open }) {
  const bar = 'absolute h-[3px] w-5 rounded-full bg-current transition-transform duration-200'
  return (
    <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden="true">
      <span className={`${bar} ${open ? 'rotate-45' : '-translate-y-1.5'}`} />
      <span className={`${bar} ${open ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`} />
      <span className={`${bar} ${open ? '-rotate-45' : 'translate-y-1.5'}`} />
    </span>
  )
}
