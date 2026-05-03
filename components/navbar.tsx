"use client";

import Link from "next/link";
import {
  Moon,
  Sun,
  Monitor,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useApp } from "./providers";

const links = [
  { id: "about", en: "About", es: "Sobre mí", icon: User },
  { id: "experience", en: "Experience", es: "Experiencia", icon: Briefcase },
  { id: "projects", en: "Projects", es: "Proyectos", icon: FolderKanban },
  { id: "skills", en: "Skills", es: "Habilidades", icon: Wrench },
  { id: "contact", en: "Contact", es: "Contacto", icon: Mail },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
    >
      {icon}
    </a>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="h-8 w-8" />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary focus:outline-none">
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Monitor className="h-4 w-4" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LangToggle() {
  const { lang, setLang } = useApp();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-8 items-center gap-1 rounded-full px-2 text-xs font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary focus:outline-none border border-transparent hover:border-primary/20">
          <span className={lang === "en" ? "text-primary" : ""}>EN</span>
          <span className="text-border">/</span>
          <span className={lang === "es" ? "text-primary" : ""}>ES</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("es")}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar() {
  const { lang } = useApp();
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Incluimos hero para que el observer tenga un estado inicial al tope de la página
    const sectionIds = ["hero", ...links.map((link) => link.id)];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-md px-6 h-16 transition-colors duration-300">
        <Link
          href="/"
          className="text-sm font-bold text-primary transition-opacity hover:opacity-80"
        >
          Scarlet Abreu | CS & Mobile Developer
        </Link>

        <nav className="flex items-center gap-1 rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-1.5 shadow-sm">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-3xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {lang === "en" ? link.en : link.es}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <SocialLink
            href="https://github.com/scarletabreu"
            label="GitHub"
            icon={<GitHubIcon />}
          />
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur-lg">
        <span className="font-semibold text-foreground text-sm">
          Scarlet <span className="text-primary">Abreu</span>
        </span>
        <div className="flex items-center gap-2">
          <SocialLink
            href="https://github.com/scarletabreu"
            label="GitHub"
            icon={<GitHubIcon />}
          />
          <LangToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-2 py-2 border-t border-border bg-background/95 backdrop-blur-lg pb-safe">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-3xl transition-all min-w-[60px] ${
                isActive
                  ? "text-primary translate-y-[-4px]"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-3xl transition-all ${
                  isActive
                    ? "bg-primary/15 shadow-inner"
                    : "hover:bg-primary/10"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${isActive ? "animate-pulse" : ""}`}
                />
              </div>
              <span className="text-[10px] font-bold">
                {lang === "en" ? link.en : link.es}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}