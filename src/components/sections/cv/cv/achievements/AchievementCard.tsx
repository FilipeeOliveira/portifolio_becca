'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Badge } from '@/shared/components/ui/badge'
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
    <Card className={`border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-coral-50/30 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
            <p className="text-muted-foreground text-sm mb-1">{achievement.description}</p>
            <Badge className="bg-coral-100 text-coral-700 text-xs">
              {achievement.year}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}