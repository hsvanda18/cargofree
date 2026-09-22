import corredorJpg from '../assets/photos/corredor.jpg'
import corredorWebp from '../assets/photos/corredor.webp'
import Plate from './Plate'
import { IconCheck, IconRoute } from './icons'

// deterministic gentle tilt per card — a hand-stamped roster, not a grid.
// Cycles past 16 entries so it still reads fine as the roster grows.
const TILTS = [
  -1.4, 1.1, -0.6, 1.6, -1.1, 0.7, -1.7, 1.2,
  -0.8, 1.4, -1.2, 0.9, 1.5, -1.3, 0.6, -1.5,
]

export default function Clients({ clients }) {
  return (
    <section id="clientes" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-graphite sm:text-5xl">
            Clientes e parceiros
          </h2>
          <p className="max-w-[36ch] font-mono text-xs uppercase tracking-[0.2em] text-graphite/70">
            Roteiro de carga aprovado — {clients.length} empresas
          </p>
        </div>

        <Plate
          webp={corredorWebp}
          jpg={corredorJpg}
          alt="Rasto de luzes de trânsito numa estrada em curva, ao anoitecer"
          caption="Corredor rodoviário · trânsito ao anoitecer"
          icon={IconRoute}
          tone="light"
          frameClass="mt-12"
          imgClass="h-52 sm:h-72"
          width={1800}
          height={360}
          loading="lazy"
        />

        <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, i) => (
            <li
              key={client.name}
              className={`group relative flex h-32 items-center justify-center rounded-2xl border-2 p-5 shadow-[0_10px_24px_-16px_rgb(28_31_30_/_0.35)] transition-[border-color,box-shadow] hover:border-orange/50 hover:shadow-[0_14px_30px_-16px_rgb(234_107_72_/_0.45)] ${
                client.tone === 'dark' ? 'border-graphite/25 bg-graphite' : 'border-graphite/10 bg-white'
              }`}
              style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
            >
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-graphite bg-orange text-graphite">
                <IconCheck className="h-3.5 w-3.5" stroke="currentColor" strokeWidth={3.2} />
              </span>
              <img
                src={client.logo}
                alt={client.name}
                className={`max-w-full object-contain ${client.compact ? 'max-h-20' : 'max-h-16'}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
