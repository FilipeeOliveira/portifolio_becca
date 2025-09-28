'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Badge } from '@/shared/components/ui/badge'
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/shared/components/ui/dialog'
import { Eye, Download, Loader2 } from 'lucide-react'
import { PDFViewer } from '../pdf-viewer'

interface ActionCardWithModalProps {
  activeTab: string
  handleDownload: () => Promise<void>
  downloadLoading: boolean
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

export function ActionCardWithModal({ 
  activeTab, 
  handleDownload, 
  downloadLoading, 
  isModalOpen, 
  setIsModalOpen 
}: ActionCardWithModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (activeTab === 'overview') {
      const timer = setTimeout(() => setIsVisible(true), 300)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [activeTab])

  return (
    <Card className={`border-0 shadow-xl bg-gradient-to-br from-white via-coral-50/10 to-white transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <CardContent className="p-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Explore Minha Jornada
              <span className="block text-lg font-normal text-muted-foreground mt-2">
                Descubra minha experiência profissional e formação acadêmica
              </span>
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-coral-500 text-white">Terapia Ocupacional</Badge>
              <Badge variant="secondary">Método ABA</Badge>
              <Badge variant="secondary">Denver</Badge>
              <Badge variant="secondary">Serviço Social</Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Visualizar PDF
                </Button>
              </DialogTrigger>
              
              <DialogContent 
                className="!w-[95vw] !max-w-[95vw] !h-[95vh] !max-h-[95vh] p-0 overflow-hidden rounded-xl border-0 flex flex-col"
              >
                <DialogHeader className="sr-only">
                  <DialogTitle>Currículo de Rebecca Ariel</DialogTitle>
                  <DialogDescription>
                    Visualizador completo do currículo profissional
                  </DialogDescription>
                </DialogHeader>
                
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 group cursor-pointer"
                  aria-label="Fechar"
                >
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="w-full h-full flex flex-col min-h-0">
                  <PDFViewer file="/docs/CV-RebeccaAriel.pdf" />
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg"
              onClick={handleDownload}
              disabled={downloadLoading}
              className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl cursor-pointer"
            >
              {downloadLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
              {downloadLoading ? 'Baixando...' : 'Baixar Currículo'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}