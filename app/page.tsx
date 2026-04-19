import { ProfileCard } from "@/components/profile-card";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <aside className="w-full lg:sticky lg:top-24 lg:w-72 lg:shrink-0 xl:w-80">
          <ProfileCard />
        </aside>

        <main className="min-w-0 flex-1 pb-24 lg:pb-10">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection/>
        </main>
      </div>
    </div>
  );
}
