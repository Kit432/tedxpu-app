import { AboutSection } from "./about-section";
import { TeamSection } from "./team-section";
import { SocialSection } from "./social-section";

export function Info() {
  return (
    <div className="min-h-full bg-white px-4 pb-10 text-black">
      <AboutSection />
      <TeamSection />
      <SocialSection />
    </div>
  );
}
