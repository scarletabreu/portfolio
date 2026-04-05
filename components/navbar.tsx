'use client'

import Link from 'next/link'
import { Code2, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { id: 'about', en: 'About', es: 'Sobre mí' },
  { id: 'experience', en: 'Experience', es: 'Experiencia' },
  { id: 'projects', en: 'Projects', es: 'Proyectos' },
  { id: 'skills', en: 'Skills', es: 'Habilidades' },
  { id: 'contact', en: 'Contact', es: 'Contacto' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<'en' | 'es'>('en')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="text-lg font-bold gradient-text">
          scarlet.dev
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors hover:text-primary"
            >
              {lang === 'en' ? link.en : link.es}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>

          <a href="https://github.com/scarletabreu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Code2 className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/scarlet-abreu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:scarletabreuofc@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">
            <Mail className="h-5 w-5" />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background/95 px-4 py-4 flex flex-col gap-4 text-sm text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'en' ? link.en : link.es}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}