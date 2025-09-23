# 🌟 Portfólio Rebecca Ariel

Portfólio profissional moderno e responsivo desenvolvido para Rebecca Ariel, estudante de Terapia Ocupacional e graduada em Serviço Social.

## ✨ Características

- **Design Moderno**: Interface limpa e elegante com sistema de cores coral personalizado
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Performance Otimizada**: Built com Next.js 15 e Turbopack
- **PDF Viewer**: Visualizador de currículo integrado com navegação por páginas
- **Scroll Spy**: Navegação dinâmica que destaca a seção ativa
- **Componentes Reutilizáveis**: Arquitetura modular com shadcn/ui

## 🚀 Tecnologias

- **Framework**: [Next.js 15.2.4](https://nextjs.org) com App Router
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS 4.1.11 com design system customizado
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com) + Radix UI
- **Ícones**: [Lucide React](https://lucide.dev)
- **PDF**: [react-pdf](https://github.com/wojtekmaj/react-pdf) para visualização
- **Fontes**: Work Sans & Open Sans do Google Fonts

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── (public)/          # Rotas públicas
│   │   └── portfolio/     # Página principal do portfólio
│   └── globals.css        # Estilos globais + sistema de design
├── shared/                # Recursos compartilhados
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/           # Componentes shadcn/ui
│   │   └── layout/       # Componentes de layout
│   ├── hooks/            # Custom hooks (useActiveSection)
│   ├── types/            # Definições TypeScript
│   └── utils/            # Utilitários (scroll, etc.)
└── lib/                  # Configurações e libs
```

## 🎨 Seções do Portfólio

- **Hero**: Apresentação pessoal com foto e biografia
- **Cursos**: Formações e treinamentos especializados
- **Experiência**: Histórico profissional com carousel automático
- **Currículo**: Visualizador PDF integrado com download direto
- **Contato**: Informações de contato e redes sociais

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clonar o repositório
git clone <repo-url>
cd portifolio_becca

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Executar build
npm start

# Linting
npm run lint
```

### Adicionando Componentes shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

## 🎯 Funcionalidades Especiais

- **PDF Viewer Avançado**: Modal full-screen com navegação entre páginas
- **Download Direto**: Botão que baixa o currículo automaticamente
- **Scroll Spy**: Indicação visual da seção ativa na navegação
- **Carousel Automático**: Rotação automática das experiências profissionais
- **Design System**: Sistema de cores coral consistente em todo projeto

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Menu Mobile**: Navegação adaptativa para telas pequenas

## 🚀 Deploy

O projeto está otimizado para deploy na [Vercel Platform](https://vercel.com):

```bash
# Build de produção
npm run build

# Deploy automático via Vercel CLI
vercel --prod
```

## 📄 Licença

Este projeto foi desenvolvido especificamente para Rebecca Ariel. Todos os direitos reservados.
