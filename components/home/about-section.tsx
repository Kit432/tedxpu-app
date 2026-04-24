import { eventData } from "@/lib/home-data";

export function AboutSection() {
  return (
    <section className="px-5 py-6">
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">About the Event</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{eventData.description}</p>
      </div>
    </section>
  );
}