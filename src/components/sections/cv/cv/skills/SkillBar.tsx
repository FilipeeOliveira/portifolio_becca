'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/shared/components/ui/progress'
import { Skill } from '@/data/skills'

interface SkillBarProps {
  skill: Skill
  index: number
  isCardVisible: boolean
}

export function SkillBar({ skill, index, isCardVisible }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  
  useEffect(() => {
    if (isCardVisible) {
      const timer = setTimeout(() => setAnimatedLevel(skill.level), index * 100)
      return () => clearTimeout(timer)
    } else {
      setAnimatedLevel(0)
    }
  }, [skill.level, index, isCardVisible])
  
  return (
    <div className="space-y-2 group cursor-default">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground group-hover:text-coral-600 transition-colors duration-200">
          {skill.name}
        </span>
        <span className="text-xs text-coral-600 font-medium bg-coral-50 px-2 py-1 rounded-full group-hover:bg-coral-100 transition-colors duration-200">
          {skill.level}%
        </span>
      </div>
      
      <div className="transform group-hover:scale-[1.02] transition-transform duration-200">
        <Progress 
          value={animatedLevel} 
          className="h-2 bg-coral-50 group-hover:bg-coral-100 transition-colors duration-200 [&>div]:bg-gradient-to-r [&>div]:from-coral-500 [&>div]:to-coral-600 [&>div]:transition-all [&>div]:duration-1000 [&>div]:ease-out"
        />
      </div>
    </div>
  )
}