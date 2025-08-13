"use client"

import { Button } from "@/shared/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Vamos Conversar</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
          Pronta para iniciar sua jornada de crescimento e bem-estar?
        </p>

        <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <Button className="bg-coral-500 hover:bg-coral-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base">
            <Mail className="mr-2 h-4 w-4" />
            rebeccaariel.gg@gmail.com
          </Button>
          <Button
            variant="outline"
            className="border-coral-500 text-coral-500 hover:bg-coral-50 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-sm sm:text-base"
          >
            <Phone className="mr-2 h-4 w-4" />
            (92) 98528-2351
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
          <MapPin className="h-4 w-4 text-coral-500 flex-shrink-0" />
          <span>Manaus - AM</span>
        </div>
      </div>
    </section>
  )
}