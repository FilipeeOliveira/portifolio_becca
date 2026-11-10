# Portfólio Rebecca Ariel

Portfólio pessoal de Rebecca Ariel, estudante de Terapia Ocupacional em Manaus - AM, com experiência como Assistente Terapêutica (ABA e Modelo Denver). Página única, sem backend.

- Produção: https://portifolio-becca.vercel.app (deploy automático da Vercel a cada push na `main`).
- Repositório: https://github.com/FilipeeOliveira/portifolio_becca. Commit e push só quando o usuário pedir; push na `main` publica em produção.

## Stack
- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4 (sem `tailwind.config`; tema todo em `src/app/globals.css`).
- Dependências mínimas: `@radix-ui/react-dialog` (só para o menu lateral), `motion` (animações), `lucide-react`, `clsx` + `tailwind-merge`. Não adicionar bibliotecas sem necessidade (não há carrossel, abas ou leitor de PDF).
- Scripts: `npm run dev`, `npm run build`, `npm run lint` (`eslint .`, config "flat" do Next 16 em `eslint.config.mjs`).

## Conceito visual: "o anel"
As fotos são de um ensaio numa sala de integração sensorial (túnel em anel, almofadas, argolas). O anel é a linguagem do site: fotos em círculo, números em discos, anéis numerando valores e cursos, anel de progresso da carga horária, anéis marcando a trajetória e separando a faixa de abordagens.
- Cores (tokens em `globals.css`): papel `--paper #fffaf7`, tinta `--ink #2b1a1a`, `--primary #c93a3a` (botões, 5.1:1 com branco), `--coral-ink #b8352f` (texto/destaques, 5.7:1), escala `coral-50..600`. O coral claro (`coral-500 #ec5a5a`) só em formas e títulos grandes (contraste baixo para texto pequeno).
- Fontes (`layout.tsx`, via next/font): **Bricolage Grotesque** nos títulos (`font-display`, aplicada a h1-h4) e **Figtree** no texto (`font-sans`). `font-serif` aponta para a display (o menu usa essa classe).
- Classes utilitárias próprias: `.accent` (coral na fonte display), `.marca` (marca-texto coral em palavras-chave), `.gira`, `.marquee`, `.rise` (entrada do hero), `.reveal` (entrada ao rolar, CSS puro com `animation-timeline: view()`).

## Estrutura
- `src/app/page.tsx`: monta a página na ordem Header, Hero, faixa de abordagens, Missão, Formação, Trajetória, Contato, Footer.
- `src/app/layout.tsx`: fontes, metadados (Open Graph com `/img/og-rebecca.jpg` 1200x630) e JSON-LD `Person`. `sitemap.ts` e `robots.ts` ao lado.
- `next.config.ts`: redirect permanente `/portfolio` -> `/` (o site antigo morava em /portfolio).
- `src/components/layout/Header.tsx`: menu (pílula translúcida ao rolar, seção ativa via `hooks/useActiveSection.ts` com IntersectionObserver, botão "Fale comigo", menu lateral no celular com `shared/components/ui/sheet.tsx`). O usuário pediu para manter o menu como está.
- `src/components/sections/`:
  - `hero/HeroSection.tsx` + `hero/HeroRings.tsx` (client): nome grande; a composição em anéis (foto em círculo, anéis, números em discos) fica no HeroRings, com profundidade na rolagem.
  - `ApproachesMarquee.tsx`: faixa rolando (lista repetida 3x por metade para cobrir telas largas).
  - `mission/MissionSection.tsx`: foto com o livro, frase de destaque, missão e valores.
  - `courses/CoursesSection.tsx` (client): lista interativa + painel de prévia (padrão do bloco Shadcn Space `services-02`), anel de carga horária; clique/foco/toque; no celular abre no próprio item; painel com altura estável (todos os cursos empilhados na mesma célula da grade).
  - `journey/JourneySection.tsx`: experiência + formação agrupadas por ano, foto do balanço fixa ao lado (desktop), competências em grupos.
  - `contact/ContactSection.tsx`: chamada num círculo coral + canais em pílulas (links reais com `aria-label`).
- `src/components/icons.tsx`: ícones de marcas (WhatsApp, Instagram, LinkedIn); o lucide não tem logos.

## Onde editar conteúdo (`src/data/`)
- `site.ts`: nome, papel, cidade, URL pública, caminhos das fotos, números do hero e contatos (WhatsApp, e-mail, LinkedIn, Instagram).
- `values.ts`: missão e os 5 valores. `courses.ts`: cursos (ícone, horas, instituição, data, categoria). `timeline.ts` e `education.ts`: experiência e formação. `skills.ts`: competências (o campo `level` não é exibido). `navigation.ts`: itens do menu (os ids `sobre`, `sobre-mim`, `especialidades`, `curriculo`, `contato` são mantidos para não quebrar links antigos).
- Fotos em `public/img/becca-*.webp` (originais em alta em `/home/north/Imagens/fotos becca`; gerar versões web antes de usar, cerca de 1000px e qualidade 80).

## Regras do projeto
- Conteúdo é real: não inventar cursos, números, títulos ou especializações. Ela é ESTUDANTE de TO (nunca chamar de "Terapeuta Ocupacional" em textos ou alt).
- Animações: entradas simples em CSS (`.rise`, `.reveal`). `motion` é permitido para interações e efeitos ligados à rolagem, com estes cuidados:
  - nunca deixar conteúdo invisível no HTML esperando o JavaScript (nada de `initial={{ opacity: 0 }}` em conteúdo; usar `initial={false}` para o HTML já sair no estado final);
  - usar `LazyMotion` + componentes `m` (bundle menor; `domAnimation`, ou `domMax` quando precisar de `layoutId`);
  - respeitar movimento reduzido (`MotionConfig reducedMotion="user"` ou `useReducedMotion`, que também zera efeitos de scroll);
  - animar só `transform`/`opacity` (nada de `top`/`left`/`width`, que geram CLS).
  - Onde já é usado: `hero/HeroRings.tsx` (profundidade na rolagem: cada camada da composição se move numa velocidade) e `courses/CoursesSection.tsx` (destaque que desliza com `layoutId`, troca do painel com fade, anel de horas se preenchendo).
- Grids responsivos sempre com `grid-cols-1` no mobile e `min-w-0` nos filhos (evita rolagem horizontal). Containers que trocam conteúdo devem ter altura estável.
- Links e botões com `href` real e nome acessível.
- `components.json` aponta `css` para `app/globals.css`, mas o arquivo está em `src/app/`: ao usar o CLI do shadcn, conferir o que ele altera. Blocos do Shadcn Space foram adaptados lendo o código do registro, não instalados pelo CLI.

## Verificação antes de entregar
`npm run build` e `npm run lint` sem erros; testar no Chrome headless (Playwright em `~/.cache/ms-playwright/chromium-*/chrome-linux64/chrome`) via CDP: sem rolagem horizontal de 320 a 2560px, CLS 0, fontes aplicadas, capturas reais rolando a página. Ao subir o servidor local, matar servidores `next-server` antigos antes (um servidor velho serve HTML apontando para CSS de outro build).

## Pendências de conteúdo (confirmar com a Rebecca)
- Curso "Padrões de Disfunção Sensorial no TEA" (Clínica Vagalume, 09/2025, 3h) aparecia no currículo e não está em `courses.ts`.
- Início de Terapia Ocupacional: 2023 no currículo, 2022 no site.
- "9+ certificações" no hero (só 5 cursos listados).
- `README.md` está desatualizado (descreve a estrutura antiga).
