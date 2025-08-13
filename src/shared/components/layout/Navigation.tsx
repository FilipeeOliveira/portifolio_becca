"use client"

import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { X, Menu } from "lucide-react"
import type { NavigationProps } from "@/shared/types/navigation.types"
import { scrollToSection } from "@/shared/utils/scroll.utils"

export function Navigation({ items, activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm border-b border-coral-100 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg sm:text-xl text-coral-500 flex items-center gap-1">
            Rebecca Ariel
            <span className="text-coral-400">★</span>
          </div>
          
          <div className="hidden md:flex gap-6 lg:gap-8">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-medium transition-colors relative cursor-pointer ${
                  activeSection === item.id ? "text-coral-500" : "text-gray-600 hover:text-coral-500"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-coral-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-coral-500"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-coral-100">
            <div className="flex flex-col gap-3 pt-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.id ? "text-coral-500" : "text-gray-600 hover:text-coral-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}