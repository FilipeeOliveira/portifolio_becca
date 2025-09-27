export interface Skill {
  name: string
  level: number
  category: 'specialty' | 'soft' | 'technical'
}

export interface SkillsData {
  [category: string]: Skill[]
}

export const skillsData: SkillsData = {
  'Terapia Ocupacional': [
    { name: 'Método ABA', level: 90, category: 'specialty' },
    { name: 'Método Denver', level: 85, category: 'specialty' },
    { name: 'Avaliação Funcional', level: 80, category: 'specialty' },
    { name: 'Intervenção Terapêutica', level: 88, category: 'specialty' }
  ],
  'Habilidades Interpessoais': [
    { name: 'Comunicação', level: 95, category: 'soft' },
    { name: 'Empatia', level: 98, category: 'soft' },
    { name: 'Trabalho em Equipe', level: 92, category: 'soft' },
    { name: 'Resolução de Problemas', level: 87, category: 'soft' }
  ],
  'Conhecimentos Técnicos': [
    { name: 'Políticas de Saúde', level: 85, category: 'technical' },
    { name: 'Documentação Clínica', level: 82, category: 'technical' },
    { name: 'Ética Profissional', level: 95, category: 'technical' },
    { name: 'Legislação Social', level: 80, category: 'technical' }
  ]
}