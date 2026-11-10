// Hero "Anel": a foto em que o túnel da sala sensorial emoldura o rosto vira um recorte circular, com anéis
// concêntricos em volta (um deles girando devagar) e os números em "discos" ao redor.
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { site } from "@/data/site"

const delay = (s: number) => ({ animationDelay: `${s}s` })

export function HeroSection() {
  const [anos, pacientes, certificacoes] = site.stats
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

        {/* composição em anéis */}
        <div className="rise relative mx-auto aspect-square w-full max-w-[30rem]" style={delay(0.18)}>
          <svg aria-hidden="true" viewBox="0 0 100 100" className="gira absolute -inset-[7%] size-[114%] text-coral-300">
            <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth=".5" strokeDasharray="1.2 2.4" />
          </svg>
          <div aria-hidden="true" className="absolute inset-0 rounded-full border-[14px] border-coral-200" />
          <div className="absolute inset-[22px] overflow-hidden rounded-full bg-coral-100">
            <Image
              src={site.fotos.anel}
              alt="Rebecca Ariel sorrindo, emoldurada por um túnel em anel numa sala de integração sensorial"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -left-2 size-[34%] overflow-hidden rounded-full border-[6px] border-background shadow-xl sm:-left-6">
            <Image src={site.fotos.sorriso} alt="" fill sizes="170px" className="object-cover" />
          </div>

          {/* números em discos ao redor da foto */}
          <dl className="contents">
            <div className="absolute top-[2%] -left-[4%] grid size-[30%] place-items-center rounded-full bg-ink text-center text-paper shadow-xl sm:-left-[8%]">
              <div className="flex flex-col-reverse items-center px-2">
                <dt className="text-[0.65rem] leading-tight text-paper/80 sm:text-xs">anos como AT</dt>
                <dd className="font-display text-[clamp(1.6rem,1rem+2.4vw,2.6rem)] mb-1 leading-none font-extrabold">{anos.valor}</dd>
              </div>
            </div>
            <div className="absolute -top-[2%] right-[2%] grid size-[26%] place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl">
              <div className="flex flex-col-reverse items-center px-2">
                <dt className="text-[0.65rem] leading-tight text-white/90 sm:text-xs">{pacientes.rotulo}</dt>
                <dd className="font-display text-[clamp(1.4rem,.9rem+2vw,2.2rem)] mb-1 leading-none font-extrabold">{pacientes.valor}</dd>
              </div>
            </div>
            <div className="absolute -right-[3%] bottom-[8%] grid size-[27%] place-items-center rounded-full border-2 border-coral-200 bg-background text-center shadow-xl sm:-right-[7%]">
              <div className="flex flex-col-reverse items-center px-2">
                <dt className="text-[0.65rem] leading-tight text-muted-foreground sm:text-xs">{certificacoes.rotulo}</dt>
                <dd className="font-display text-[clamp(1.4rem,.9rem+2vw,2.2rem)] mb-1 leading-none font-extrabold text-coral-ink">{certificacoes.valor}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
