'use client'

import { useState, useEffect } from 'react'
import { Skill } from '../../../_data/skills'

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
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-coral-600 font-medium">{skill.level}%</span>
      </div>
      <div className="relative h-2 bg-coral-50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-coral-500 to-coral-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}