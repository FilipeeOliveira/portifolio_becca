'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import { Progress } from "@/shared/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/shared/components/ui/accordion"
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/shared/components/ui/dialog"
import { 
  Eye, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Loader2,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react'
import dynamic from 'next/dynamic'
import { Loading } from './Loading'

// Import react-pdf components dynamically to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then(mod => mod.Document),
  { 
    ssr: false
  }
)

const Page = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  { ssr: false }
)

// Timeline data
const timelineData = [
  {
    id: '2024',
    period: '02/2024 - Atualmente',
    title: 'Assistente Terapêutico',
    company: 'Samel - Terapias Integradas',
    location: 'Manaus, AM',
    description: 'Aplicando conhecimento nos métodos ABA e Denver, desenvolvendo estratégias terapêuticas personalizadas.',
    type: 'work',
    highlights: ['Método ABA', 'Método Denver', 'Estratégias Terapêuticas Personalizadas']
  },
  {
    id: '2023-2',
    period: '06/2023 - 09/2023',
    title: 'Assistente de Acolhimento',
    company: 'Hapvida - Medicina Preventiva',
    location: 'Manaus, AM',
    description: 'Atuei no acolhimento de familiares, realizando agendamentos iniciais e orientando sobre o fluxo das terapias. Prestei suporte administrativo e jurídico à equipe, contribuindo para a organização e eficiência dos processos.',
    type: 'work',
    highlights: ['Acolhimento de familiares', 'Orientações Iniciais', 'Suporte administrativo e jurídico']
  },
  {
    id: '2023-1',
    period: '11/2022 - 05/2023',
    title: 'Recepcionista',
    company: 'Hapvida - Medicina Preventiva',
    location: 'Manaus, AM',
    description: 'Atendimento ao público, acolhimento de familiares, orientação sobre fluxos de terapias e gestão de agendamentos.',
    type: 'work',
    highlights: ['Atendimento ao público', 'Gestão de agendamentos', 'Orientação sobre fluxos de terapias']
  },
  {
    id: '2022',
    period: '02/2019 - 12/2021',
    title: 'Estagiária',
    company: 'TRIBUNAL DE JUSTIÇA DO AMAZONAS',
    location: 'Manaus, AM',
    description: 'Atuação em mediação familiar, acompanhamento de processos e prestação de suporte jurídico em questões relacionadas ao Direito de Família, contribuindo para a resolução de conflitos e o andamento processual.',
    type: 'work',
    highlights: ['Mediação familiar', 'Acompanhamento processual', 'Suporte jurídico em Direito de Família']
  }
]

// Skills data
const skillsData = {
  'Terapia Ocupacional': [
    { name: 'Método ABA', level: 90, category: 'specialty' },
    { name: 'Método Denver', level: 85, category: 'specialty' },
    { name: 'Avaliação Funcional', level: 80, category: 'specialty' },
    { name: 'Intervenção Terapêutica', level: 88, category: 'specialty' }
  ],
  'Habilidades Interpessoais': [
    { name: 'Comunicação', level: 95, category: 'soft' },
    { name: 'Empatia', level: 98, category: 'soft' },
    { name: 'Trabalho em Equipe', level: 92, category: 'soft' },
    { name: 'Resolução de Problemas', level: 87, category: 'soft' }
  ],
  'Conhecimentos Técnicos': [
    { name: 'Políticas de Saúde', level: 85, category: 'technical' },
    { name: 'Documentação Clínica', level: 82, category: 'technical' },
    { name: 'Ética Profissional', level: 95, category: 'technical' },
    { name: 'Legislação Social', level: 80, category: 'technical' }
  ]
}

// Achievements data
const achievementsData = [
  {
    icon: Award,
    title: 'Especialização em ABA',
    description: 'Certificação em Applied Behavior Analysis',
    year: '2024'
  },
  {
    icon: Star,
    title: 'Graduação com Distinção',
    description: 'Serviço Social - UFAM',
    year: '2023'
  },
  {
    icon: Target,
    title: 'Estágio CEJUS',
    description: 'Experiência em mediação familiar',
    year: '2021'
  }
]


// Skill Bar Component
const SkillBar = ({ skill, index, isCardVisible }: { skill: { name: string, level: number, category: string }, index: number, isCardVisible: boolean }) => {
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

// Achievement Card Component
const AchievementCard = ({ achievement, index }: { achievement: typeof achievementsData[0], index: number }) => {
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

const PDFViewer = ({ file, isPreview = false }: { file: string, isPreview?: boolean }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Configure PDF worker only on client
    import('react-pdf').then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
    });
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1));

  if (!isClient) {
    return (
      <div className="w-full h-full bg-gray-100">
        <Loading message="Carregando PDF..." />
      </div>
    );
  }

  if (isPreview) {
    return (
      <div className="w-full h-full flex flex-col items-center bg-gray-100">
        <div className="flex-grow w-full overflow-y-auto flex justify-center">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<Loading />}
            error={
              <div className="flex items-center justify-center w-full h-full text-red-500">
                Falha ao carregar o PDF.
              </div>
            }
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={false} 
              width={256} 
            />
          </Document>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-gray-50">
      {/* PDF Container with scroll */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-gray-100 p-2 sm:p-4">
        <div className="min-h-full flex items-center justify-center">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<Loading message="Carregando PDF..." />}
            error={
              <div className="flex flex-col items-center justify-center w-full h-full text-red-500 p-8">
                <p className="text-lg font-medium">Erro ao carregar o PDF</p>
                <p className="text-sm text-muted-foreground mt-1">Verifique sua conexão e tente novamente</p>
              </div>
            }
            className="flex flex-col items-center"
          >
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={true}
              renderAnnotationLayer={true}
              width={isClient ? Math.min(window.innerWidth * 0.9, 800) : 600}
              className="shadow-lg border border-gray-200 bg-white"
            />
          </Document>
        </div>
      </div>
      
      {/* Navigation Controls - Fixed at bottom */}
      {numPages && (
        <div className="flex-shrink-0 flex items-center justify-between gap-4 px-4 py-3 bg-white border-t shadow-sm z-20">
          <Button 
            onClick={goToPrevPage} 
            disabled={pageNumber <= 1} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 min-w-[80px] sm:min-w-[100px]"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Anterior</span>
          </Button>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center">
            <p className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
              {pageNumber}/{numPages}
            </p>
            
            {/* Page Jump Input for multiple pages */}
            {numPages > 1 && (
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">Ir para:</span>
                <input
                  type="number"
                  min={1}
                  max={numPages}
                  value={pageNumber}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= numPages) {
                      setPageNumber(page);
                    }
                  }}
                  className="w-12 sm:w-16 px-1 sm:px-2 py-1 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
            )}
          </div>
          
          <Button 
            onClick={goToNextPage} 
            disabled={pageNumber >= numPages} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 min-w-[80px] sm:min-w-[100px]"
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export function CvSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const handleDownload = async () => {
    setDownloadLoading(true)
    try {
      const link = document.createElement('a')
      link.href = '/docs/CV-RebeccaAriel.pdf'
      link.download = 'CV-RebeccaAriel.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } finally {
      setTimeout(() => setDownloadLoading(false), 1000)
    }
  }

  return (
    <section id="curriculo" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-coral-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-coral-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-coral-200 rounded-full opacity-20 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-100/50 text-coral-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Minha Jornada Profissional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça Minha 
            <span className="text-transparent bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text"> Trajetória</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma jornada dedicada ao cuidado e desenvolvimento humano, combinando conhecimento técnico 
            com paixão pela transformação de vidas.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/50 backdrop-blur-sm">
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
              {/* CV Preview Card */}
              {(() => {
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
              })()}

              {/* Action Card */}
              {(() => {
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
                            className="border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                          >
                            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Visualizar PDF
                          </Button>
                        </DialogTrigger>
                        
                        <Button 
                          size="lg"
                          onClick={handleDownload}
                          disabled={downloadLoading}
                          className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                        >
                          {downloadLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          )}
                          {downloadLoading ? 'Baixando...' : 'Baixar Currículo'}
                        </Button>

                        {/* Enhanced Modal */}
                        <DialogContent 
                          className="!w-[95vw] !max-w-[95vw] !h-[95vh] !max-h-[95vh] p-0 overflow-hidden rounded-xl border-0 flex flex-col"
                          showCloseButton={false}
                        >
                          <DialogHeader className="sr-only">
                            <DialogTitle>Currículo de Rebecca Ariel</DialogTitle>
                            <DialogDescription>
                              Visualizador completo do currículo profissional
                            </DialogDescription>
                          </DialogHeader>
                          
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 group"
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
                    </div>
                  </div>
                </CardContent>
                  </Card>
                )
              })()}
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Linha do Tempo Profissional</h3>
                <p className="text-muted-foreground">Minha jornada de crescimento e desenvolvimento</p>
              </div>
              
              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-coral-200 to-coral-400" />
                
                <Accordion type="multiple" className="w-full space-y-6">
                  {timelineData.map((item, index) => {
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
                        key={item.id} 
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
                  })}
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
              {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
                const [isVisible, setIsVisible] = useState(false)
                
                useEffect(() => {
                  if (activeTab === 'skills') {
                    const timer = setTimeout(() => setIsVisible(true), categoryIndex * 200)
                    return () => clearTimeout(timer)
                  } else {
                    setIsVisible(false)
                  }
                }, [categoryIndex, activeTab])

                return (
                  <Card 
                    key={category} 
                    className={`border border-coral-100/50 shadow-lg hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground flex items-center gap-2">
                        <div className="w-8 h-8 bg-coral-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-coral-600" />
                        </div>
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skills.map((skill, index) => (
                        <SkillBar key={skill.name} skill={skill} index={index} isCardVisible={isVisible} />
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
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