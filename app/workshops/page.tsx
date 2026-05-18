const workshops = [
  {
    title: "Workshop 1",
    time: "11:45 - 12:30",
    location: "Room A",
    description: "Hands-on session details will be announced soon.",
  },
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-full bg-neutral-50 px-4 py-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Workshops
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Interactive sessions for TEDx Panteion University Sensorium.
        </p>
      </div>

      <div className="space-y-3">
        {workshops.map((workshop) => (
          <article
            key={workshop.title}
            className="rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                {workshop.time}
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                {workshop.location}
              </span>
            </div>
            <h2 className="text-base font-semibold text-neutral-900">
              {workshop.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600">
              {workshop.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
