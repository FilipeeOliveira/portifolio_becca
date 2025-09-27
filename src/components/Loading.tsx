'use client'

import { Loader2 } from 'lucide-react'

interface LoadingProps {
  message?: string
  iconSize?: number
  className?: string
}

export function Loading({ 
  message = 'Carregando...', 
  iconSize = 8, 
  className = '' 
}: LoadingProps) {
  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <Loader2 className={`h-${iconSize} w-${iconSize} animate-spin text-coral-500`} />
      <span className="ml-2 text-coral-600">{message}</span>
    </div>
  )
}