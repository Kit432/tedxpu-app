import Link from "next/link";

export function TicketTop() {
  return (
    <Link
      href="/ticket"
      aria-label="Open your ticket"
      className="relative block h-[174px] w-full shrink-0 overflow-hidden bg-[#009b50] pb-[env(safe-area-inset-bottom)] active:-translate-y-1"
    >
      <div className="absolute -top-10 left-[10%] h-20 w-20 rounded-full bg-white" />
      <div className="absolute -top-10 left-[40%] h-20 w-20 rounded-full bg-white" />
      <div className="absolute -top-10 left-[70%] h-20 w-20 rounded-full bg-white" />

      <div className="absolute bottom-5 left-0 flex w-full justify-around px-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="h-5 w-9 rounded-full bg-white" />
        ))}
      </div>
    </Link>
  );
}