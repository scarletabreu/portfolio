"use client";

import React from "react";
import { useApp } from "../providers";
import {
  Smartphone,
  GraduationCap,
  Brain,
  Users,
  Code2,
  Star,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const statValues: {
  value: string;
  key: "gpa" | "certs" | "teaching" | "languages";
}[] = [
  { value: "3.4", key: "gpa" },
  { value: "10+", key: "certs" },
  { value: "1.5", key: "teaching" },
  { value: "3", key: "languages" },
];

const whatIDo: {
  icon: React.ElementType;
  key: "mobile" | "teaching" | "algorithms" | "leadership";
}[] = [
  { icon: Smartphone, key: "mobile" },
  { icon: GraduationCap, key: "teaching" },
  { icon: Brain, key: "algorithms" },
  { icon: Users, key: "leadership" },
];

export function AboutSection() {
  const { t } = useApp();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const animationBase = (delay: number) =>
    `transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
      isInView
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-10 scale-[0.98]"
    } [transition-delay:${delay}ms]`;

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-accent/15 blur-[96px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Clúster Izquierdo */}
        <div className="absolute left-[5%] top-[15%] animate-float text-primary/20">
          <Code2 className="h-16 w-16 opacity-10 lg:h-24 lg:w-24" />
        </div>
        <div className="absolute left-[15%] bottom-[15%] animate-float-delayed text-accent/15">
          <Sparkles className="h-10 w-10" />
        </div>
        <div className="absolute left-[10%] top-[45%] animate-float-slow text-primary/10">
          <Terminal className="h-12 w-12" />
        </div>
        <div className="absolute left-[20%] top-[10%] animate-float text-accent/10">
          <Zap className="h-6 w-6" />
        </div>

        {/* Clúster Derecho */}
        <div className="absolute right-[8%] top-[30%] animate-float-slow text-accent/20">
          <Smartphone className="h-12 w-12 opacity-10 lg:h-20 lg:w-20" />
        </div>
        <div className="absolute right-[12%] top-[10%] animate-float text-primary/15">
          <Brain className="h-10 w-10" />
        </div>
        <div className="absolute right-[5%] bottom-[20%] animate-float-delayed text-primary/10">
          <Cpu className="h-14 w-14" />
        </div>
        <div className="absolute right-[20%] bottom-[40%] animate-float text-accent/10">
          <Globe className="h-8 w-8" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-10 flex items-center gap-4`}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm shadow-primary/10">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tighter text-foreground sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">
              {t.about.label}
            </p>
          </div>
        </div>

        {/* Bio Card */}
        <div
          className={`group mb-8 rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/1`}
        >
          <div className="block">
            <div className="float-left mr-4 mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Code2 className="h-5 w-5" />
            </div>
            <div className="text-base leading-relaxed text-muted-foreground">
              <p className="mb-4">{t.about.p1}</p>

              <p className="mb-4 transition-colors duration-300 group-hover:text-foreground/80">
                {t.about.p2}
              </p>
              <p className="border-l-2 border-primary/20 pl-4 text-primary/80 transition-all duration-300 group-hover:border-primary group-hover:pl-6">
                {t.about.p3}
              </p>
              <div className="clear-both" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statValues.map(({ value, key }, i) => (
            <div
              key={key}
              className={`group rounded-3xl border border-border bg-card p-5 text-center transition-all hover:border-primary/40 hover:shadow-lg hover:bg-primary/[0.02]`}
            >
              <div className="text-3xl font-black tracking-tight text-primary transition-transform group-hover:scale-110">
                {value}
              </div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                {t.about.stats[key]}
              </div>
            </div>
          ))}
        </div>

        {/* What I Do Section */}
        <div className={animationBase(500)}>
          <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground">
            {t.about.whatIDo}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {whatIDo.map(({ icon: Icon, key }, i) => {
              const card = t.about.cards[key];
              return (
                <div
                  key={key}
                  className={`group rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:bg-primary/[0.03] ${
                    isInView
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-6 scale-[0.97]"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                    {card.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
