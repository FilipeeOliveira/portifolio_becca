"use client"

// Adaptado do bloco Shadcn Space "navbar-01": vira uma "pílula" translúcida ao rolar, menu em cápsula
// com a seção ativa destacada e botão com seta que desliza no hover. Links são âncoras reais (teclado ok).
import { useEffect, useState, type ComponentProps } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet"
import { useActiveSection } from "@/hooks/useActiveSection"
import { navigationItems } from "@/data/navigation"
import { cn } from "@/lib/utils"

function Wordmark() {
  return (
    <a href="#sobre" className="shrink-0 text-xl tracking-tight text-ink" aria-label="Rebecca Ariel, início">
      Rebecca <span className="accent">Ariel</span>
    </a>
  )
}

// recebe as props para funcionar dentro do SheetClose asChild (que injeta o onClick de fechar)
function FaleComigo({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      href="#contato"
      {...props}
      className={cn(
        "group relative inline-flex h-11 items-center overflow-hidden rounded-full bg-primary ps-5 pe-13 text-sm font-medium text-primary-foreground transition-all duration-500 hover:ps-13 hover:pe-5",
        className,
      )}
    >
      <span className="relative z-10">Fale comigo</span>
      <span className="absolute right-1.5 grid size-8 place-items-center rounded-full bg-background text-ink transition-all duration-500 group-hover:right-[calc(100%-2.375rem)] group-hover:rotate-45">
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </a>
  )
}

export function Header() {
  const [rolado, setRolado] = useState(false)
  const { activeSection } = useActiveSection(navigationItems)

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Principal"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4",
          rolado ? "border-border bg-background/75 shadow-xl shadow-coral-500/5 backdrop-blur-lg" : "border-transparent bg-transparent",
        )}
      >
        <div className="ps-2">
          <Wordmark />
        </div>

        <ul className="hidden items-center rounded-full bg-muted p-1 lg:flex">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 text-sm transition-colors",
                  activeSection === item.id ? "bg-background font-medium text-ink shadow-sm" : "text-muted-foreground hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <FaleComigo className="hidden sm:inline-flex" />
          <Sheet>
            <SheetTrigger
              className="grid size-11 place-items-center rounded-full bg-muted text-ink transition-colors hover:bg-accent lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent aria-describedby={undefined} className="gap-8 p-6">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-xl font-normal tracking-tight">
                  Rebecca <span className="accent">Ariel</span>
                </SheetTitle>
                <SheetClose className="grid size-10 place-items-center rounded-full border" aria-label="Fechar menu">
                  <X className="size-4" />
                </SheetClose>
              </div>
              <ul className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <SheetClose asChild>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          "block rounded-2xl px-4 py-3 font-serif text-3xl transition-colors hover:bg-muted",
                          activeSection === item.id ? "text-coral-ink italic" : "text-ink",
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <SheetClose asChild>
                <FaleComigo className="mt-auto w-full justify-center" />
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
