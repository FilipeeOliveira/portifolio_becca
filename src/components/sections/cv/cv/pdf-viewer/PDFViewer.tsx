'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
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
  }, [])

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }, [])

  const goToPrevPage = () => setPageNumber(page => Math.max(1, page - 1))
  const goToNextPage = () => setPageNumber(page => Math.min(numPages || 1, page + 1))

  if (!isClient) {
    return <Loading />
  }

  return (
    <div className="w-full h-full flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-96">
              <div className="flex items-center gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-coral-500" />
                <span className="text-muted-foreground">Carregando PDF...</span>
              </div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <p className="text-red-500 mb-2">Erro ao carregar o PDF</p>
                <p className="text-sm text-muted-foreground">Verifique se o arquivo existe</p>
              </div>
            </div>
          }
          className="max-w-full"
        >
          <Page
            pageNumber={pageNumber}
            width={isPreview ? 300 : undefined}
            scale={isPreview ? 0.8 : 1.2}
            className="shadow-lg"
            loading={
              <div className="flex items-center justify-center h-96 bg-white rounded shadow">
                <Loader2 className="w-6 h-6 animate-spin text-coral-500" />
              </div>
            }
          />
        </Document>
      </div>

      {/* Navigation Controls */}
      {numPages && (
        <div className="flex-shrink-0 flex items-center justify-between gap-4 px-4 py-3 bg-white border-t shadow-sm z-20">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Página</span>
            <span className="font-medium">{pageNumber}</span>
            <span className="text-muted-foreground">de</span>
            <span className="font-medium">{numPages}</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="flex items-center gap-2"
          >
            Próxima
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}