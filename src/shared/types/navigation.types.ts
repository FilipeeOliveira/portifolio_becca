export interface NavigationItem {
  id: string
  label: string
  href?: string
}

export interface NavigationProps {
  items: NavigationItem[]
  activeSection: string
  onNavigate: (sectionId: string) => void
}