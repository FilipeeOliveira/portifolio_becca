'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { TrendingUp } from 'lucide-react'
import { Skill } from '../../../_data/skills'
import { SkillBar } from './SkillBar'

interface SkillsCategoryProps {
  category: string
  skills: Skill[]
  categoryIndex: number
  activeTab: string
}

export function SkillsCategory({ category, skills, categoryIndex, activeTab }: SkillsCategoryProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (activeTab === 'skills') {
      const timer = setTimeout(() => setIsVisible(true), categoryIndex * 200)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [categoryIndex, activeTab])

  return (
    <Card 
      className={`border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <CardHeader>
        <CardTitle className="text-lg text-foreground flex items-center gap-2">
          <div className="w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-coral-600" />
          </div>
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} isCardVisible={isVisible} />
        ))}
      </CardContent>
    </Card>
  )
}