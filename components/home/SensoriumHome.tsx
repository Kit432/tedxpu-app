import { DrawingGame } from "./DrawingGame";
import { TicketTop } from "./TicketTop";

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