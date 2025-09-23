"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { Heart, Target, GraduationCap, Star, Award } from "lucide-react"

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission & Values */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-coral-50/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-coral-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Minha Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar o acesso à terapia de qualidade, oferecendo suporte especializado 
                  que respeita a individualidade de cada pessoa. Acredito que todos merecem 
                  alcançar seu máximo potencial através de cuidado personalizado e evidências científicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Valores Fundamentais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Humanização no cuidado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Prática baseada em evidências</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Respeito à individualidade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Compromisso com a excelência</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Educational Background */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Formação Acadêmica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-coral-500 pl-4">
                  <h4 className="font-bold text-foreground text-base">Terapia Ocupacional</h4>
                  <p className="text-coral-500 text-sm font-medium">Universidade FAMETRO</p>
                  <p className="text-muted-foreground text-sm">6° período • Em andamento</p>
                  <Badge className="bg-coral-100 text-coral-700 mt-2">Formação Principal</Badge>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-foreground text-base">Serviço Social</h4>
                  <p className="text-green-600 text-sm font-medium">UFAM - Universidade Federal do Amazonas</p>
                  <p className="text-muted-foreground text-sm">Graduada em 2023</p>
                  <Badge className="bg-green-100 text-green-700 mt-2">Concluído</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
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
                    <div className="text-2xl font-bold text-coral-500 mb-1">3</div>
                    <div className="text-xs text-muted-foreground">Especializações</div>
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

        {/* Philosophy Section */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-coral-500 to-coral-600 text-white">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <Badge className="bg-white/20 text-white px-4 py-2">
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