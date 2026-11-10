// Contato: a chamada dentro de um grande círculo coral (com anel em volta) e os canais em "pílulas" largas.
// Todos são links reais com nome acessível.
import type { ComponentType } from "react"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { contatos, site, type ContatoId } from "@/data/site"
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons"

const icones: Record<ContatoId, ComponentType<{ className?: string }>> = {
  whatsapp: WhatsAppIcon,
  email: Mail,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
}

export function ContactSection() {
  return (
    <section id="contato" className="overflow-hidden bg-muted/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative mx-auto w-full max-w-[32rem]">
          <div aria-hidden="true" className="absolute -inset-5 rounded-[3rem] border-[3px] border-dashed border-coral-300 sm:rounded-full" />
          <div className="relative flex flex-col items-center justify-center gap-5 rounded-[2.5rem] bg-coral-ink px-8 py-14 text-center text-white sm:aspect-square sm:rounded-full sm:px-14">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-white/85">
              <span className="size-2 animate-pulse rounded-full bg-white" aria-hidden="true" />
              Disponível para conversar
            </p>
            <h2 className="text-[clamp(2.6rem,1.6rem+4vw,4.4rem)] leading-[0.95] font-extrabold tracking-[-0.04em]">Vamos conversar?</h2>
            <p className="max-w-xs text-lg text-white/85">Estou ansiosa para conhecer mais sobre você, esses são meus contatos.</p>
            <p className="inline-flex items-center gap-2 text-sm text-white/80">
              <MapPin className="size-4" aria-hidden="true" />
              {site.cidade}
            </p>
          </div>
        </div>

        <ul className="flex min-w-0 flex-col gap-3">
          {contatos.map((c) => {
            const Icone = icones[c.id]
            const externo = c.id !== "email"
            return (
              <li key={c.id} className="reveal">
                <a
                  href={c.href}
                  {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={`${c.rotulo}: ${c.valor}${externo ? " (abre em nova aba)" : ""}`}
                  className="group flex items-center gap-4 rounded-full border border-border bg-card py-3 pr-6 pl-3 transition-colors hover:border-coral-300 hover:bg-coral-50"
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-coral-100 text-coral-ink transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icone className="size-6" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-sm text-muted-foreground">{c.rotulo}</span>
                    <span className="font-display text-lg font-semibold text-ink [overflow-wrap:break-word] sm:text-xl">
                      {/* e-mail quebra antes do @, não no meio do domínio */}
                      {c.id === "email" ? (
                        <>
                          {c.valor.split("@")[0]}
                          <wbr />@{c.valor.split("@")[1]}
                        </>
                      ) : (
                        c.valor
                      )}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-coral-ink transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
