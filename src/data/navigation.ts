export interface NavigationItem {
  id: string
  label: string
}

// Os ids das seções foram mantidos para não quebrar links antigos (#sobre, #curriculo...)
export const navigationItems: NavigationItem[] = [
  { id: "sobre", label: "Início" },
  { id: "sobre-mim", label: "Missão" },
  { id: "especialidades", label: "Formação" },
  { id: "curriculo", label: "Trajetória" },
  { id: "contato", label: "Contato" },
]
