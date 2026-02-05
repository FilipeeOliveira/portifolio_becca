"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/components/ui/carousel"
import { Target } from "lucide-react"

// Import data
import { coursesData } from '@/data/courses'

export function CoursesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="especialidades" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-coral-50/20 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-coral-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-coral-200 rounded-full opacity-20 blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-coral-300 rounded-full opacity-10 blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Cursos & Certificações
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Formação</span> Especializada
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Minha formação e aprimoramento incluem a busca ativa por certificações e conhecimentos complementares. 
            Este investimento me prepara para, futuramente, atuar com um cuidado terapêutico eficaz e alinhado às necessidades do desenvolvimento humano. 
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-2 py-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 py-4">
              {coursesData.map((course) => {
                const IconComponent = course.icon
                return (
                  <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full xs:basis-11/12 sm:basis-1/2 lg:basis-1/3 pt-4 pb-4">
                    <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm overflow-hidden h-full">
                      {/* Background glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardHeader className="text-center pb-4 relative z-10">
                        <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                          <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <IconComponent className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
                        </div>
                        <CardTitle className="text-lg font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300 leading-tight">
                          {course.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center relative z-10 flex flex-col justify-between h-full">
                        <div>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                            {course.description}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2 mb-4">
                            <Badge variant="outline" className="text-xs border-coral-200 text-coral-600 hover:bg-coral-50 transition-colors duration-300">
                              {course.duration}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-2 mt-auto">
                          <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300 text-xs">
                            {course.institution}
                          </Badge>
                          <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300 text-xs">
                            {course.completedDate}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            {/* Navigation Controls - Buttons + Indicators */}
            <div className="flex items-center justify-center mt-8 gap-4">
              {/* Previous Button */}
              <CarouselPrevious className="static translate-x-0 translate-y-0 border-coral-200 bg-white/80 hover:bg-coral-50 hover:border-coral-300 text-coral-600 hover:text-coral-700 shadow-lg" />

              {/* Carousel Indicators */}
              <div className="flex items-center gap-2 px-4">
                {Array.from({ length: count }, (_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index + 1 === current
                        ? "bg-coral-500 scale-125"
                        : "bg-coral-200 hover:bg-coral-400"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <CarouselNext className="static translate-x-0 translate-y-0 border-coral-200 bg-white/80 hover:bg-coral-50 hover:border-coral-300 text-coral-600 hover:text-coral-700 shadow-lg" />
            </div>
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral-500/10 to-coral-600/10 rounded-2xl p-8 backdrop-blur-sm border border-coral-100/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Comprometida com a <span className="text-coral-500">Excelência</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada certificação reflete meu compromisso com o aprendizado contínuo e a ética profissional. 
              Esse aprimoramento constante é essencial para que meu futuro atendimento seja de qualidade, 
              sempre pautado nas mais recentes evidências científicas e práticas inovadoras. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}