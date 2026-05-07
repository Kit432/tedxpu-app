import { MapPin } from "lucide-react";
import { transportationOptions } from "@/lib/info-data";

export function TransportSection() {
  return (
    <section className="px-5 py-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Getting There</h2>
      <div className="space-y-3">
        {transportationOptions.map((option) => (
          <div key={option.method} className="bg-card rounded-xl border border-border/50 p-4 flex items-center gap-4">
            <div className="text-2xl">{option.icon}</div>
            <div>
              <p className="text-sm font-medium text-foreground">{option.method}</p>
              <p className="text-xs text-muted-foreground">{option.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl px-4 pb-10 border border-border/50 bg-muted/30 h-40 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="text-xs">Interactive map coming soon</p>
        </div>
      </div>
    </section>
  );
}