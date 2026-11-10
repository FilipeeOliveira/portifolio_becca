// Faixa de abordagens (dos cursos e da atuação). Repetida 3x por metade para não mostrar o fim do loop em telas largas.
const abordagens = ["ABA", "Modelo Denver", "Comunicação Alternativa", "Intervenção precoce", "Avaliação do desenvolvimento", "Mediação"]
const faixa = [...abordagens, ...abordagens, ...abordagens]

export function ApproachesMarquee() {
  return (
    <div className="overflow-hidden bg-coral-ink py-5 text-white" aria-label="Abordagens">
      <div className="marquee flex w-max">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0 items-center" aria-hidden={copia === 1}>
            {faixa.map((a, i) => (
              <li key={i} className="flex items-center gap-7 pr-7 font-display text-xl font-semibold tracking-tight whitespace-nowrap sm:text-2xl">
                {a}
                <span className="size-4 rounded-full border-[3px] border-white/60" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
