"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { 
  Brain, 
  Users, 
  Baby, 
  Target,
  Stethoscope,
  Puzzle
} from "lucide-react"

export function CoursesSection() {
  return (
    <section id="especialidades" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-coral-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Áreas de Especialização
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como Posso <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Ajudar Você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combinando conhecimento técnico especializado com uma abordagem humanizada, 
            ofereço suporte personalizado em diferentes áreas do desenvolvimento humano.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* ABA Therapy */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-coral-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Método ABA</CardTitle>
              <Badge className="bg-coral-100 text-coral-700 mx-auto">Especialização Principal</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Applied Behavior Analysis focado no desenvolvimento de habilidades comportamentais 
                e sociais através de estratégias baseadas em evidências científicas.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs">Autism Support</Badge>
                <Badge variant="outline" className="text-xs">Behavioral Analysis</Badge>
                <Badge variant="outline" className="text-xs">Skills Development</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Denver Model */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Modelo Denver</CardTitle>
              <Badge className="bg-blue-100 text-blue-700 mx-auto">Early Intervention</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Intervenção precoce para crianças com autismo, focando no desenvolvimento 
                de habilidades sociais, comunicativas e cognitivas através do brincar.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs">Early Childhood</Badge>
                <Badge variant="outline" className="text-xs">Social Skills</Badge>
                <Badge variant="outline" className="text-xs">Communication</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Family Mediation */}
          <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Mediação Familiar</CardTitle>
              <Badge className="bg-green-100 text-green-700 mx-auto">Conflict Resolution</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Facilitação de diálogo e resolução de conflitos familiares, promovendo 
                comunicação saudável e acordos que beneficiem todos os envolvidos.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="text-xs">Family Therapy</Badge>
                <Badge variant="outline" className="text-xs">Conflict Resolution</Badge>
                <Badge variant="outline" className="text-xs">Legal Support</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Avaliação Funcional</h3>
                  <p className="text-sm text-muted-foreground">Análise completa das necessidades individuais</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Assessment</Badge>
                <Badge variant="secondary" className="text-xs">Functional Analysis</Badge>
                <Badge variant="secondary" className="text-xs">Personalized Care</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Puzzle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Desenvolvimento Cognitivo</h3>
                  <p className="text-sm text-muted-foreground">Estímulo de habilidades cognitivas e motoras</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Cognitive Training</Badge>
                <Badge variant="secondary" className="text-xs">Motor Skills</Badge>
                <Badge variant="secondary" className="text-xs">Learning Support</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para Começar Sua Jornada?</h3>
            <p className="text-coral-100 mb-6 max-w-2xl mx-auto">
              Cada pessoa é única e merece um atendimento personalizado. 
              Vamos juntos descobrir o melhor caminho para seu desenvolvimento.
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
                onClick={() => document.getElementById('curriculo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}