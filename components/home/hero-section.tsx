import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { eventData } from "@/lib/home-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-red-50 to-background dark:from-red-950/20 dark:to-background" />
      <div className="relative px-5 pt-12 pb-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28">
            <Image src="https://picsum.photos/seed/tedxlogo/200/200" alt="TEDx Panteion University Logo" fill className="object-contain rounded-2xl" priority />
          </div>
        </div>
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{eventData.title}</h1>
          <p className="text-sm text-red-600 font-medium tracking-wide uppercase">{eventData.theme}</p>
        </div>
        <div className="bg-card rounded-2xl border border-border/50 p-4 shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30">
                <Calendar className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{eventData.date}</p>
                <p className="text-xs text-muted-foreground">{eventData.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{eventData.venue}</p>
                <p className="text-xs text-muted-foreground">{eventData.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}