// Dados pessoais, contatos e URL pública. Centralizados aqui para trocar sem mexer nos componentes.
export const site = {
  nome: "Rebecca Ariel",
  papel: "Estudante de Terapia Ocupacional",
  cidade: "Manaus - AM",
  url: process.env.NEXT_PUBLIC_URL ?? "https://portifolio-becca.vercel.app",
  // fotos do ensaio na sala de integração sensorial (public/img, versões otimizadas para a web)
  fotos: {
    anel: "/img/becca-anel.webp",
    sorriso: "/img/becca-sorriso.webp",
    livro: "/img/becca-livro.webp",
    argolas: "/img/becca-argolas.webp",
    balanco: "/img/becca-balanco.webp",
  },
  stats: [
    { valor: "2+", rotulo: "anos como Assistente Terapêutica" },
    { valor: "30+", rotulo: "pacientes atendidos" },
    { valor: "9+", rotulo: "certificações" },
  ],
}

export const contatos = [
  { id: "whatsapp", rotulo: "WhatsApp", valor: "(92) 98586-2173", href: "https://wa.me/5592985862173" },
  { id: "email", rotulo: "E-mail", valor: "rebeccaariel.gg@gmail.com", href: "mailto:rebeccaariel.gg@gmail.com" },
  { id: "linkedin", rotulo: "LinkedIn", valor: "Rebecca Ariel", href: "https://www.linkedin.com/in/rebecca-ariel-b58153225" },
  { id: "instagram", rotulo: "Instagram", valor: "@becca_futura_t.o", href: "https://www.instagram.com/becca_futura_t.o" },
] as const

export type ContatoId = (typeof contatos)[number]["id"]
