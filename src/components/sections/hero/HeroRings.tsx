"use client"

// Composição em anéis do hero com profundidade na rolagem (motion): cada camada se move numa velocidade.
// Seguro sem JavaScript: a posição inicial é a do HTML (os valores só mudam conforme o scroll),
// e quem pede movimento reduzido vê tudo parado.
import Image from "next/image"
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { site } from "@/data/site"

const ATE = 700 // px de rolagem em que o efeito acontece (o hero já saiu da tela)

// deslocamento vertical (ou giro) de uma camada ao longo da rolagem
function useCamada(scrollY: MotionValue<number>, ate: number, reduzido: boolean | null) {
  return useTransform(scrollY, [0, ATE], [0, reduzido ? 0 : ate])
}

export function HeroRings() {
  const [anos, pacientes, certificacoes] = site.stats
  const reduzido = useReducedMotion()
  const { scrollY } = useScroll()
  const foto = useCamada(scrollY, 50, reduzido)
  const anel = useCamada(scrollY, -20, reduzido)
  const giro = useCamada(scrollY, 45, reduzido)
  const pequena = useCamada(scrollY, -110, reduzido)
  const discoAnos = useCamada(scrollY, -150, reduzido)
  const discoPacientes = useCamada(scrollY, -70, reduzido)
  const discoCertificacoes = useCamada(scrollY, -120, reduzido)

  return (
    <LazyMotion features={domAnimation}>
      <m.div aria-hidden="true" style={{ y: anel, rotate: giro }} className="absolute -inset-[7%]">
        <svg viewBox="0 0 100 100" className="gira size-full text-coral-300">
          <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth=".5" strokeDasharray="1.2 2.4" />
        </svg>
      </m.div>

      <m.div style={{ y: foto }} className="absolute inset-0">
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
      </m.div>

      <m.div
        style={{ y: pequena }}
        className="absolute -bottom-4 -left-2 size-[34%] overflow-hidden rounded-full border-[6px] border-background shadow-xl sm:-left-6"
      >
        <Image src={site.fotos.sorriso} alt="" fill sizes="170px" className="object-cover" />
      </m.div>

      {/* números em discos ao redor da foto */}
      <dl className="contents">
        <m.div
          style={{ y: discoAnos }}
          className="absolute top-[2%] -left-[4%] grid size-[30%] place-items-center rounded-full bg-ink text-center text-paper shadow-xl sm:-left-[8%]"
        >
          <div className="flex flex-col-reverse items-center px-2">
            <dt className="text-[0.65rem] leading-tight text-paper/80 sm:text-xs">anos como AT</dt>
            <dd className="mb-1 font-display text-[clamp(1.6rem,1rem+2.4vw,2.6rem)] leading-none font-extrabold">{anos.valor}</dd>
          </div>
        </m.div>
        <m.div
          style={{ y: discoPacientes }}
          className="absolute -top-[2%] right-[2%] grid size-[26%] place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl"
        >
          <div className="flex flex-col-reverse items-center px-2">
            <dt className="text-[0.65rem] leading-tight text-white/90 sm:text-xs">{pacientes.rotulo}</dt>
            <dd className="mb-1 font-display text-[clamp(1.4rem,.9rem+2vw,2.2rem)] leading-none font-extrabold">{pacientes.valor}</dd>
          </div>
        </m.div>
        <m.div
          style={{ y: discoCertificacoes }}
          className="absolute -right-[3%] bottom-[8%] grid size-[27%] place-items-center rounded-full border-2 border-coral-200 bg-background text-center shadow-xl sm:-right-[7%]"
        >
          <div className="flex flex-col-reverse items-center px-2">
            <dt className="text-[0.65rem] leading-tight text-muted-foreground sm:text-xs">{certificacoes.rotulo}</dt>
            <dd className="mb-1 font-display text-[clamp(1.4rem,.9rem+2vw,2.2rem)] leading-none font-extrabold text-coral-ink">
              {certificacoes.valor}
            </dd>
          </div>
        </m.div>
      </dl>
    </LazyMotion>
  )
}
