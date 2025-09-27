'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/shared/components/ui/badge'
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/shared/components/ui/accordion'
import { Target, MapPin } from 'lucide-react'
import { TimelineItem as TimelineItemType } from '../../../_data/timeline'

interface TimelineItemProps {
  item: TimelineItemType
  index: number
  activeTab: string
}

export function TimelineItem({ item, index, activeTab }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (activeTab === 'timeline') {
      const timer = setTimeout(() => setIsVisible(true), index * 200)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [index, activeTab])

  return (
    <div 
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-18px] top-6 w-4 h-4 bg-coral-500 rounded-full border-4 border-white shadow-lg z-10">
        <div className="absolute inset-0 bg-coral-500 rounded-full animate-ping opacity-20" />
      </div>
      
      <AccordionItem 
        value={item.id}
        className="border border-coral-100/50 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 ml-4"
      >
        <AccordionTrigger className="px-6 py-4 hover:no-underline">
          <div className="flex items-center gap-4 w-full">
            <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-coral-600" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                <Badge variant="secondary" className="bg-coral-100 text-coral-700 text-xs">
                  {item.period}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-coral-600">{item.company}</span>
                <span>•</span>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {item.location}
                </div>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="ml-16 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <Badge 
                  key={highlight} 
                  variant="outline" 
                  className="text-xs border-coral-200 text-coral-600 bg-coral-50/50"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  )
}