"use client";

import { FolderKanban, Code2, ExternalLink, Star, Sparkles, Hammer } from "lucide-react";
import { useApp } from "../providers";
import { useInView } from "@/hooks/use-in-view";

const projects = [
  {
    id: "dental",
    emoji: "🦷",
    featured: true,
    tags: ["Flutter", "Dart", "Supabase", "Clean Architecture"],
    github: "https://github.com/scarletabreu/salud_dental_clinic_management",
    demo: null,
    inProgress: true,
  },
  {
    id: "bi",
    emoji: "📊",
    featured: true,
    tags: ["Python", "SQL", "Data Mining", "ETL"],
    github: "https://github.com/scarletabreu/bi-contraloria-dw-mineria",
    demo: null,
    inProgress: false,
  },
  {
    id: "haskell",
    emoji: "λ",
    featured: false,
    tags: ["Haskell", "Functional", "Interpreters", "PLT"],
    github: "https://github.com/scarletabreu/haskell-functional-interpreter",
    demo: null,
    inProgress: false,
  },
  {
    id: "mantra",
    emoji: "🧘",
    featured: false,
    tags: ["Kotlin", "Android SDK", "MVVM", "Material Design 3"],
    github: "https://github.com/scarletabreu/Mantra",
    demo: null,
    inProgress: false,
  },
  {
    id: "syncro",
    emoji: "🔄",
    featured: false,
    tags: ["Java", "Javalin", "REST API"],
    github: "https://github.com/scarletabreu/syncro",
    demo: null,
    inProgress: false,
  },
  {
    id: "goservice",
    emoji: "⚙️",
    featured: false,
    tags: ["Go", "systemd", "Linux", "CLI"],
    github: "https://github.com/scarletabreu/goservice-systemd",
    demo: null,
    inProgress: false,
  },
] as const;

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

function FeaturedCard({ project }: { project: (typeof projects)[number] }) {
  const { t } = useApp();
  const proj = (t.projects as any).items[project.id];

  return (
    <div className="group relative rounded-3xl border border-primary/20 bg-primary/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className="absolute right-5 top-5 flex flex-col items-end gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3 w-3" />
          Featured
        </span>
        {project.inProgress && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-600 border border-amber-500/20">
            <Hammer className="h-3 w-3" />
            In Progress
          </span>
        )}
      </div>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-2xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        {project.emoji}
      </div>

      <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
        {proj?.title || project.id}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {proj?.desc || ""}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <GitHubIcon />
          {t.projects.viewProject}
        </a>
        
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        ) : (
          <span className="flex items-center gap-2 text-sm text-muted-foreground/40 cursor-default">
            <ExternalLink className="h-4 w-4" />
            Soon
          </span>
        )}
      </div>
    </div>
  );
}

function RegularCard({ project }: { project: (typeof projects)[number] }) {
  const { t } = useApp();
  const proj = (t.projects as any).items[project.id];

  return (
    <div className="group flex flex-col rounded-3xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background text-xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {project.emoji}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              aria-label="Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="font-bold tracking-tight text-foreground">
            {proj?.title || project.id}
          </h3>
          {project.inProgress && (
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" title="In Progress" />
          )}
        </div>
        <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {proj?.desc || ""}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useApp();
  const { ref, isInView } = useInView({ threshold: 0.05 });

  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[96px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-10 flex items-center justify-between transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm shadow-primary/10">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-4xl">
                {t.projects.title}
              </h2>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">
                {t.projects.label}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://github.com/scarletabreu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <Code2 className="h-4 w-4" />
              {t.projects.viewAll}
            </a>
          </div>
        </div>

        <div className={`mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 transition-all duration-700 delay-150 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {featured.map((p) => <FeaturedCard key={p.id} project={p} />)}
        </div>

        <div className={`mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {regular.map((p) => <RegularCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}