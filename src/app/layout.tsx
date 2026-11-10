import type React from "react"
import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Figtree } from "next/font/google"
import { site, contatos } from "@/data/site"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"], display: "swap", variable: "--font-figtree" })
// eixos de tamanho óptico e largura: títulos grandes ganham desenho de display automaticamente
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], display: "swap", axes: ["opsz", "wdth"], variable: "--font-bricolage" })

const titulo = "Rebecca Ariel - Estudante de Terapia Ocupacional"
const descricao =
  "Portfólio de Rebecca Ariel, estudante de Terapia Ocupacional em Manaus, com experiência como Assistente Terapêutica nos modelos ABA e Denver."

export const metadata: Metadata = {
  // antes caía em http://localhost:3000 quando NEXT_PUBLIC_URL não estava definida e a prévia de links saía sem imagem
  metadataBase: new URL(site.url),
  title: titulo,
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    title: titulo,
    description: descricao,
    url: "/",
    images: [{ url: "/img/og-rebecca.jpg", width: 1200, height: 630, alt: titulo }],
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = { themeColor: "#fffaf7" }

const pessoa = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.nome,
  jobTitle: site.papel,
  url: site.url,
  image: `${site.url}${site.fotos.anel}`,
  address: { "@type": "PostalAddress", addressLocality: "Manaus", addressRegion: "AM", addressCountry: "BR" },
  sameAs: contatos.filter((c) => c.id === "linkedin" || c.id === "instagram").map((c) => c.href),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} ${bricolage.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pessoa) }} />
      </body>
    </html>
  )
}
