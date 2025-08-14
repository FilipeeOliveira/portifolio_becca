import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  title: "Rebecca Ariel - Estudante de Terapia Ocupacional",
  description: "Portfólio profissional de Rebecca Ariel, Estudante de Terapia Ocupacional.",
  openGraph: {
    images: [
      {
        url: "/img/meta-image-perfil.png", 
        width: 1200,
        height: 630,
        alt: "Rebecca Ariel - Estudante de Terapia Ocupacional",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
