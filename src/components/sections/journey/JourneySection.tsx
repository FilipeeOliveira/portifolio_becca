// Trajetória agrupada por ano (experiência e formação juntas, do mais recente ao mais antigo), com anéis como
// marcadores; no desktop a foto do balanço acompanha a rolagem. Fecha com as competências (sem porcentagens).
import Image from "next/image"
import { MapPin } from "lucide-react"
import { timelineData } from "@/data/timeline"
import { educationData } from "@/data/education"
import { skillsData } from "@/data/skills"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"

type Item = {
  id: string
  tipo: "experiencia" | "formacao"
  periodo: string
  titulo: string
  instituicao: string
  local: string
  descricao: string
  destaques: string[]
}

// "02/2024 - Atualmente" -> { ano: 2024, chave: 202402 } ; "2022 - Atualmente" -> { ano: 2022, chave: 202201 }
const inicio = (periodo: string) => {
  const primeiro = periodo.split(" ")[0]
  const [mes, ano] = primeiro.includes("/") ? primeiro.split("/") : ["01", primeiro]
  return { ano: Number(ano), chave: Number(ano) * 100 + Number(mes) }
}

const itens: Item[] = [
  ...timelineData.map((t) => ({ id: t.id, tipo: "experiencia" as const, periodo: t.period, titulo: t.title, instituicao: t.company, local: t.location, descricao: t.description, destaques: t.highlights })),
  ...educationData.map((e) => ({ id: e.id, tipo: "formacao" as const, periodo: e.period, titulo: e.title, instituicao: e.company, local: e.location, descricao: e.description, destaques: e.highlights })),
].sort((a, b) => inicio(b.periodo).chave - inicio(a.periodo).chave)

const porAno = itens.reduce<{ ano: number; itens: Item[] }[]>((grupos, item) => {
  const { ano } = inicio(item.periodo)
  const g = grupos.find((x) => x.ano === ano)
  if (g) g.itens.push(item)
  else grupos.push({ ano, itens: [item] })
  return grupos
}, [])

export function JourneySection() {
  return (
    <section id="curriculo" className="py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="reveal flex max-w-2xl flex-col gap-5">
          <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-coral-ink uppercase">
            <span className="size-3.5 rounded-full border-[3px] border-coral-500" aria-hidden="true" />
            Trajetória
          </p>
          <h2 className="text-[clamp(2.2rem,1.4rem+3.2vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.035em] text-balance text-ink">
            Experiência e <span className="text-coral-ink">formação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma trajetória profissional focada na transformação de vidas, onde o conhecimento técnico é aplicado para promover a autonomia
            e a participação em cada etapa do desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div className="reveal hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] rounded-tl-full bg-coral-100">
                <Image
                  src={site.fotos.balanco}
                  alt="Rebecca Ariel sentada num balanço terapêutico, sorrindo, com argolas de empilhar ao lado"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <ol className="flex min-w-0 flex-col gap-12">
            {porAno.map((grupo) => (
              <li key={grupo.ano} className="flex flex-col gap-5">
                <h3 className="reveal flex items-center gap-4 font-display text-5xl font-extrabold tracking-[-0.04em] text-coral-300 sm:text-6xl">
                  {grupo.ano}
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </h3>
                <ul className="flex flex-col gap-4">
                  {grupo.itens.map((item) => (
                    <li key={item.id} className="reveal flex gap-4 sm:gap-5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-1.5 size-5 shrink-0 rounded-full border-[4px]",
                          item.tipo === "formacao" ? "border-ink/70" : "border-coral-500",
                        )}
                      />
                      <article className="flex min-w-0 flex-1 flex-col gap-2.5 rounded-3xl border border-border bg-card p-6 sm:p-7">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className={cn("font-semibold", item.tipo === "formacao" ? "text-ink" : "text-coral-ink")}>
                            {item.tipo === "formacao" ? "Formação" : "Experiência"}
                          </span>
                          <span className="text-muted-foreground">{item.periodo}</span>
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight text-ink">{item.titulo}</h4>
                        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className="font-semibold text-ink">{item.instituicao}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3.5" aria-hidden="true" />
                            {item.local}
                          </span>
                        </p>
                        <p className="leading-relaxed text-muted-foreground">{item.descricao}</p>
                        <ul className="flex flex-wrap gap-2 pt-1">
                          {item.destaques.map((d) => (
                            <li key={d} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-ink">
                              {d}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="reveal text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Competências <span className="text-coral-ink">desenvolvidas</span>
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {Object.entries(skillsData).map(([grupo, habilidades], i) => (
              <div
                key={grupo}
                className={cn(
                  "reveal flex flex-col gap-5 rounded-[2rem] p-7",
                  i === 0 ? "bg-coral-ink text-white" : i === 1 ? "bg-ink text-paper" : "border border-border bg-card text-ink",
                )}
              >
                <h4 className="text-xl font-bold tracking-tight">{grupo}</h4>
                <ul className="flex flex-wrap gap-2">
                  {habilidades.map((h) => (
                    <li
                      key={h.name}
                      className={cn("rounded-full px-3.5 py-1.5 text-sm font-medium", i === 2 ? "bg-muted" : "bg-white/12 ring-1 ring-white/20")}
                    >
                      {h.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
