"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { coursesData } from "@/data/courses"
import { Target, Clock, Building2 } from "lucide-react"
import { Badge } from "@/shared/components/ui/badge"

export function CoursesRoadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // Ordena os cursos por data (mais antigo primeiro para criar uma timeline)
  const sortedCourses = [...coursesData].sort((a, b) => {
    const dateA = extractDate(a.completedDate)
    const dateB = extractDate(b.completedDate)
    return dateA.getTime() - dateB.getTime()
  })

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      const trackWidth = trackRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      setDistance(Math.max(0, trackWidth - viewportWidth))
    }
    measure()

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const debouncedMeasure = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(measure, 120)
    }

    const ro =
      typeof ResizeObserver !== "undefined" && trackRef.current
        ? new ResizeObserver(debouncedMeasure)
        : null
    if (ro && trackRef.current) ro.observe(trackRef.current)

    window.addEventListener("resize", debouncedMeasure)
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      ro?.disconnect()
      window.removeEventListener("resize", debouncedMeasure)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = sortedCourses.length
    if (total === 0) return
    const clamped = Math.max(0, Math.min(1, latest))
    const index = Math.min(total - 1, Math.round(clamped * (total - 1)))
    setActiveIndex(index)
  })

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="relative z-10 h-[400vh] bg-background"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-background">
        {/* Background decorativo - grid de linhas finas estilo blueprint */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--color-coral-200) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-coral-200) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Elementos decorativos coral */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-coral-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-coral-200 rounded-full opacity-20 blur-2xl" />
        </div>

        {/* Header */}
        <div className="relative mb-8 sm:mb-12 px-6 md:px-24">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Cursos & Certificações
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Formação</span> Especializada
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
            Acompanhe minha trajetória de aprendizado e desenvolvimento profissional ao longo do tempo.
          </p>
        </div>

        <div className="relative">
          {/* Linha horizontal contínua (o trilho do roadmap) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-coral-200 via-coral-300 to-coral-200"
          />

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="relative flex items-center gap-8 sm:gap-12 md:gap-16 pl-[10vw] pr-[10vw] will-change-transform"
          >
            {sortedCourses.map((course, i) => {
              const isTop = i % 2 === 0
              const isActive = i === activeIndex
              const IconComponent = course.icon

              return (
                <div
                  key={course.id}
                  className="relative flex h-[60vh] w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[32vw] shrink-0 flex-col items-center justify-center"
                >
                  {/* Card alternando topo/base */}
                  <div
                    className={[
                      isTop
                        ? "absolute left-0 right-0 top-4 sm:top-0"
                        : "absolute bottom-4 sm:bottom-0 left-0 right-0",
                      "flex flex-col gap-3 rounded-xl border bg-card p-4 sm:p-6 transition-all duration-500 ease-out",
                      isActive
                        ? "border-coral-400 shadow-2xl shadow-coral-500/20 scale-[1.02] sm:scale-[1.04]"
                        : "border-border shadow-sm scale-100 opacity-60",
                    ].join(" ")}
                  >
                    {/* Header do card com ícone */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={[
                          "flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg transition-all duration-500",
                          isActive
                            ? "bg-coral-100 text-coral-600"
                            : "bg-muted text-muted-foreground",
                        ].join(" ")}
                      >
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className={[
                            "text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
                            isActive ? "text-coral-500" : "text-muted-foreground",
                          ].join(" ")}
                        >
                          {extractYear(course.completedDate)}
                        </span>
                        <h3 className="mt-1 text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground leading-tight">
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>

                    {/* Badges de informação */}
                    <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
                      <Badge
                        variant="outline"
                        className={[
                          "text-xs transition-colors duration-300",
                          isActive
                            ? "border-coral-300 text-coral-600 bg-coral-50"
                            : "border-border text-muted-foreground",
                        ].join(" ")}
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </Badge>
                      <Badge
                        className={[
                          "text-xs transition-colors duration-300",
                          isActive
                            ? "bg-coral-100 text-coral-700"
                            : "bg-muted text-muted-foreground",
                        ].join(" ")}
                      >
                        <Building2 className="w-3 h-3 mr-1" />
                        {course.institution}
                      </Badge>
                    </div>
                  </div>

                  {/* Conector vertical do card até o ponto na linha */}
                  <div
                    aria-hidden
                    className={[
                      isTop
                        ? "absolute left-1/2 top-[30%] h-[20%] w-0.5 -translate-x-1/2"
                        : "absolute bottom-[30%] left-1/2 h-[20%] w-0.5 -translate-x-1/2",
                      "transition-colors duration-500",
                      isActive ? "bg-coral-400" : "bg-border",
                    ].join(" ")}
                  />

                  {/* Ponto sobre a linha */}
                  <div
                    aria-hidden
                    className={[
                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-background transition-all duration-500",
                      isActive
                        ? "h-5 w-5 bg-coral-500 shadow-lg shadow-coral-500/50"
                        : "h-3 w-3 bg-coral-300",
                    ].join(" ")}
                  />
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Indicador de progresso */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {sortedCourses.map((_, i) => (
            <div
              key={i}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-coral-500"
                  : "w-1.5 bg-coral-200",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Instrução de scroll */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Role para explorar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-coral-300 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-coral-400" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Função auxiliar para extrair a data de uma string como "Finalizado 12/2021"
function extractDate(dateString: string): Date {
  const match = dateString.match(/(\d{1,2})\/(\d{4})/)
  if (match) {
    const [, month, year] = match
    return new Date(parseInt(year), parseInt(month) - 1)
  }
  // Tenta extrair apenas o ano se o formato for diferente
  const yearMatch = dateString.match(/(\d{4})/)
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1]), 0)
  }
  return new Date()
}

// Função auxiliar para extrair apenas o ano
function extractYear(dateString: string): string {
  const match = dateString.match(/(\d{4})/)
  return match ? match[1] : dateString
}
