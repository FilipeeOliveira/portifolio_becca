"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { 
  Brain, 
  Baby, 
  Target,
  Stethoscope,
  Scale,
  Volume2
} from "lucide-react"

export function CoursesSection() {
  return (
    <section id="especialidades" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-coral-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Cursos & Certificações
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Formação</span> Especializada
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Minha jornada de aprendizado contínuo inclui cursos especializados que me capacitam 
            a oferecer o melhor cuidado terapêutico baseado em evidências científicas.
          </p>
        </div>

        {/* Main Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Mediadores e Conciliadores Judiciais */}
          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            {/* Background glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Scale className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">
                Mediadores e Conciliadores Judiciais
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Formação completa em mediação e conciliação judicial para resolução 
                de conflitos familiares e civis.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-coral-200 text-coral-600 hover:bg-coral-50 transition-colors duration-300">
                  100h
                </Badge>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  NUPEMEC - TJAM
                </Badge>
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  Finalizado 12/2021
                </Badge>
              </div>

            </CardContent>
          </Card>

          {/* Assistente Terapêutico Denver */}
          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Baby className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">
                Assistente Terapêutico em Modelo Naturalista/Denver
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Especialização em intervenção precoce para crianças com autismo 
                usando o modelo naturalista Denver.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-coral-200 text-coral-600 hover:bg-coral-50 transition-colors duration-300">40h</Badge>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  CLÍNICA PAIS & FILHOS
                </Badge>
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  Finalizado 21/07/2024
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Assistente Terapêutico ABA */}
          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Brain className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">
                Assistente Terapêutico em ABA
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Applied Behavior Analysis com foco em desenvolvimento de habilidades 
                comportamentais e sociais.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-coral-200 text-coral-600 hover:bg-coral-50 transition-colors duration-300">40h</Badge>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  CLÍNICA PAIS & FILHOS
                </Badge>
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  Finalizado 17/03/2024
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Volume2 className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">
                Workshop CAA em Prática
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Workshop prático sobre Comunicação Alternativa e Aumentativa 
                para desenvolvimento de habilidades comunicativas.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-coral-200 text-coral-600 hover:bg-coral-50 transition-colors duration-300">8h</Badge>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  FÁBULA - FONOAUDIOLOGIA
                </Badge>
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  Finalizado 25/02/2024
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-3 bg-white/70 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 to-coral-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Stethoscope className="w-10 h-10 text-coral-500 relative z-10 group-hover:text-coral-600 transition-colors duration-300" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-coral-600 transition-colors duration-300">
                Treinamento IDADI
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Inventário Dimensional de Avaliação do Desenvolvimento Infantil 
                para análise especializada do desenvolvimento.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-coral-200 text-coral-600 hover:bg-coral-50 transition-colors duration-300">2h</Badge>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  PSICÓLOGA ANDRESSA UCHOA
                </Badge>
                <Badge className="bg-coral-100 text-coral-700 hover:bg-coral-200 transition-colors duration-300">
                  Finalizado 02/03/2024
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Aprendizado Contínuo, Cuidado Especializado</h3>
            <p className="text-coral-100 mb-6 max-w-2xl mx-auto">
              Minha formação continuada me permite oferecer os métodos mais atuais e eficazes 
              em terapia ocupacional e desenvolvimento humano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-coral-600 px-6 py-3 rounded-full font-medium hover:bg-coral-50 transition-colors duration-300"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Consulta
              </button>
              <button 
                className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-300"
                onClick={() => document.getElementById('sobre-mim')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Minha História
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}