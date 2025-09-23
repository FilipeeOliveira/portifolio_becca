"use client"

import { Button } from "@/shared/components/ui/button"
import { Card, CardContent } from "@/shared/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-coral-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Entre em Contato
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Conversar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estou ansiosa para conhecer mais sobre você e como posso ajudar em sua jornada. 
            Entre em contato através dos canais abaixo ou agende uma conversa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="space-y-6">
            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-coral-50/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Resposta rápida e direta</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open('https://wa.me/5592985862173', '_blank')}
                >
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">rebeccaariel.gg@gmail.com</p>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={() => window.open('mailto:rebeccaariel.gg@gmail.com', '_blank')}
                >
                  Enviar Email
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground text-sm">Rede profissional</p>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/rebecca-ariel-b58153225', '_blank')}
                >
                  Conectar no LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info & CTA */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-coral-500 to-coral-600 text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Agende uma Conversa</h3>
                <p className="text-coral-100 text-center mb-6 leading-relaxed">
                  Que tal marcarmos um momento para conversar sobre suas necessidades? 
                  Estou disponível para uma consulta inicial gratuita.
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white text-coral-600 hover:bg-coral-50 font-medium"
                    onClick={() => window.open('https://wa.me/5592985862173?text=Olá! Gostaria de agendar uma consulta inicial.', '_blank')}
                  >
                    Agendar Consulta Gratuita
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/10"
                    onClick={() => document.getElementById('curriculo')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Meu Currículo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-coral-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Localização</h3>
                  <p className="text-muted-foreground">Manaus - AM</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Atendimento presencial e online disponível
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-coral-100 to-coral-50 rounded-2xl p-6 text-center">
              <h4 className="font-semibold text-foreground mb-2">Horário de Atendimento</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Emergências</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}