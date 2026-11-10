import { contatos, site } from "@/data/site"
import { navigationItems } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-16 pb-10 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <a href="#sobre" className="w-fit font-display text-[clamp(2.4rem,1.6rem+3vw,3.6rem)] leading-none font-extrabold tracking-[-0.04em]">
              Rebecca <span className="text-coral-400">Ariel</span>
            </a>
            <p className="text-paper/70">
              {site.papel} · {site.cidade}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Rodapé" className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-coral-300">Navegue</p>
              {navigationItems.map((i) => (
                <a key={i.id} href={`#${i.id}`} className="py-0.5 text-paper/75 transition-colors hover:text-paper">
                  {i.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-coral-300">Contato</p>
              {contatos.map((c) => (
                <a
                  key={c.id}
                  href={c.href}
                  {...(c.id !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="py-0.5 text-paper/75 transition-colors hover:text-paper"
                >
                  {c.rotulo}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}
          </p>
          <p>
            Desenvolvido com carinho por{" "}
            <a
              href="https://www.linkedin.com/in/filipe-leite-oliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper underline underline-offset-4 hover:text-coral-300"
            >
              Filipe Oliveira
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
