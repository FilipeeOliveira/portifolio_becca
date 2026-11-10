"use client"

import { useEffect, useState } from "react"
import type { NavigationItem } from "@/types/navigation.types"

// Seção visível no momento (para destacar no menu). IntersectionObserver em vez de ouvir cada evento de scroll.
export function useActiveSection(items: NavigationItem[]) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? "")

  useEffect(() => {
    const visiveis = new Map<string, number>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visiveis.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0)
        // a primeira seção (na ordem do menu) com presença relevante na faixa central da tela
        const atual = items.find((i) => (visiveis.get(i.id) ?? 0) > 0)
        if (atual) setActiveSection(atual.id)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.01] },
    )
    for (const i of items) {
      const el = document.getElementById(i.id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [items])

  return { activeSection }
}
