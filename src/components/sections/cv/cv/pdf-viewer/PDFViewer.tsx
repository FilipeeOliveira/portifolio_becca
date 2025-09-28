'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from '@/shared/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Loading } from '@/components/Loading'

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

interface PDFViewerProps {
  file: string
  isPreview?: boolean
}

export function PDFViewer({ file, isPreview = false }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Configure PDF worker only on client
    import('react-pdf').then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`
    })
  }, [])

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }, [])

  const goToPrevPage = () => setPageNumber(prev => Math.max(prev - 1, 1))
  const goToNextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages || 1))

  if (!isClient) {
    return <Loading />
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
    )
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
  )
}