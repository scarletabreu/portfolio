"use client";

import { useApp } from "../providers";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Zap,
  Code2,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Layers,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const jobKeys = ["alphnology", "instructor", "vp"] as const;

export function ExperienceSection() {
  const { t } = useApp();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const anim = (delay: number) =>
    `transition-[opacity,transform] duration-700 ease-out [transition-delay:${delay}ms] ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-accent/10 blur-[96px]" />

        {/* CLÚSTER IZQUIERDO */}
        <div className="absolute left-[2%] top-[15%] animate-float text-primary/20">
          <Code2 className="h-16 w-16 opacity-10 lg:h-24 lg:w-24" />
        </div>
        <div className="absolute left-[15%] bottom-[15%] animate-float-delayed text-accent/15">
          <Sparkles className="h-10 w-10" />
        </div>
        <div className="absolute left-[8%] top-[45%] animate-float-slow text-primary/10">
          <Terminal className="h-12 w-12" />
        </div>
        <div className="absolute left-[18%] top-[10%] animate-float text-accent/10">
          <Zap className="h-6 w-6" />
        </div>
        <div className="absolute left-[5%] bottom-[40%] animate-float-slow text-primary/5">
          <Globe className="h-14 w-14" />
        </div>
        <div className="absolute left-[25%] top-[30%] animate-float-delayed text-primary/5">
          <Cpu className="h-8 w-8" />
        </div>
        <div className="absolute left-[12%] bottom-[35%] animate-float text-accent/5">
          <Layers className="h-10 w-10" />
        </div>

        {/* CLÚSTER DERECHO */}
        <div className="absolute right-[5%] top-[25%] animate-float-slow text-accent/20">
          <Layers className="h-12 w-12 opacity-10 lg:h-20 lg:w-20" />
        </div>
        <div className="absolute right-[15%] top-[10%] animate-float text-primary/15">
          <Cpu className="h-10 w-10" />
        </div>
        <div className="absolute right-[10%] bottom-[20%] animate-float-delayed text-primary/10">
          <Globe className="h-14 w-14" />
        </div>

        <div className="absolute right-[18%] bottom-[45%] animate-float text-accent/10">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="absolute right-[22%] top-[40%] animate-float-slow text-primary/10">
          <Code2 className="h-8 w-8 opacity-20" />
        </div>
        <div className="absolute right-[4%] bottom-[10%] animate-float-delayed text-primary/5">
          <Terminal className="h-16 w-16" />
        </div>
        <div className="absolute right-[25%] top-[15%] animate-float text-accent/5">
          <Zap className="h-5 w-5" />
        </div>

        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 animate-float-slow text-primary/5">
          <Cpu className="h-20 w-20" />
        </div>
        <div className="absolute left-1/2 bottom-[5%] -translate-x-1/2 animate-float-delayed text-accent/5">
          <Globe className="h-16 w-16" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-12 flex items-center gap-4 ${anim(0)}`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm shadow-primary/10">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-4xl">
              {t.experience.title}
            </h2>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">
              {t.experience.label}
            </p>
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative pl-8 sm:pl-12">
          {/* Línea Morada Vertical */}
          <div className="absolute left-0 top-2 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {jobKeys.map((key, i) => {
              const job = t.experience.jobs[key];
              const isCurrent =
                job.period.toLowerCase().includes("present") ||
                job.period.toLowerCase().includes("presente");

              return (
                <div key={key} className="relative">
                  <div className="absolute -left-[35px] sm:-left-[51px] top-8 z-10">
                    <div className="flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  </div>

                  <div
                    className={`group rounded-3xl border border-border bg-card p-6 sm:p-8 
                    transition-[transform,shadow,border-color] duration-300 ease-out
                    hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 
                    ${anim(150 + i * 150)}`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            {job.title}
                          </h3>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                              </span>
                              {t.experience.current}
                            </span>
                          )}
                        </div>

                        {/* Org & period */}
                        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5 font-semibold text-foreground/90">
                            <MapPin className="h-4 w-4 text-primary" />
                            {job.org}
                          </span>
                          <span className="flex items-center gap-1.5 font-medium">
                            <Calendar className="h-4 w-4" />
                            {job.period}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className="grid gap-3">
                          {job.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="group/item flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary/40 transition-colors group-hover/item:text-primary" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className={`mt-24 ${anim(600)}`}>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm shadow-primary/10">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              {t.experience.education}
            </h3>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-[transform,shadow,border-color] duration-500 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
            <div className="flex-1 relative z-10">
              <div className="mb-2 flex items-center gap-3 flex-wrap">
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {t.experience.edu.degree}
                </h4>
              </div>
              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 font-semibold text-foreground/90">
                  <MapPin className="h-4 w-4 text-primary" />
                  {t.experience.edu.school}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-4 w-4" />
                  {t.experience.edu.period}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/10 bg-primary/[0.03] px-4 py-2 transition-colors group-hover:bg-primary/10">
                <span className="text-sm font-bold text-primary">
                  {t.experience.edu.gpa}
                </span>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
