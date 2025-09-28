"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { useActiveSection } from "@/hooks/useActiveSection"
import { navigationItems } from "@/data/navigation"
import { Toaster } from "sonner"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { activeSection } = useActiveSection(navigationItems)

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        items={navigationItems}
        activeSection={activeSection}
      />
      
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}