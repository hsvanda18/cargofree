const ROWS = [
  {
    field: 'Missão',
    text: 'Oferecer a melhor solução de transporte e logística entre a estância aduaneira de saída (país de origem) e a estância aduaneira de entrada (país de destino), com os preços mais ajustados deste mercado, atendimento directo e com a plena empatia.',
  },
  {
    field: 'Visão',
    text: 'Dispor de uma rede de transporte e logística a nível nacional com a mais recente tecnologia.',
  },
  {
    field: 'Valores',
    text: 'Uma equipa completamente jovem e disruptiva, experiente, que executa as operações com integridade, empenho, disciplina, honestidade e empatia.',
  },
]

export default function About() {
  return (
    <section id="quem-somos" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-graphite sm:text-5xl">
              Quem somos
            </h2>
            <p className="mt-6 max-w-[46ch] font-body text-lg leading-relaxed text-graphite/75">
              Transitária e agente de transporte angolana especializada na
              coordenação e optimização das operações de transporte e
              logística na importação e exportação de mercadorias diversas.
            </p>
          </div>

          <dl className="border-t-4 border-graphite">
            {ROWS.map((row) => (
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
      </div>
    </section>
  )
}
