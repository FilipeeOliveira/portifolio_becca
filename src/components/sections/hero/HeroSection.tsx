// Hero "Anel": texto à esquerda e, à direita, a composição em anéis (HeroRings, com profundidade na rolagem).
import { ArrowDown } from "lucide-react"
import { site } from "@/data/site"
import { HeroRings } from "./HeroRings"

const delay = (s: number) => ({ animationDelay: `${s}s` })

export function HeroSection() {
  return (
    <section id="sobre" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <div className="flex min-w-0 flex-col items-start gap-7">
          <p className="rise flex items-center gap-3 text-sm font-medium text-muted-foreground" style={delay(0.05)}>
            <span className="size-4 rounded-full border-[3px] border-coral-500" aria-hidden="true" />
            {site.papel} · {site.cidade}
          </p>

          <h1
            className="rise text-[clamp(3.6rem,1.8rem+8vw,8rem)] leading-[0.88] font-extrabold tracking-[-0.03em] text-ink"
            style={delay(0.12)}
          >
            Rebecca
            <br />
            <span className="text-coral-ink">Ariel</span>
          </h1>

          <p className="rise max-w-[34ch] font-display text-[clamp(1.3rem,1.05rem+1vw,1.75rem)] leading-snug font-medium text-ink" style={delay(0.2)}>
            Dedicada aos princípios de <span className="marca">autonomia</span>, <span className="marca">independência</span>,{" "}
            <span className="marca">funcionalidade</span> e <span className="marca">participação social</span>.
          </p>

          <p className="rise max-w-[56ch] leading-relaxed text-muted-foreground sm:text-lg" style={delay(0.26)}>
            O cuidado terapêutico é um direito. Com 2 anos de experiência prática como Assistente Terapêutica (AT) nos modelos ABA e
            DENVER, meu objetivo é garantir que, como futura Terapeuta Ocupacional, minha atuação proporcione uma terapia acessível e
            transformadora a todos.
          </p>

          <div className="rise flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={delay(0.32)}>
            <a
              href="#contato"
              className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground shadow-lg shadow-coral-500/25 transition-colors hover:bg-coral-ink"
            >
              Vamos conversar
            </a>
            <a
              href="#curriculo"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border-2 border-ink/10 px-8 font-semibold text-ink transition-colors hover:border-coral-300 hover:bg-coral-50"
            >
              Conheça minha trajetória
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* composição em anéis (com profundidade na rolagem) */}
        <div className="rise relative mx-auto aspect-square w-full max-w-[30rem]" style={delay(0.18)}>
          <HeroRings />
        </div>
      </div>
    </section>
  )
}
