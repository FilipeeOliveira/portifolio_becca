"use client"

import { Navigation } from "@/shared/components/layout/Navigation"
import { Footer } from "@/shared/components/layout/Footer"
import { useActiveSection } from "@/shared/hooks/useActiveSection"

const navigationItems = [
  { id: "sobre", label: "Sobre" },
  { id: "especialidades", label: "Especialidades" },
  { id: "sobre-mim", label: "Missão e Valores" },
  { id: "curriculo", label: "Currículo" },
  { id: "contato", label: "Contato" },
]

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { activeSection } = useActiveSection(navigationItems)

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-white">
      <Navigation 
        items={navigationItems}
        activeSection={activeSection}
      />
      
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}