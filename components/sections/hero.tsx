"use client";

import { Sparkles, Code2, Smartphone, ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useApp } from "../providers";

export function HeroSection() {
  const { t } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 flex items-center justify-center pt-24 pb-16 lg:pt-32"
    >
      {/* Background Orbs & Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-accent/15 blur-[96px]" />
        <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating icons */}
        <div className="absolute left-[10%] top-[20%] animate-float text-primary/20">
          <Code2 className="h-8 w-8" />
        </div>
        <div
          className="absolute right-[15%] top-[30%] animate-float-slow text-accent/20" // <-- USAR FLOAT-SLOW
          style={{ animationDelay: "300ms" }}
        >
          <Smartphone className="h-6 w-6" />
        </div>
        <div
          className="absolute left-[20%] bottom-[25%] animate-float-delayed text-primary/15" // <-- USAR FLOAT-DELAYED
        >
          <Sparkles className="h-10 w-10" />
        </div>
        {/* Availability Badge */}
        <div
          className={`mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {t.hero.available}
        </div>
      </div>
    </section>
  );
}
