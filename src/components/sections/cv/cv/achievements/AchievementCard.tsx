'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Achievement } from '@/data/achievements'

interface AchievementCardProps {
  achievement: Achievement
  index: number
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150)
    return () => clearTimeout(timer)
  }, [index])
  
  const Icon = achievement.icon

  return (
    <Card className={`h-full border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm group ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 bg-coral-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-8 h-8 text-coral-600 relative z-10 group-hover:text-coral-700 transition-colors duration-300" />
        </div>
        
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-foreground group-hover:text-coral-600 transition-colors duration-300">
            {achievement.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
        </div>
        
        <Badge variant="outline" className="border-coral-200 text-coral-600 bg-coral-50/50">
          {achievement.year}
        </Badge>
      </CardContent>
    </Card>
  )
}