export function HeroSection() {
  return (
    <section id="sobre" className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-12%20%C3%A0%28s%29%2013.50.54_2cf6968e.jpg-acdHLitbeTHNTnh9FSUziWmgOoGq5m.jpeg"
                alt="Rebecca Ariel - Terapeuta Ocupacional trabalhando com brinquedos terapêuticos"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-[center_20%]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <p className="text-coral-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
                Olá deixe-me me apresentar
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                Me chamo Rebecca Ariel<br />
                Estudante de Terapia Ocupacional
                <br />
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Acredito que o cuidado terapêutico é um direito, não um privilégio. Qualquer pessoa que precise de
              aconselhamento deve tê-lo. É uma crença que tenho vivido há mais de 2 anos, fornecendo terapia
              acessível e de qualidade.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Atualmente, trabalho como Assistente Terapêutica nos métodos ABA e Denver, 
              oferecendo suporte individualizado para estimular o desenvolvimento e a autonomia dos pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}