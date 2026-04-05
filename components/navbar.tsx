'use client'

import Link from 'next/link'
import { Code2, Moon, Sun, Monitor, User, Briefcase, FolderKanban, Wrench, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const links = [
  { id: 'about', en: 'About', es: 'Sobre mí', icon: User },
  { id: 'experience', en: 'Experience', es: 'Experiencia', icon: Briefcase },
  { id: 'projects', en: 'Projects', es: 'Proyectos', icon: FolderKanban },
  { id: 'skills', en: 'Skills', es: 'Habilidades', icon: Wrench },
  { id: 'contact', en: 'Contact', es: 'Contacto', icon: Mail },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])
  if (!mounted) return <div className="h-8 w-8" />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Cambio: hover:bg-primary/10 y hover:text-primary */}
        <button className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary focus:outline-none">
          {theme === 'dark' ? <Moon className="h-4 w-4" /> : theme === 'light' ? <Sun className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}><Sun className="mr-2 h-4 w-4" /> Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}><Moon className="mr-2 h-4 w-4" /> Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}><Monitor className="mr-2 h-4 w-4" /> System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function LangToggle({ lang, setLang }: { lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Cambio: hover:bg-primary/10 y hover:text-primary */}
        <button className="flex h-8 items-center gap-1 rounded-full px-2 text-xs font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary focus:outline-none border border-transparent hover:border-primary/20">
          <span className={lang === 'en' ? 'text-primary' : ''}>EN</span>
          <span className="text-border">/</span>
          <span className={lang === 'es' ? 'text-primary' : ''}>ES</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang('es')}>Español</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Navbar() {
  const [lang, setLang] = useState<'en' | 'es'>('en')
  const [active, setActive] = useState('')

  const scrollTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-md px-6 h-16">

        {/* Logo */}
        <Link href="/" className="text-sm font-bold text-primary transition-opacity hover:opacity-80">
          Scarlet Abreu | CS & Mobile Developer
        </Link>

        {/* Tab links */}
        <nav className="flex items-center gap-1 rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-1.5 text-foreground">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10' // Cambio aquí
                }`}
              >
                <Icon className="h-4 w-4" />
                {lang === 'en' ? link.en : link.es}
              </button>
            )
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle />
          <a
            href="https://github.com/scarletabreu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary" // Cambio aquí
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur-lg">
        <span className="font-semibold text-foreground">
          Scarlet<span className="text-primary">.</span>
        </span>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/scarletabreu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors" // Cambio aquí
          >
            <Code2 className="h-4 w-4" />
          </a>
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-2 py-2 border-t border-border bg-background/95 backdrop-blur-lg">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = active === link.id
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all min-w-[60px] ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary' // Cambio aquí
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${isActive ? 'bg-primary/10' : 'hover:bg-primary/10'}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium">
                {lang === 'en' ? link.en : link.es}
              </span>
            </button>
          )
        })}
      </nav>
    </>
  )
}