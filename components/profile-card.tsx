"use client";

import Image from "next/image";
import { Mail, MapPin, GraduationCap, Code2, Sparkles, Terminal, Cpu } from "lucide-react";
import { useApp } from "@/components/providers";
import { useEffect, useState } from "react";

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
      className="flex h-11 w-11 items-center justify-center rounded-3xl border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:scale-110 shadow-sm relative z-10"
    >
      {icon}
    </a>
  );
}
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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

export function ProfileCard() {
  const { t } = useApp();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5 transition-[opacity,transform] duration-1000 ease-out 
      ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      {/* ── Iconos Flotantes Internos (Aparecen en Hover) ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Terminal className="absolute -left-2 top-10 h-12 w-12 text-primary/10 transition-all duration-700 group-hover:-translate-x-2 group-hover:rotate-12 group-hover:opacity-40" />
        <Sparkles className="absolute -right-4 top-40 h-10 w-10 text-accent/10 transition-all duration-1000 group-hover:translate-x-2 group-hover:-rotate-12 group-hover:opacity-40" />
        <Cpu className="absolute bottom-10 -left-4 h-8 w-8 text-primary/10 transition-all duration-500 group-hover:-translate-x-1 group-hover:opacity-30" />
        <Code2 className="absolute -right-2 bottom-20 h-14 w-14 text-primary/5 transition-all duration-1000 group-hover:rotate-45 group-hover:opacity-20" />
      </div>

      {/* ── Highlight Animado (Detrás) ── */}
      <div className="absolute -inset-[1px] -z-10 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100">
        <div className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,transparent_70%)]" />
      </div>

      {/* Photo Section */}
      <div className="relative w-full border-b border-border/50 bg-muted/5 py-6 lg:py-0 z-10">
        <div className="relative mx-auto w-40 aspect-square overflow-hidden rounded-full border-2 border-primary/20 sm:w-48 lg:w-full lg:aspect-[4/5] lg:rounded-none lg:border-none">
          <Image
            src="/avatar.png"
            alt={t.profile.name}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center px-6 py-8 text-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground lg:text-3xl transition-colors duration-300 group-hover:text-primary">
          {t.profile.name}
        </h2>

        <p className="mb-4 text-xs font-medium leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {t.profile.role}
        </p>

        <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mb-8 flex flex-col gap-4 text-sm text-muted-foreground w-full">
          <div className="flex items-start gap-3 px-2 transition-all duration-300 group-hover:translate-x-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <span className="text-left leading-tight self-center">
              {t.profile.location}
            </span>
          </div>

          <div className="flex items-start gap-3 px-2 transition-all duration-300 group-hover:translate-x-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="text-left leading-tight self-center">
              {t.experience.edu.school}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <SocialLink
            href="https://github.com/scarletabreu"
            label="GitHub"
            icon={<GitHubIcon />}
          />
          <SocialLink
            href="https://linkedin.com/in/scarlet-abreu"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <SocialLink
            href="mailto:scarletabreuofc@gmail.com"
            label="Email"
            icon={<Mail className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Orbes de fondo dinámicos */}
      <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-1000 group-hover:bg-primary/20 group-hover:scale-150" />
      <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-150" />
    </div>
  );
}