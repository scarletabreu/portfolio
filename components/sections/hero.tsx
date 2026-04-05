"use client";

import { Sparkles, Code2, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { ProfileCard } from "../profile-card";

export function HeroSection() {
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
      className="relative min-h-screen overflow-hidden px-4 pt-24 pb-16 lg:pt-32"
    >
      {/* Background */}
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
          className="absolute right-[15%] top-[30%] animate-float text-accent/20"
          style={{ animationDelay: "300ms" }}
        >
          <Smartphone className="h-6 w-6" />
        </div>
        <div
          className="absolute left-[20%] bottom-[25%] animate-float text-primary/15"
          style={{ animationDelay: "500ms" }}
        >
          <Sparkles className="h-10 w-10" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left - Profile Card */}
          <div
            className={`order-last lg:order-none w-full max-w-sm lg:w-auto lg:shrink-0 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <ProfileCard />
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center"></div>
        </div>
      </div>
    </section>
  );
}
