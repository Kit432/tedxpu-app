import { TicketViewer } from "@/components/ticket/TicketViewer";

export default function TicketPage() {
  return (
    <section className="relative flex min-h-full flex-col px-4 pb-8">
      <TicketViewer />
    </section>
  );
}
