'use client'

import Link from 'next/link'
import { Code2, Menu, X, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Monitor } from 'lucide-react'

const links = [
  { id: 'about', en: 'About', es: 'Sobre mí' },
  { id: 'experience', en: 'Experience', es: 'Experiencia' },
  { id: 'projects', en: 'Projects', es: 'Proyectos' },
  { id: 'skills', en: 'Skills', es: 'Habilidades' },
  { id: 'contact', en: 'Contact', es: 'Contacto' },
]

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/scarletabreu"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-1.5 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
        aria-label="GitHub"
      >
        <Code2 className="h-5 w-5" />
      </a>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-5 w-5" />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
            className="rounded-full p-1.5 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : theme === 'light' ? <Sun className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
            <Sun className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
            <Moon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
            <Monitor className="mr-2 h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function LangToggle({ lang, setLang }: { lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
            className="rounded-full px-2 py-1 text-xs font-semibold text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none"
            aria-label="Change Language"
        >
            {lang === 'en' ? 'EN' : 'ES'}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang('en')}>
            English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang('es')}>
            Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<'en' | 'es'>('en')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">

        {/* Logo */}
        <Link  href="/" 
        className="text-2xl font-extrabold tracking-tighter gradient-text transition-opacity hover:opacity-80">
            Scarlet Abreu
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-md px-2 py-1 transition-all hover:bg-accent hover:text-accent-foreground"
            >
              {lang === 'en' ? link.en : link.es}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle />
          <div className="hidden sm:block">
            <SocialIcons />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
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
              className="rounded-md px-2 py-1 transition-all hover:bg-accent hover:text-accent-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'en' ? link.en : link.es}
            </a>
          ))}
          <div className="flex pt-2 border-t border-border/50">
            <SocialIcons />
          </div>
        </nav>
      )}
    </header>
  )
}