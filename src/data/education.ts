export interface EducationItem {
  id: string
  period: string
  title: string
  company: string
  location: string
  description: string
  highlights: string[]
}

export const educationData: EducationItem[] = [
  {
    id: "education-1",
    period: "2022 - Atualmente",
    title: "Terapia Ocupacional",
    company: "Universidade FAMETRO",
    location: "Manaus, AM",
    description: "Formação focada no desenvolvimento humano e reabilitação, com ênfase em terapias baseadas em evidências científicas.",
    highlights: ["6° período", "Em andamento", "Formação Principal"]
  },
  {
    id: "education-2", 
    period: "2019 - 2023",
    title: "Serviço Social",
    company: "UFAM - Universidade Federal do Amazonas",
    location: "Manaus, AM",
    description: "Formação em políticas sociais e intervenção comunitária, complementando a abordagem terapêutica com perspectiva social.",
    highlights: ["Graduada com distinção", "Bacharelado"]
  }
]