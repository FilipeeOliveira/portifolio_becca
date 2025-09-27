"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { Heart, Target, GraduationCap, Star, Award, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const educationData = [
  {
    title: "Terapia Ocupacional",
    institution: "Universidade FAMETRO",
    status: "6° período • Em andamento",
    badge: "Formação Principal",
    color: "coral"
  },
  {
    title: "Serviço Social",
    institution: "UFAM - Universidade Federal do Amazonas",
    status: "Graduada em 2023",
    badge: "Concluído",
    color: "green"
  }
]

function EducationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % educationData.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const nextSlide = () => {
    setIsAutoPlay(false)
    setCurrentSlide((prev) => (prev + 1) % educationData.length)
  }

  const prevSlide = () => {
    setIsAutoPlay(false)
    setCurrentSlide((prev) => (prev - 1 + educationData.length) % educationData.length)
  }

  return (
    <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="text-center pb-4 relative z-10">
        <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <GraduationCap className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">Formação Acadêmica</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="relative">
          {/* Navigation Arrows - Positioned on sides */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-coral-200 hover:bg-coral-50 hover:border-coral-300 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-coral-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-coral-200 hover:bg-coral-50 hover:border-coral-300 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <ChevronRight className="w-5 h-5 text-coral-600" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {educationData.map((education, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`text-center p-6 rounded-xl ${
                    education.color === 'coral' 
                      ? 'bg-coral-50/50 border border-coral-100' 
                      : 'bg-coral-50/30 border border-coral-100/50'
                  }`}>
                    <h4 className="font-bold text-foreground text-lg mb-2">{education.title}</h4>
                    <p className="text-sm font-medium mb-2 text-coral-600">
                      {education.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">{education.status}</p>
                    <Badge className={
                      education.color === 'coral' 
                        ? 'bg-coral-100 text-coral-700' 
                        : 'bg-coral-100/70 text-coral-600'
                    }>
                      {education.badge}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {educationData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false)
                setCurrentSlide(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-coral-500 scale-125' : 'bg-coral-200 hover:bg-coral-300'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function AboutSection() {
  return (
    <section id="sobre-mim" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coral-50/30 via-white to-coral-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Quem Sou Eu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Missão</span> e Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acredito profundamente que o cuidado terapêutico é um direito fundamental de todo ser humano. 
            Minha jornada é movida pela paixão de transformar vidas através de uma abordagem humanizada e baseada em evidências.
          </p>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Target className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">Minha Missão</CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à terapia de qualidade, oferecendo suporte especializado 
                que respeita a individualidade de cada pessoa. Acredito que todos merecem 
                alcançar seu máximo potencial através de cuidado personalizado e evidências científicas.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Heart className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">Valores Fundamentais</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground">Humanização no cuidado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground">Prática baseada em evidências</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground">Respeito à individualidade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground">Compromisso com a excelência</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <EducationCarousel />
          
          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Award className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">Diferenciais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-500 mb-1">2+</div>
                  <div className="text-xs text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-500 mb-1">100+</div>
                  <div className="text-xs text-muted-foreground">Pacientes atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-500 mb-1">5</div>
                  <div className="text-xs text-muted-foreground">Cursos especializados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-500 mb-1">95%</div>
                  <div className="text-xs text-muted-foreground">Taxa de sucesso</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}