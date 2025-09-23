'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from "@/shared/components/ui/button"
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/shared/components/ui/dialog"
import { Eye, Download, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'

// Import react-pdf components dynamically to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then(mod => mod.Document),
  { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center w-full h-full">
      <Loader2 className="h-8 w-8 animate-spin text-coral-500" />
      <span className="ml-2 text-coral-600">Carregando...</span>
    </div>
  }
)

const Page = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  { ssr: false }
)

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
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <Loader2 className="h-8 w-8 animate-spin text-coral-500" />
        <span className="ml-2 text-coral-600">Carregando PDF...</span>
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
            loading={
              <div className="flex items-center justify-center w-full h-full">
                <Loader2 className="h-8 w-8 animate-spin text-coral-500" />
              </div>
            }
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
      {/* PDF Container */}
      <div className="flex-1 min-h-0 overflow-auto flex items-center justify-center p-4">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center w-full h-full">
              <Loader2 className="h-8 w-8 animate-spin text-coral-500" />
              <span className="ml-2 text-coral-600">Carregando PDF...</span>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center w-full h-full text-red-500">
              <p className="text-lg font-medium">Erro ao carregar o PDF</p>
              <p className="text-sm text-gray-600 mt-1">Verifique sua conexão e tente novamente</p>
            </div>
          }
          className="max-w-full max-h-full"
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={isClient ? Math.min(window.innerWidth - 150, 900) : 800}
            className="shadow-lg mx-auto"
          />
        </Document>
      </div>
      
      {/* Navigation Controls - Fixed at bottom */}
      {numPages && (
        <div className="flex-shrink-0 flex items-center justify-between gap-4 px-6 py-3 bg-white border-t shadow-sm z-10">
          <Button 
            onClick={goToPrevPage} 
            disabled={pageNumber <= 1} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 min-w-[100px]"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>
          
          <div className="flex items-center gap-4 flex-1 justify-center">
            <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Página {pageNumber} de {numPages}
            </p>
            
            {/* Page Jump Input for multiple pages */}
            {numPages > 1 && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 whitespace-nowrap">Ir para:</span>
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
                  className="w-16 px-2 py-1 text-xs border rounded focus:outline-none focus:ring-2 focus:ring-coral-500"
                />
              </div>
            )}
          </div>
          
          <Button 
            onClick={goToNextPage} 
            disabled={pageNumber >= numPages} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 min-w-[100px]"
          >
            Próximo
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export function CvSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="curriculo" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-coral-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-coral-500 font-medium text-sm sm:text-base mb-2 uppercase">Conheça</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Minha Trajetória
          </h2>
        </div>
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* CV Preview */}
            <div className="relative h-60 sm:h-80 lg:h-96 p-6 sm:p-8 flex items-center justify-center bg-gray-55">
              <div className="relative bg-white rounded-lg shadow-lg w-full max-w-64 h-full overflow-hidden">
                <div className="w-full h-full border-0 blur-sm opacity-60">
                   <PDFViewer file="/docs/CV-RebeccaAriel.pdf" isPreview={true} />
                </div>
                <div className="absolute inset-0 bg-white/40"></div>
              </div>
            </div>

            {/* CV Download Content */}
            <div className="p-6 sm:p-8 lg:p-12 relative">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  Confira meu currículo completo
                  <br />e conheça minha trajetória profissional.
                </h3>

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-coral-500 text-coral-500 hover:bg-coral-50 hover:text-coral-600 px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Visualizar
                      </Button>
                    </DialogTrigger>
                    
                    <Button
                      className="bg-coral-500 hover:bg-coral-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                      onClick={() => {
                        window.open('/docs/CV-RebeccaAriel.pdf', '_blank')
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Baixar Currículo
                    </Button>
                  </div>

                  <DialogContent 
                    className="!w-[95vw] !max-w-[95vw] !h-[95vh] !max-h-[95vh] p-0 overflow-hidden rounded-lg border-0 !grid-rows-1"
                    showCloseButton={false}
                  >
                    <DialogHeader className="sr-only">
                      <DialogTitle>Currículo de Rebecca Ariel</DialogTitle>
                      <DialogDescription>
                        Visualizador de PDF para o currículo completo de Rebecca Ariel.
                      </DialogDescription>
                    </DialogHeader>
                    
                    {/* Custom Close Button with higher z-index */}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                      aria-label="Fechar"
                    >
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    
                    <div className="w-full h-full flex flex-col">
                      <PDFViewer file="/docs/CV-RebeccaAriel.pdf" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Decorative dots */}
              <div className="hidden sm:block absolute bottom-6 lg:bottom-8 right-6 lg:right-8 opacity-30">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-300 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-400 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-200 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-400 rounded-full"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-coral-300 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-coral-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}