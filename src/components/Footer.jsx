import icon from '../assets/cargofree-icon.png'

export default function Footer() {
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
        <p className="font-body text-sm text-graphite/70">
          Confiança construída na satisfação dos nossos stakeholders.
        </p>
      </div>
    </footer>
  )
}
