export function Footer() {
  return (
    <footer className="border-t border-coral-100/50 bg-gradient-to-t from-coral-50/30 to-coral-50/40 px-4 sm:px-6 py-6 sm:py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          © 2025{' '}
          <a
            href="https://www.linkedin.com/in/filipe-leite-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral-600 underline hover:text-coral-700 transition-colors inline-flex items-center gap-1"
            title="Ver perfil no LinkedIn"
          >
            Filipe Oliveira
          </a>
          . Desenvolvido com carinho para transformar vidas.
        </p>
      </div>
    </footer>
  )
}