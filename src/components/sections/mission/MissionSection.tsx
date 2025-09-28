"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Heart, Target } from "lucide-react"

export function MissionSection() {
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

      </div>
    </section>
  )
}