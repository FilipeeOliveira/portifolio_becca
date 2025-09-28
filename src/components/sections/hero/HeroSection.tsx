"use client"

import { Button } from "@/shared/components/ui/button"
import { Badge } from "@/shared/components/ui/badge"
import { Heart, Users, Target, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="sobre" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-coral-50/40 via-white to-white">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-32 sm:w-72 h-32 sm:h-72 bg-coral-100 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-coral-200 rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-radial from-coral-50 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm ">
                <Sparkles className="w-4 h-4" />
                Transformando vidas através do cuidado
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ">
                <span className="text-foreground">Olá, me chamo</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-coral-500 via-coral-600 to-coral-500 bg-clip-text">
                  Rebecca Ariel
                </span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4 ">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                  Estudante de Terapia Ocupacional dedicada ao desenvolvimento humano.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Acredito que o cuidado terapêutico é um direito fundamental. 
                  Com mais de 2 anos de experiência, minha missão é proporcionar 
                  terapia acessível e transformadora para cada pessoa.
                </p>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-6 ">
                <div className="text-center group cursor-default">
                  <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Heart className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">2+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                
                <div className="text-center group cursor-default">
                  <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Users className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">100+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Pacientes atendidos</div>
                </div>
                
                <div className="text-center group cursor-default">
                  <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-3 sm:w-4 lg:w-6 h-3 sm:h-4 lg:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">95%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Taxa de sucesso</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => document.getElementById('curriculo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça Minha Jornada
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white transition-all duration-300 cursor-pointer"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vamos Conversar
              </Button>
            </div>

            {/* Specialties Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['Método ABA', 'Denver', 'Mediação Familiar', 'Desenvolvimento Infantil'].map((specialty) => (
                <Badge 
                  key={specialty}
                  variant="secondary" 
                  className="bg-coral-100 text-coral-700 px-2 sm:px-3 py-1 text-xs sm:text-sm hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 ">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-coral-200 to-coral-300 rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-coral-100 to-coral-200 rounded-full opacity-10 blur-3xl animate-pulse delay-500" />
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-1 sm:rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-700 group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2013.50.54_2cf6968e.jpg-acdHLitbeTHNTnh9FSUziWmgOoGq5m.jpeg"
                  alt="Rebecca Ariel - Terapeuta Ocupacional trabalhando com brinquedos terapêuticos"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}