"use client"

import { Button } from "@/shared/components/ui/button"

export function CvSection() {
  return (
    <section id="curriculo" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-coral-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-coral-500 font-medium text-sm sm:text-base mb-2 uppercase">Conheça</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Minha Trajetória
          </h2>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* CV Preview */}
            <div className="relative h-60 sm:h-80 lg:h-96 p-6 sm:p-8 flex items-center justify-center bg-gray-55">
              <div className="relative bg-white rounded-lg shadow-lg w-full max-w-64 h-full overflow-hidden">
                <iframe 
                  src="/docs/CV-RebeccaAriel.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=65" 
                  className="w-full h-full border-0 blur-sm opacity-60"
                  style={{ transform: 'scale(1.3) translateX(2%) translateY(-2%)', filter: 'blur(1.5px)' }}
                  title="CV Preview"
                />
                <div className="absolute inset-0 bg-white/40"></div>
              </div>
            </div>

            {/* CV Download Content */}
            <div className="p-6 sm:p-8 lg:p-12 relative">


              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Confira meu currículo completo
                  <br />e conheça minha trajetória profissional.
                </h3>

                <div className="space-y-3">
                  <Button
                    className="bg-coral-500 hover:bg-coral-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                    onClick={() => {
                      window.open('/docs/CV-RebeccaAriel.pdf', '_blank')
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