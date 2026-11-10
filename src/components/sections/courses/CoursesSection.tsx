"use client"

// Padrão do bloco Shadcn Space "services-02" (lista interativa + painel de prévia), com as correções já
// usadas no Kaizen: responde a clique, foco e toque; no celular o detalhe abre no próprio item; o painel
// tem altura estável (todos os cursos empilhados na mesma célula da grade). O anel mostra a carga horária.
import Image from "next/image"
import { useState } from "react"
import { Plus } from "lucide-react"
import { coursesData } from "@/data/courses"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"

const areas: Record<string, string> = {
  terapeutico: "Intervenção terapêutica",
  comunicacao: "Comunicação",
  avaliacao: "Avaliação",
  juridico: "Mediação",
}
const ordem = ["terapeutico", "comunicacao", "avaliacao", "juridico"]
const cursos = [...coursesData].sort((a, b) => ordem.indexOf(a.category) - ordem.indexOf(b.category))
const MAX_HORAS = 100

// Anel de progresso: carga horária em relação a 100h
function AnelHoras({ duracao }: { duracao: string }) {
  const horas = parseInt(duracao, 10) || 0
  const r = 42
  const c = 2 * Math.PI * r
  return (
    <div className="relative grid size-28 shrink-0 place-items-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--color-coral-100)" strokeWidth="10" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="var(--color-coral-500)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${(Math.min(horas, MAX_HORAS) / MAX_HORAS) * c} ${c}`}
        />
      </svg>
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl font-extrabold text-ink">{horas}h</span>
        <span className="mt-1 text-xs text-muted-foreground">de curso</span>
      </span>
    </div>
  )
}

function Detalhe({ curso }: { curso: (typeof cursos)[number] }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <AnelHoras duracao={curso.duration} />
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-semibold text-ink">{curso.institution}</span>
          <span className="text-muted-foreground">{curso.completedDate}</span>
          <span className="mt-1 w-fit rounded-full bg-coral-100 px-3 py-1 text-xs font-medium text-coral-ink">{areas[curso.category]}</span>
        </div>
      </div>
      <p className="leading-relaxed text-muted-foreground">{curso.description}</p>
    </div>
  )
}

export function CoursesSection() {
  const [ativo, setAtivo] = useState(0)

  return (
    <section id="especialidades" className="bg-muted/60 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-5">
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-coral-ink uppercase">
              <span className="size-3.5 rounded-full border-[3px] border-coral-500" aria-hidden="true" />
              Cursos e certificações
            </p>
            <h2 className="text-[clamp(2.2rem,1.4rem+3.2vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.035em] text-balance text-ink">
              Formação <span className="text-coral-ink">especializada</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Cursos que complementam a graduação, com foco em intervenção precoce, comunicação e avaliação do desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <ul className="min-w-0 lg:col-span-7">
            {cursos.map((c, i) => {
              const aberto = ativo === i
              return (
                <li key={c.id} className="border-t border-ink/10 last:border-b">
                  <button
                    type="button"
                    onClick={() => setAtivo(i)}
                    onMouseEnter={() => setAtivo(i)}
                    onFocus={() => setAtivo(i)}
                    aria-expanded={aberto}
                    aria-controls={`curso-${c.id}`}
                    className="group flex w-full cursor-pointer items-center gap-5 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-full border-[3px] font-display text-sm font-bold transition-colors",
                        aberto ? "border-coral-500 bg-coral-500 text-white" : "border-coral-200 text-coral-ink",
                      )}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span
                        className={cn(
                          "font-display text-xl leading-snug font-semibold tracking-tight transition-colors sm:text-2xl",
                          aberto ? "text-ink" : "text-ink/60 group-hover:text-ink",
                        )}
                      >
                        {c.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {c.institution} · {c.duration}
                      </span>
                    </span>
                    <Plus className={cn("size-5 shrink-0 text-muted-foreground transition-transform duration-300 lg:hidden", aberto && "rotate-45 text-coral-ink")} aria-hidden="true" />
                  </button>
                  <div id={`curso-${c.id}`} className={cn("pb-8 sm:pl-16 lg:hidden", !aberto && "hidden")}>
                    <Detalhe curso={c} />
                  </div>
                </li>
              )
            })}
          </ul>

          {/* painel de prévia (desktop): foto em círculo + detalhe; altura estável com todos empilhados */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 flex flex-col gap-7 rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
                  <Image src={site.fotos.argolas} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground">Passe o mouse ou toque em um curso para ver os detalhes.</p>
              </div>
              <div className="grid">
                {cursos.map((c, i) => (
                  <div
                    key={c.id}
                    className={cn(
                      "col-start-1 row-start-1 flex flex-col gap-5 transition-opacity duration-300",
                      ativo === i ? "visible opacity-100" : "invisible opacity-0",
                    )}
                  >
                    <h3 className="text-2xl leading-snug font-bold tracking-tight text-balance text-ink">{c.title}</h3>
                    <Detalhe curso={c} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
