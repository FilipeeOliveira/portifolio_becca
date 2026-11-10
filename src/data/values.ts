import { Award, CheckCircle, User, Users, Zap, type LucideIcon } from "lucide-react"

export const missao =
  "Democratizar o acesso à Terapia Ocupacional de qualidade, oferecendo suporte especializado que respeita a individualidade e o potencial de cada pessoa. Minha missão é promover a autonomia, a funcionalidade e a participação social através de um cuidado personalizado e fundamentado em evidências científicas."

export const valores: { icon: LucideIcon; titulo: string; descricao: string }[] = [
  { icon: User, titulo: "Humanização no cuidado", descricao: "Tratamento compassivo e personalizado, respeitando a dignidade e singularidade de cada pessoa." },
  { icon: Award, titulo: "Prática baseada em evidências", descricao: "Intervenções fundamentadas em pesquisas científicas e melhores práticas da Terapia Ocupacional." },
  { icon: Users, titulo: "Respeito à individualidade", descricao: "Reconhecimento das necessidades únicas, preferências e objetivos de cada cliente." },
  { icon: Zap, titulo: "Compromisso com a excelência", descricao: "Busca contínua pela qualidade superior em todos os aspectos do atendimento terapêutico." },
  { icon: CheckCircle, titulo: "Foco na autonomia e participação", descricao: "Promoção da independência funcional e participação ativa na sociedade." },
]
