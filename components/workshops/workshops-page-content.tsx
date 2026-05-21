import { workshops } from "@/lib/workshop-data";
import { WorkshopCard } from "./workshop-card";
import type { CSSProperties } from "react";

const pageTitleStyle: CSSProperties = {
  fontSize: 31,
  fontWeight: 900,
  letterSpacing: 0,
  lineHeight: 1,
};

const pageIntroStyle: CSSProperties = {
  fontSize: 30,
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1.22,
  marginTop: 10,
};

export function WorkshopsPageContent() {
  return (
    <div className="min-h-full bg-white px-4 pb-24 pt-2 text-black">
      <section className="mb-3 max-w-[340px]" aria-labelledby="workshops-title">
        <h1
          id="workshops-title"
          className="text-black"
          style={pageTitleStyle}
        >
          Workshops
        </h1>
        <p className="text-black" style={pageIntroStyle}>
          Reserve your seat for interactive sessions
        </p>
      </section>

      <section className="space-y-16 pr-8" aria-label="Workshop sessions">
        {workshops.map((workshop, index) => (
          <WorkshopCard
            key={`${workshop.title}-${workshop.time}`}
            workshop={workshop}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
