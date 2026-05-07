import Link from "next/link";

export default function TicketPage() {
  return (
    <section className="relative flex min-h-full flex-col px-4 pb-8">
      <div className="relative mx-auto flex w-full max-w-[380px] justify-center">
        <img
          src="/1ticket/ticket.svg"
          alt="TEDx Panteion University Sensorium ticket"
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}