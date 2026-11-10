// Missão e valores: foto em cápsula (o formato das almofadas da sala) + frase de destaque + valores em anéis numerados
import Image from "next/image"
import { missao, valores } from "@/data/values"
import { site } from "@/data/site"

export function MissionSection() {
  return (
    <section id="sobre-mim" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-full bg-coral-100">
            <Image
              src={site.fotos.livro}
              alt="Rebecca Ariel sentada no tapete, sorrindo, segurando o livro “Autismo: compreender e agir em família”"
              fill
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden="true" className="absolute -right-4 -bottom-4 -z-10 size-40 rounded-full border-[18px] border-coral-200" />
        </div>

        <div className="flex min-w-0 flex-col gap-10">
          <div className="reveal flex flex-col gap-5">
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-coral-ink uppercase">
              <span className="size-3.5 rounded-full border-[3px] border-coral-500" aria-hidden="true" />
              Missão e valores
            </p>
            <h2 className="text-[clamp(2.2rem,1.4rem+3.2vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.035em] text-balance text-ink">
              O cuidado terapêutico é um <span className="text-coral-ink">direito</span>, e precisa ser acessível a todos.
            </h2>
            <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">{missao}</p>
          </div>

          <ol className="flex flex-col">
            {valores.map((v, i) => (
              <li key={v.titulo} className="reveal flex items-start gap-5 border-t border-border py-6 last:border-b">
                <span
                  className="grid size-14 shrink-0 place-items-center rounded-full border-[3px] border-coral-300 font-display text-lg font-bold text-coral-ink"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
                    <v.icon className="size-5 text-coral-500" aria-hidden="true" />
                    {v.titulo}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{v.descricao}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
