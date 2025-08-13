export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 sm:px-6 py-6 sm:py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs sm:text-sm text-gray-500">
          © 2025{' '}
          <a
            href="https://www.linkedin.com/in/filipe-leite-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-coral-600 hover:underline transition-colors"
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