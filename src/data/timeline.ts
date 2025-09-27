export interface TimelineItem {
  id: string
  period: string
  title: string
  company: string
  location: string
  description: string
  type: 'work' | 'education'
  highlights: string[]
}

export const timelineData: TimelineItem[] = [
  {
    id: '2024',
    period: '02/2024 - Atualmente',
    title: 'Assistente Terapêutico',
    company: 'Samel - Terapias Integradas',
    location: 'Manaus, AM',
    description: 'Aplicando conhecimento nos métodos ABA e Denver, desenvolvendo estratégias terapêuticas personalizadas.',
    type: 'work',
    highlights: ['Método ABA', 'Método Denver', 'Estratégias Terapêuticas Personalizadas']
  },
  {
    id: '2023-2',
    period: '06/2023 - 09/2023',
    title: 'Assistente de Acolhimento',
    company: 'Hapvida - Medicina Preventiva',
    location: 'Manaus, AM',
    description: 'Atuei no acolhimento de familiares, realizando agendamentos iniciais e orientando sobre o fluxo das terapias. Prestei suporte administrativo e jurídico à equipe, contribuindo para a organização e eficiência dos processos.',
    type: 'work',
    highlights: ['Acolhimento de familiares', 'Orientações Iniciais', 'Suporte administrativo e jurídico']
  },
  {
    id: '2023-1',
    period: '11/2022 - 05/2023',
    title: 'Recepcionista',
    company: 'Hapvida - Medicina Preventiva',
    location: 'Manaus, AM',
    description: 'Atendimento ao público, acolhimento de familiares, orientação sobre fluxos de terapias e gestão de agendamentos.',
    type: 'work',
    highlights: ['Atendimento ao público', 'Gestão de agendamentos', 'Orientação sobre fluxos de terapias']
  },
  {
    id: '2022',
    period: '02/2019 - 12/2021',
    title: 'Estagiária',
    company: 'TRIBUNAL DE JUSTIÇA DO AMAZONAS',
    location: 'Manaus, AM',
    description: 'Atuação em mediação familiar, acompanhamento de processos e prestação de suporte jurídico em questões relacionadas ao Direito de Família, contribuindo para a resolução de conflitos e o andamento processual.',
    type: 'work',
    highlights: ['Mediação familiar', 'Acompanhamento processual', 'Suporte jurídico em Direito de Família']
  }
]