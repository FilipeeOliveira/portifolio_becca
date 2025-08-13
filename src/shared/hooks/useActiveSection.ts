"use client"

import { useState, useEffect } from "react"
import type { NavigationItem } from "@/shared/types/navigation.types"

export function useActiveSection(navigationItems: NavigationItem[]) {
  const [activeSection, setActiveSection] = useState("sobre")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navigationItems])

  return { activeSection, setActiveSection }
}