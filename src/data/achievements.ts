import { Award, Star, Target, LucideIcon } from 'lucide-react'

export interface Achievement {
  icon: LucideIcon
  title: string
  description: string
  year: string
}

export const achievementsData: Achievement[] = [
  {
    icon: Award,
    title: 'Especialização em ABA',
    description: 'Certificação em Applied Behavior Analysis',
    year: '2024'
  },
  {
    icon: Star,
    title: 'Graduação com Distinção',
    description: 'Serviço Social - UFAM',
    year: '2023'
  },
  {
    icon: Target,
    title: 'Estágio CEJUS',
    description: 'Experiência em mediação familiar',
    year: '2021'
  }
]