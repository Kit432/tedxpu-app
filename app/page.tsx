import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { TransportSection } from "@/components/home/transport-section";
import { SocialSection } from "@/components/home/social-section";
import { TeamSection } from "@/components/home/team-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TransportSection />
      <SocialSection />
      <TeamSection />
    </div>
  );
}