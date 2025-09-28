"use client"

import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { X, Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/components/ui/navigation-menu"
import type { NavigationProps } from "@/types/navigation.types"
import { scrollToSection } from "@/lib/scroll.utils"

export function Navigation({ items, activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-coral-100/50 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg sm:text-xl text-coral-500 flex items-center gap-1">
            Rebecca Ariel
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2 lg:gap-4">
              {items.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    onClick={() => handleNavigate(item.id)}
                    className={`text-sm font-medium transition-all duration-300 relative cursor-pointer px-3 py-2 ${
                      activeSection === item.id 
                        ? "text-coral-500" 
                        : "text-gray-600 hover:text-coral-500"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute bottom-1 left-3 right-3 h-0.5 bg-coral-500 rounded-full" />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-coral-500 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-coral-100">
            <NavigationMenu className="pt-4">
              <NavigationMenuList className="flex-col items-start gap-3">
                {items.map((item) => (
                  <NavigationMenuItem key={item.id} className="w-full">
                    <NavigationMenuLink
                      onClick={() => handleNavigate(item.id)}
                      className={`text-left text-sm font-medium transition-all duration-300 cursor-pointer px-3 py-2 w-full block ${
                        activeSection === item.id 
                          ? "text-coral-500" 
                          : "text-gray-600 hover:text-coral-500"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </nav>
  )
}