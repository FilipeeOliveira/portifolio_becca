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
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-coral-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Mediadores e Conciliadores Judiciais</CardTitle>
              <Badge className="bg-coral-100 text-coral-700 mx-auto">NUPEMEC - TJAM</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Formação completa em mediação e conciliação judicial para resolução 
                de conflitos familiares e civis.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">100h (40h Teóricas + 60h Práticas)</Badge>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Finalizado em 17/12/2021</Badge>
            </CardContent>
          </Card>

          {/* Assistente Terapêutico Denver */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Assistente Terapêutico em Modelo Naturalista/Denver</CardTitle>
              <Badge className="bg-blue-100 text-blue-700 mx-auto">CLÍNICA PAIS & FILHOS</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Especialização em intervenção precoce para crianças com autismo 
                usando o modelo naturalista Denver.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">40h</Badge>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Finalizado em 21/07/2024</Badge>
            </CardContent>
          </Card>

          {/* Assistente Terapêutico ABA */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Assistente Terapêutico em ABA</CardTitle>
              <Badge className="bg-green-100 text-green-700 mx-auto">CLÍNICA PAIS & FILHOS</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Applied Behavior Analysis com foco em desenvolvimento de habilidades 
                comportamentais e sociais.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">40h</Badge>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Finalizado em 17/03/2024</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Additional Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Workshop CAA em Prática</CardTitle>
              <Badge className="bg-purple-100 text-purple-700 mx-auto">FÁBULA - FONOAUDIOLOGIA</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Workshop prático sobre Comunicação Alternativa e Aumentativa 
                para desenvolvimento de habilidades comunicativas.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">8h</Badge>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Finalizado em 25/02/2024</Badge>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Treinamento IDADI</CardTitle>
              <Badge className="bg-orange-100 text-orange-700 mx-auto">PSICÓLOGA ANDRESSA UCHOA</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Inventário Dimensional de Avaliação do Desenvolvimento Infantil 
                para análise especializada do desenvolvimento.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">2h</Badge>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Finalizado em 02/03/2024</Badge>
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