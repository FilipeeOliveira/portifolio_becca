'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { Accordion } from "@/shared/components/ui/accordion"
import { Eye, Clock, TrendingUp, Award, FileText } from 'lucide-react'
import { toast } from "sonner"

// Import data
import { timelineData } from '@/data/timeline'
import { skillsData } from '@/data/skills'
import { achievementsData } from '@/data/achievements'

// Import components
import { 
  CvPreviewCard, 
  ActionCardWithModal, 
  TimelineItem, 
  SkillsCategory, 
  AchievementCard 
} from './cv'

export function CvSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  // Listen for tab change events from navigation
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail.tab)
    }

    window.addEventListener('changeTab', handleTabChange as EventListener)
    return () => window.removeEventListener('changeTab', handleTabChange as EventListener)
  }, [])

  const handleDownload = async () => {
    setDownloadLoading(true)
    try {
      const link = document.createElement('a')
      link.href = '/docs/CV-RebeccaAriel.pdf'
      link.download = 'CV-RebeccaAriel.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Show success toast
      toast.success('Currículo baixado com sucesso!', {
        description: 'O arquivo foi salvo na sua pasta de downloads.',
        duration: 3000,
      })
    } catch {
      toast.error('Erro ao baixar currículo', {
        description: 'Tente novamente em alguns instantes.',
      })
    } finally {
      setTimeout(() => setDownloadLoading(false), 1000)
    }
  }

  return (
    <section 
      id="curriculo" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coral-50/30 via-white to-coral-50/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/70 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Experiência Profissional
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Minha <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text">Experiência</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma jornada dedicada ao cuidado e desenvolvimento humano, combinando conhecimento técnico 
            com paixão pela transformação de vidas.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Visão Geral</span>
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Timeline</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Habilidades</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Conquistas</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <CvPreviewCard activeTab={activeTab} />
              <ActionCardWithModal 
                activeTab={activeTab} 
                handleDownload={handleDownload} 
                downloadLoading={downloadLoading} 
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} 
              />
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Linha do Tempo Profissional</h3>
                <p className="text-muted-foreground">Minha jornada de crescimento e desenvolvimento</p>
              </div>
              
              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-coral-200 to-coral-400" />
                
                <Accordion type="multiple" className="w-full space-y-6">
                  {timelineData.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} activeTab={activeTab} />
                  ))}
                </Accordion>
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Minhas Competências</h3>
              <p className="text-muted-foreground">Habilidades desenvolvidas ao longo da minha carreira</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                <SkillsCategory 
                  key={category} 
                  category={category} 
                  skills={skills} 
                  categoryIndex={categoryIndex} 
                  activeTab={activeTab} 
                />
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Principais Conquistas</h3>
              <p className="text-muted-foreground">Marcos importantes da minha trajetória profissional</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {achievementsData.map((achievement, index) => (
                <AchievementCard key={achievement.title} achievement={achievement} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}