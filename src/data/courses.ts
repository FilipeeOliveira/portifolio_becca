import { 
  Brain, 
  Baby, 
  Stethoscope,
  Scale,
  Volume2
} from "lucide-react"

export const coursesData = [
  {
    id: 1,
    title: "Mediadores e Conciliadores Judiciais",
    description: "Formação completa em mediação e conciliação judicial para resolução de conflitos familiares e civis.",
    duration: "100h",
    institution: "NUPEMEC - TJAM",
    completedDate: "Finalizado 12/2021",
    icon: Scale,
    category: "juridico"
  },
  {
    id: 2,
    title: "Assistente Terapêutico em Modelo Naturalista/Denver",
    description: "Especialização em intervenção precoce para crianças com autismo usando o modelo naturalista Denver.",
    duration: "40h",
    institution: "CLÍNICA PAIS & FILHOS",
    completedDate: "Finalizado 21/07/2024",
    icon: Baby,
    category: "terapeutico"
  },
  {
    id: 3,
    title: "Assistente Terapêutico em ABA",
    description: "Applied Behavior Analysis com foco em desenvolvimento de habilidades comportamentais e sociais.",
    duration: "40h",
    institution: "CLÍNICA PAIS & FILHOS", 
    completedDate: "Finalizado 17/03/2024",
    icon: Brain,
    category: "terapeutico"
  },
  {
    id: 4,
    title: "Workshop CAA em Prática",
    description: "Workshop prático sobre Comunicação Alternativa e Aumentativa para desenvolvimento de habilidades comunicativas.",
    duration: "8h",
    institution: "FÁBULA - FONOAUDIOLOGIA",
    completedDate: "Finalizado 25/02/2024",
    icon: Volume2,
    category: "comunicacao"
  },
  {
    id: 5,
    title: "Treinamento IDADI",
    description: "Inventário Dimensional de Avaliação do Desenvolvimento Infantil para análise especializada do desenvolvimento.",
    duration: "2h",
    institution: "PSICÓLOGA ANDRESSA UCHOA",
    completedDate: "Finalizado 02/03/2024",
    icon: Stethoscope,
    category: "avaliacao"
  }
]