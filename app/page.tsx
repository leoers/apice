import { HeroSlider } from "@/componentes/HeroSlider";
import { IntroSection } from "@/componentes/IntroSection";
import { MissionCTA } from "@/componentes/Mission";
import { ExperienceSection } from "@/componentes/Experience";
import { ServicesBanner } from "@/componentes/IntroTwo";
import { BlogCarousel } from "@/componentes/wordpress";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <IntroSection />
      <MissionCTA />
      <ExperienceSection />
      <ServicesBanner />
      <BlogCarousel />
      {/* Outras seções virão aqui */}
      
    </main>
  );
}