'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/shared/components/ui/card'
import { CheckCircle } from 'lucide-react'

interface CvPreviewCardProps {
  activeTab: string
}

export function CvPreviewCard({ activeTab }: CvPreviewCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (activeTab === 'overview') {
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [activeTab])

  return (
    <Card className={`border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-coral-50/30 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <CardContent className="p-8">
        <div className="relative">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div 
              className="h-80 flex items-center justify-center bg-cover bg-top" 
              style={{ backgroundImage: "url('/docs/Currículo_imagem_tumblr.png')" }}
            >
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-coral-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}