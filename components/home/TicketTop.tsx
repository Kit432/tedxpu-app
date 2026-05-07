import Link from "next/link";
import { Ticket } from "lucide-react";

export function TicketTop() {
  return (
    <Link
      href="/ticket"
      aria-label="Open your ticket"
      className="group relative block h-[174px] shrink-0 overflow-hidden bg-[#009b50] pb-[env(safe-area-inset-bottom)] active:-translate-y-1"
    >
      <div className="absolute -top-10 left-[10%] h-20 w-20 rounded-full bg-white" />
      <div className="absolute -top-10 left-[40%] h-20 w-20 rounded-full bg-white" />
      <div className="absolute -top-10 left-[70%] h-20 w-20 rounded-full bg-white" />

      <div className="absolute bottom-5 left-0 flex w-full justify-around px-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="h-5 w-9 rounded-full bg-white" />
        ))}
      </div>

      <div className="absolute inset-x-0 top-12 flex justify-center opacity-0 transition group-active:opacity-100">
        <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#009b50] shadow-lg">
          <Ticket className="h-5 w-5" />
          View ticket
        </div>
      </div>
    </Link>
  );
}