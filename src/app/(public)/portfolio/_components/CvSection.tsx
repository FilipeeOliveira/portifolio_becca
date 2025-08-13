"use client"

import { Button } from "@/shared/components/ui/button"

export function CvSection() {
  return (
    <section id="curriculo" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-coral-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* CV Preview */}
            <div className="relative h-60 sm:h-80 lg:h-96 p-6 sm:p-8 flex items-center justify-center bg-gray-50">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-36 sm:w-48 h-48 sm:h-64 flex flex-col items-center justify-center p-3 sm:p-4">
                <div className="w-full h-24 sm:h-32 bg-coral-100 rounded mb-3 sm:mb-4 flex items-center justify-center">
                  <div className="text-coral-500 text-center">
                    <div className="w-8 sm:w-12 h-8 sm:h-12 bg-coral-200 rounded-full mx-auto mb-1 sm:mb-2"></div>
                    <div className="text-xs font-medium">Rebecca Ariel</div>
                    <div className="text-xs text-gray-500">Terapeuta Ocupacional</div>
                  </div>
                </div>
                <div className="space-y-1 w-full">
                  <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-1.5 sm:h-2 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>

            {/* CV Download Content */}
            <div className="p-6 sm:p-8 lg:p-12 relative">


              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Confira meu currículo completo
                  <br />e conheça minha trajetória profissional.
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 text-sm text-gray-600">
                  <span>Download em PDF disponível.</span>
                  <Button
                    className="bg-coral-500 hover:bg-coral-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                    onClick={() => {
                      // Placeholder for PDF download functionality
                      console.log("Download CV")
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Baixar Currículo
                  </Button>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="hidden sm:block absolute bottom-6 lg:bottom-8 right-6 lg:right-8 opacity-30">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-300 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-400 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-200 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-400 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-300 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}