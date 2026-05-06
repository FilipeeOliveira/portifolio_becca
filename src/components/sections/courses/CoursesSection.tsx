"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { Target } from "lucide-react"
import { coursesData } from "@/data/courses"

export function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
    }
    measure()

    let tid: ReturnType<typeof setTimeout> | null = null
    const debounced = () => {
      if (tid) clearTimeout(tid)
      tid = setTimeout(measure, 120)
    }

    const ro =
      typeof ResizeObserver !== "undefined" && trackRef.current
        ? new ResizeObserver(debounced)
        : null
    if (ro && trackRef.current) ro.observe(trackRef.current)
    window.addEventListener("resize", debounced)

    return () => {
      if (tid) clearTimeout(tid)
      ro?.disconnect()
      window.removeEventListener("resize", debounced)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = coursesData.length
    if (!total) return
    const index = Math.min(
      total - 1,
      Math.round(Math.max(0, Math.min(1, latest)) * (total - 1))
    )
    setActiveIndex(index)
  })

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="relative h-[350vh] bg-white"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-white">
        {/* Subtle coral grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fdeaea 1px, transparent 1px), linear-gradient(to bottom, #fdeaea 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Header */}
        <div className="relative mb-12 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Cursos & Certificações
          </div>
          <h2 className="mt-2 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Minha{" "}
            <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">
              Formação
            </span>{" "}
            Especializada
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Role para explorar minha trajetória de aprendizado especializado.
          </p>
        </div>

        {/* Roadmap track */}
        <div className="relative">
          {/* Rail line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-coral-100"
          />

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="relative flex items-center gap-12 pl-[10vw] pr-[10vw] will-change-transform md:gap-20"
          >
            {coursesData.map((course, i) => {
              const isTop = i % 2 === 0
              const isActive = i === activeIndex
              const IconComponent = course.icon

              const cardBody = (
                <div
                  className={[
                    "w-full flex flex-col gap-2 lg:gap-3 rounded-2xl border p-3 sm:p-4 md:p-5 lg:p-6 bg-white transition-all duration-300 ease-out",
                    isActive
                      ? "border-coral-300 shadow-xl shadow-coral-500/10 scale-[1.04]"
                      : "border-coral-100 shadow-sm scale-100 opacity-60",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                      isActive ? "bg-coral-100" : "bg-coral-50",
                    ].join(" ")}
                  >
                    <IconComponent
                      className={[
                        "w-5 h-5 transition-colors duration-300",
                        isActive ? "text-coral-500" : "text-coral-300",
                      ].join(" ")}
                    />
                  </div>

                  <span
                    className={[
                      "text-xs font-semibold uppercase tracking-[0.3em] transition-opacity duration-300",
                      isActive
                        ? "text-coral-500 opacity-100"
                        : "text-coral-400 opacity-60",
                    ].join(" ")}
                  >
                    {course.completedDate}
                  </span>

                  <h3 className="text-balance text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {course.title}
                  </h3>

                  <p className="hidden md:block text-pretty text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs bg-coral-50 text-coral-600 px-2.5 py-1 rounded-full border border-coral-100">
                      {course.institution}
                    </span>
                    <span className="text-xs bg-coral-50 text-coral-600 px-2.5 py-1 rounded-full border border-coral-100">
                      {course.duration}
                    </span>
                  </div>
                </div>
              )

              const connector = (
                <div
                  aria-hidden
                  className={[
                    "w-px flex-none h-5 sm:h-8 md:h-10 lg:h-16 transition-colors duration-300",
                    isActive ? "bg-coral-400" : "bg-coral-100",
                  ].join(" ")}
                />
              )

              return (
                <div
                  key={course.id}
                  className="flex h-[60vh] w-[80vw] shrink-0 flex-col items-center sm:w-[55vw] md:w-[34vw] lg:w-[26vw]"
                >
                  {/* Top half — card anchors to the bottom (toward center) */}
                  <div className="flex w-full flex-1 flex-col items-center justify-end">
                    {isTop && (
                      <>
                        {cardBody}
                        {connector}
                      </>
                    )}
                  </div>

                  {/* Dot — always at the exact center of the item */}
                  <div className="flex h-4 w-4 flex-none items-center justify-center">
                    <div
                      aria-hidden
                      className={[
                        "rounded-full ring-4 ring-white transition-all duration-300",
                        isActive
                          ? "h-4 w-4 bg-coral-500 shadow-lg shadow-coral-500/40"
                          : "h-3 w-3 bg-coral-200",
                      ].join(" ")}
                    />
                  </div>

                  {/* Bottom half — card anchors to the top (toward center) */}
                  <div className="flex w-full flex-1 flex-col items-center justify-start">
                    {!isTop && (
                      <>
                        {connector}
                        {cardBody}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Progress indicator + scroll hint */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6 md:px-24">
          <div className="flex items-center gap-2">
            {coursesData.map((_, i) => (
              <div
                key={i}
                className={[
                  "rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "w-6 h-2 bg-coral-500"
                    : "w-2 h-2 bg-coral-200",
                ].join(" ")}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-coral-400">
            <span>Role para explorar</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
