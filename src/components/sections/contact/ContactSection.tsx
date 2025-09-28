"use client"

import { Button } from "@/shared/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-coral-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-coral-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-coral-200 rounded-full opacity-20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/60 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
            Disponível para conversar
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Vamos <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Conversar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estou ansiosa para conhecer mais sobre você, esses são meus contatos.
          </p>
        </div>

        {/* Social Media & Contact */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12">
          {/* Instagram */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-coral-200 hover:bg-coral-50 hover:border-coral-300 w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-300"
              onClick={() => window.open('https://instagram.com/rebeccaariel', '_blank')}
            >
              <svg className="h-6 w-6 sm:h-8 sm:w-8 text-coral-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
              </svg>
            </Button>
            <span className="text-xs sm:text-sm text-gray-600">Instagram</span>
          </div>
          
          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-coral-200 hover:bg-coral-50 hover:border-coral-300 w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/rebecca-ariel-b58153225', '_blank')}
            >
              <svg className="h-6 w-6 sm:h-8 sm:w-8 text-coral-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Button>
            <span className="text-xs sm:text-sm text-gray-600">LinkedIn</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-coral-200 hover:bg-coral-50 hover:border-coral-300 w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-300"
              onClick={() => window.open('mailto:rebeccaariel.gg@gmail.com', '_blank')}
            >
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-coral-500" />
            </Button>
            <span className="text-xs sm:text-sm text-gray-600">Email</span>
          </div>
          
          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-coral-200 hover:bg-coral-50 hover:border-coral-300 w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-all duration-300"
              onClick={() => window.open('https://wa.me/5592985862173', '_blank')}
            >
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-coral-500" />
            </Button>
            <span className="text-xs sm:text-sm text-gray-600">WhatsApp</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base mt-6 sm:mt-8">
          <MapPin className="h-4 w-4 text-coral-500 flex-shrink-0" />
          <span>Manaus - AM</span>
        </div>
      </div>
    </section>
  )
}
