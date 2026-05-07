import { AboutSection } from "./about-section";
import { TeamSection } from "./team-section";
import { SocialSection } from "./social-section";

export function Info() {
  return (
    <main className="min-h-[100dvh] overflow-hidden bg-white text-black">
      <div className="relative mx-auto flex min-h-[100dvh] max-w-[430px] flex-col bg-white">
        <AboutSection />
        <TeamSection />
        <SocialSection />
      </div>
    </main>
  );
}