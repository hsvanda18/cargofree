import icon from '../assets/cargofree-icon.png'

export default function Footer({ tagline }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t-4 border-orange bg-paper py-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={icon} alt="" className="h-7 w-auto" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/70">
            © {year} CARGO FREE — Luanda, Angola
          </p>
        </div>
        <p className="font-body text-sm text-graphite/70">{tagline}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/70">
          Created by{' '}
          <a
            href="https://www.instagram.com/hairtonvanda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-graphite underline decoration-orange underline-offset-4 transition-colors hover:text-orange"
          >
            @hairtonvanda
          </a>
        </p>
      </div>
    </footer>
  )
}
