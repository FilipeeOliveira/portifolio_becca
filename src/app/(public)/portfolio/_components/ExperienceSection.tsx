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
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/20">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground flex-1 text-center">Formação Acadêmica</CardTitle>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-green-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-green-600" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {educationData.map((education, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`text-center p-6 rounded-xl ${
                  education.color === 'coral' 
                    ? 'bg-coral-50/50 border border-coral-100' 
                    : 'bg-green-50/50 border border-green-100'
                }`}>
                  <h4 className="font-bold text-foreground text-lg mb-2">{education.title}</h4>
                  <p className={`text-sm font-medium mb-2 ${
                    education.color === 'coral' ? 'text-coral-500' : 'text-green-600'
                  }`}>
                    {education.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">{education.status}</p>
                  <Badge className={
                    education.color === 'coral' 
                      ? 'bg-coral-100 text-coral-700' 
                      : 'bg-green-100 text-green-700'
                  }>
                    {education.badge}
                  </Badge>
                </div>
              </div>
            ))}
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
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-green-500' : 'bg-green-200'
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
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Missão</span> & Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acredito profundamente que o cuidado terapêutico é um direito fundamental de todo ser humano. 
            Minha jornada é movida pela paixão de transformar vidas através de uma abordagem humanizada e baseada em evidências.
          </p>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-coral-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Minha Missão</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à terapia de qualidade, oferecendo suporte especializado 
                que respeita a individualidade de cada pessoa. Acredito que todos merecem 
                alcançar seu máximo potencial através de cuidado personalizado e evidências científicas.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Valores Fundamentais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">Humanização no cuidado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">Prática baseada em evidências</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">Respeito à individualidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-coral-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">Compromisso com a excelência</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <EducationCarousel />
          
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Diferenciais</CardTitle>
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

        {/* Philosophy Section */}
        <div className="text-center">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-r from-coral-500 to-coral-600 text-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Minha Filosofia de Trabalho</h3>
              <p className="text-coral-100 text-lg leading-relaxed max-w-4xl mx-auto">
                &ldquo;Cada pessoa é única e possui potencialidades extraordinárias. Meu papel como terapeuta 
                é criar um ambiente seguro e acolhedor onde essas potencialidades possam florescer. 
                Acredito na força transformadora do cuidado humanizado e na importância de celebrar 
                cada pequena conquista no caminho do desenvolvimento.&rdquo;
              </p>
              <div className="mt-6">
                <Badge className="bg-white/20 text-white px-4 py-2 hover:bg-white/30 transition-colors duration-300">
                  &ldquo;O cuidado não é apenas minha profissão, é meu propósito de vida&rdquo;
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}