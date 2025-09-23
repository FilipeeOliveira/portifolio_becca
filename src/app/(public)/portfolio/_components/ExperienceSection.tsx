"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import type { Experience } from "@/shared/types/experience.types"

const experiences: Experience[] = [
  {
    title: "Assistente Terapêutico",
    company: "Samel",
    department: "Terapias Integradas",
    period: "02/2024 - Atualmente",
    description: "Aplicando conhecimento e experiência prática nos métodos ABA e Denver, desenvolvendo e aplicando estratégias terapêuticas personalizadas para atender às necessidades individuais de cada paciente.",
  },
  {
    title: "Assistente de Acolhimento",
    company: "Hapvida",
    department: "Medicina Preventiva",
    period: "06/2023 - 09/2023",
    description: "Responsável pelo acolhimento e orientação de pacientes em serviços de medicina preventiva.",
  },
  {
    title: "Recepcionista",
    company: "Hapvida",
    department: "Medicina Preventiva",
    period: "11/2022 - 05/2023",
    description: "Atendimento ao público e gestão de agendamentos em ambiente de medicina preventiva.",
  },
  {
    title: "Estagiária",
    company: "Tribunal de Justiça do Amazonas - CEJUS",
    department: "Famílias",
    period: "2019 - 2021",
    description:
      "Experiência em mediação familiar e suporte jurídico em questões relacionadas ao direito de família.",
  },
]

export function ExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isManualControl, setIsManualControl] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || isManualControl) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [isVisible, isManualControl])

  const nextSlide = () => {
    setIsManualControl(true)
    setCurrentSlide((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setIsManualControl(true)
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <section ref={sectionRef} id="experiencia" className="px-4 sm:px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-coral-500 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2">
            Minha Trajetória
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Formação & Experiência</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Education Highlights */}
          <Card className="bg-white border-0 shadow-lg rounded-xl sm:rounded-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Formação</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Terapia Ocupacional</h4>
                  <p className="text-coral-500 text-xs sm:text-sm">Universidade FAMETRO • 6° período</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm sm:text-base">Serviço Social</h4>
                  <p className="text-coral-500 text-xs sm:text-sm">UFAM - Universidade Federal do Amazonas • Graduada em 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg rounded-xl sm:rounded-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Experiência Profissional</h3>
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-1 sm:gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-7 sm:w-8 h-7 sm:h-8 bg-coral-100 hover:bg-coral-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-3 sm:w-4 h-3 sm:h-4 text-coral-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-7 sm:w-8 h-7 sm:h-8 bg-coral-100 hover:bg-coral-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-coral-600" />
                  </button>
                </div>
              </div>

              {/* Carousel content */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {experiences.map((exp, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="space-y-2 sm:space-y-3">
                        <div>
                          <h4 className="font-bold text-foreground text-base sm:text-lg">{exp.title}</h4>
                          <p className="text-coral-500 font-medium text-xs sm:text-sm">{exp.company}</p>
                          <p className="text-coral-400 text-xs">{exp.department}</p>
                        </div>
                        <Badge variant="secondary" className="bg-coral-100 text-coral-600 hover:bg-coral-200 text-xs">{exp.period}</Badge>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsManualControl(true)
                      setCurrentSlide(index)
                    }}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-coral-500" : "bg-coral-200"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}