import Link from "next/link";import Image from "next/image";

export function TicketTop() {
  return (
    <Link
      href="/ticket"
      aria-label="Open your ticket"
      className="relative mx-auto -mt-10 block h-[214px] w-[calc(100%-48px)] max-w-[380px] shrink-0 overflow-hidden pb-[env(safe-area-inset-bottom)] active:-translate-y-1 sm:-mt-12 sm:h-[232px]"
    >
      <Image
        src="/ticket/ticketTop.svg"
        alt=""
        fill
        sizes="(max-width: 430px) calc(100vw - 48px), 380px"
        aria-hidden="true"
        className="object-fill"
        priority
      />
    </Link>
  );
}
