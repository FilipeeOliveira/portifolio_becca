"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/shared/components/ui/carousel"
import { Heart, Target, User, Award, Users, Zap, CheckCircle } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export function MissionSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const values = [
    {
      icon: User,
      title: "Humanização no cuidado",
      description: "Tratamento compassivo e personalizado, respeitando a dignidade e singularidade de cada pessoa."
    },
    {
      icon: Award,
      title: "Prática baseada em evidências",
      description: "Intervenções fundamentadas em pesquisas científicas e melhores práticas da Terapia Ocupacional."
    },
    {
      icon: Users,
      title: "Respeito à individualidade",
      description: "Reconhecimento das necessidades únicas, preferências e objetivos de cada cliente."
    },
    {
      icon: Zap,
      title: "Compromisso com a excelência",
      description: "Busca contínua pela qualidade superior em todos os aspectos do atendimento terapêutico."
    },
    {
      icon: CheckCircle,
      title: "Foco na Autonomia e Participação",
      description: "Promoção da independência funcional e participação ativa na sociedade."
    }
  ]

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Autoplay effect
  useEffect(() => {
    if (!api || isHovered) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000) // 3 segundos

    return () => clearInterval(interval)
  }, [api, isHovered])

  const scrollToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }, [api])

  return (
    <section id="sobre-mim" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-coral-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Quem Sou Eu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Missão</span> e Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acredito que o cuidado terapêutico é um direito fundamental de todo ser humano. Minha jornada é movida pela paixão de transformar vidas através de uma abordagem humana. 
            Com o apoio da minha experiência como Assistente Terapêutica, meu maior valor é garantir que essa terapia seja acessível a todos.
          </p>
        </div>

        {/* Mission & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Mission Card */}
          <Card className="group relative border-0 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm overflow-hidden min-h-[400px] md:min-h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral-400 to-coral-600"></div>
            
            <CardHeader className="text-center pb-4 md:pb-6 relative z-10 pt-6 md:pt-8 px-4 md:px-6">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coral-500/20 to-coral-600/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-2 bg-white rounded-full shadow-lg" />
                <Target className="w-10 h-10 md:w-12 md:h-12 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-coral-600 transition-colors duration-300">
                Minha Missão
              </CardTitle>
              <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-coral-400 to-coral-600 mx-auto rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </CardHeader>
            <CardContent className="text-center relative z-10 px-4 md:px-8 pb-6 md:pb-8">
              <div className="relative">
                <blockquote className="text-muted-foreground leading-relaxed text-base md:text-lg italic px-4 md:px-6">
                  <span className="text-coral-500 text-2xl md:text-3xl">&ldquo;</span>
                  Democratizar o acesso à Terapia Ocupacional de qualidade, oferecendo suporte especializado que respeita a individualidade e o potencial de cada pessoa. Minha missão é promover a autonomia, a funcionalidade e a participação social através de um cuidado personalizado e fundamentado em evidências&nbsp;científicas.
                  <span className="text-coral-500 text-2xl md:text-3xl">&rdquo;</span>
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Values Carousel */}
          <Card className="group relative border-0 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm overflow-hidden min-h-[400px] md:min-h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral-600 to-coral-400"></div>
            
            <CardHeader className="text-center pb-3 md:pb-4 relative z-10 pt-6 md:pt-8 px-4 md:px-6">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coral-500/20 to-coral-600/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-2 bg-white rounded-full shadow-lg" />
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-coral-600 transition-colors duration-300">
                Valores Fundamentais
              </CardTitle>
              <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-coral-600 to-coral-400 mx-auto rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </CardHeader>
            <CardContent className="relative z-10 px-3 md:px-6 pb-6 md:pb-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                setApi={setApi}
                className="w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {values.map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                        <div className="bg-transparent rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 min-h-[160px] md:min-h-[180px] flex flex-col">
                          <div className="flex items-start gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-coral-500/10 to-coral-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-coral-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base md:text-lg font-bold text-foreground leading-tight mb-2">{value.title}</h4>
                              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                <CarouselPrevious className="-left-2 md:-left-4 top-1/3 bg-transparent hover:bg-transparent border-none text-coral-600 hover:text-coral-700 transition-all duration-200 shadow-none hover:shadow-none w-6 h-6 md:w-8 md:h-8" />
                <CarouselNext className="-right-2 md:-right-4 top-1/3 bg-transparent hover:bg-transparent border-none text-coral-600 hover:text-coral-700 transition-all duration-200 shadow-none hover:shadow-none w-6 h-6 md:w-8 md:h-8" />
              </Carousel>
              
              {/* Interactive Progress Indicators */}
              <div className="flex justify-center mt-4 md:mt-6 gap-1.5 md:gap-2">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-coral-500/50 ${
                      current === index + 1
                        ? "bg-coral-500 shadow-md shadow-coral-500/30 scale-110"
                        : "bg-coral-200 hover:bg-coral-300"
                    }`}
                    aria-label={`Ir para valor ${index + 1}`}
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