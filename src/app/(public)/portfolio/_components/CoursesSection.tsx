import { Card, CardContent } from "@/shared/components/ui/card"
import { GraduationCap, Brain, User, Users, Baby } from "lucide-react"

export function CoursesSection() {
  return (
    <section id="cursos" className="px-4 sm:px-6 py-12 sm:py-16 bg-rose-100/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Title */}
          <div className="lg:col-span-1 flex flex-col justify-center text-center lg:text-left">
            <p className="text-coral-500 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
              Minha Formação
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
              Cursos &<br />
              Treinamentos
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Minha jornada de aprendizagem até o presente momento tem sido marcada pelo estudo e prática em mediação, 
              terapia nos métodos ABA e Denver, desenvolvimento infantil e comunicação alternativa, 
              sempre guiada pelo compromisso de oferecer um cuidado individualizado e de qualidade.
            </p>
          </div>

          {/* Right Column - Courses Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Mediadores e Conciliadores */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-coral-500 text-xs font-medium uppercase tracking-wider">NUPEMEC - TJAM</p>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">
                      Mediadores e Conciliadores Judiciais
                    </h3>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    <span className="font-medium">Carga horária:</span> 100h (40h Teóricas e 60h Práticas)
                  </p>
                  <p className="text-coral-600 text-xs sm:text-sm font-medium">Finalizado em 17/12/2021</p>
                </div>
              </CardContent>
            </Card>

            {/* Assistente Terapêutico Denver */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-coral-500 text-xs font-medium uppercase tracking-wider">
                      Clínica Pais & Filhos
                    </p>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">
                      Assistente Terapêutico em Modelo Naturalista/Denver
                    </h3>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    <span className="font-medium">Carga horária:</span> 40h
                  </p>
                  <p className="text-coral-600 text-xs sm:text-sm font-medium">Finalizado em 21/07/2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Assistente Terapêutico ABA */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-coral-500 text-xs font-medium uppercase tracking-wider">
                      Clínica Pais & Filhos
                    </p>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">
                      Assistente Terapêutico em ABA
                    </h3>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    <span className="font-medium">Carga horária:</span> 40h
                  </p>
                  <p className="text-coral-600 text-xs sm:text-sm font-medium">Finalizado em 17/03/2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Workshop CAA */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-coral-500 text-xs font-medium uppercase tracking-wider">
                      Fábula - Fonoaudiologia
                    </p>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">
                      Workshop CAA em Prática
                    </h3>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    <span className="font-medium">Carga horária:</span> 8h
                  </p>
                  <p className="text-coral-600 text-xs sm:text-sm font-medium">Finalizado em 25/02/2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Treinamento IDADI */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden sm:col-span-2">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Baby className="w-5 sm:w-6 h-5 sm:h-6 text-coral-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-coral-500 text-xs font-medium uppercase tracking-wider">
                      Psicóloga Andressa Uchoa
                    </p>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">
                      Treinamento IDADI - Inventário Dimensional de Avaliação do Desenvolvimento Infantil
                    </h3>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-gray-600 text-xs sm:text-sm">
                    <span className="font-medium">Carga horária:</span> 2h
                  </p>
                  <p className="text-coral-600 text-xs sm:text-sm font-medium">Finalizado em 02/03/2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}