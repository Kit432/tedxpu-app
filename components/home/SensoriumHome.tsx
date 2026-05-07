"use client";

import { DrawingGame } from "./DrawingGame";
import { TicketTop } from "./TicketTop";
import { useEffect } from "react";

export function DeveloperSignature() {
  useEffect(() => {
    console.log(
      "%cBuilt by Λιν Χονγκ Τσε (Κιτ) — TEDxPanteion University Sensorium web app\nGithub: https://github.com/Kit432",
      "font-size: 14px; font-weight: bold; color: #009b50;"
    );
    console.log("TEDxPanteionUniversity Sensorium web app");
  }, []);

  return null;
}

export function SensoriumHome() {
  return (
    <main className="min-h-[100dvh] overflow-hidden bg-white text-black">
      <div className="relative mx-auto flex min-h-[100dvh] max-w-[430px] flex-col bg-white">
        <DrawingGame />
        <TicketTop />
      </div>
    </main>
  );
}