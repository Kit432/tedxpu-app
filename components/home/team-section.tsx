import Image from "next/image";
import { teamMembers } from "@/lib/home-data";

export function TeamSection() {
  return (
    <section className="px-5 py-6 pb-20">
      <h2 className="text-lg font-semibold text-foreground mb-4">Meet the Team</h2>
      
      {/* 2 columns on mobile, gap of 4 */}
      <div className="grid grid-cols-2 gap-4">
        {teamMembers.map((member) => (
          <div 
            key={member.name} 
            className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-border/50 bg-muted/30 shadow-sm"
          >
            <Image 
              src={member.image} 
              alt={`${member.name} - ${member.role}`} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}