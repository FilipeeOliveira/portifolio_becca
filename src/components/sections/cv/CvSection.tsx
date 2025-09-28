'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { Accordion } from "@/shared/components/ui/accordion"
import { Eye, Clock, TrendingUp, Trophy, FileText } from 'lucide-react'
import { toast } from "sonner"

// Import data
import { timelineData } from '@/data/timeline'
import { skillsData } from '@/data/skills'
import { achievementsData } from '@/data/achievements'
import { educationData } from '@/data/education'

// Import components
import { 
  CvPreviewCard, 
  ActionCardWithModal, 
  TimelineItem, 
  EducationItem,
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
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-coral-50/20 to-white"
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
          <TabsList className="grid w-full grid-cols-4 mb-6 sm:mb-8 bg-transparent  p-0 relative z-10">
            <TabsTrigger 
              value="overview" 
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-4  transition-all duration-300 hover:text-coral-500 data-[state=active]:text-coral-500 cursor-pointer relative z-20 "
            >
              <Eye className="w-4 h-4 transition-transform duration-200" />
              <span className="text-xs sm:text-sm font-medium">Visão Geral</span>
            </TabsTrigger>
            <TabsTrigger 
              value="timeline" 
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-4  transition-all duration-300 hover:text-coral-500 data-[state=active]:text-coral-500 cursor-pointer relative z-20 "
            >
              <Clock className="w-4 h-4 transition-transform duration-200" />
              <span className="text-xs sm:text-sm font-medium">Timeline</span>
            </TabsTrigger>
            <TabsTrigger 
              value="skills" 
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-4  transition-all duration-300 hover:text-coral-500 data-[state=active]:text-coral-500 cursor-pointer relative z-20 "
            >
              <TrendingUp className="w-4 h-4 transition-transform duration-200" />
              <span className="text-xs sm:text-sm font-medium">Habilidades</span>
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-4  transition-all duration-300 hover:text-coral-500 data-[state=active]:text-coral-500 cursor-pointer relative z-20 "
            >
              <Trophy className="w-4 h-4 transition-transform duration-200" />
              <span className="text-xs sm:text-sm font-medium">Conquistas</span>
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
          <TabsContent value="timeline" className="space-y-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Minha Trajetória</h3>
                <p className="text-muted-foreground">Experiência profissional e formação acadêmica</p>
              </div>
              
              {/* Layout de duas colunas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Experiência Profissional - Coluna Esquerda */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Experiência Profissional</h4>
                  </div>
                  
                  <div className="relative">
                    <Accordion type="multiple" className="w-full space-y-6">
                      {timelineData.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} activeTab={activeTab} />
                      ))}
                    </Accordion>
                  </div>
                </div>

                {/* Formação Acadêmica - Coluna Direita */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Formação Acadêmica</h4>
                  </div>
                  
                  <div className="relative">
                    <Accordion type="multiple" className="w-full space-y-6">
                      {educationData.map((item, index) => (
                        <EducationItem key={item.id} item={item} index={index} activeTab={activeTab} />
                      ))}
                    </Accordion>
                  </div>
                </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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