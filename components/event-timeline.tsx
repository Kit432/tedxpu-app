import { Clock, Presentation } from "lucide-react";
import { timelineEvents, eventIcons, eventColors, dotColors } from "@/lib/schedule-data";
import { TimelineEvent } from "@/types/schedule";

export function EventTimeline() {
  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
          Schedule
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Saturday, May 23th, 2026
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5.5 top-2 bottom-2 w-0.5 bg-linear-to-b from-neutral-200 via-neutral-200 to-neutral-200/0" />

        <div className="space-y-3">
          {timelineEvents.map((event, index) => {
            const Icon = eventIcons[event.type];
            const isLast = index === timelineEvents.length - 1;

            return (
              <div key={event.id} className="relative flex gap-3">
                {/* Timeline dot with icon */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${eventColors[event.type]} shadow-sm`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Connector dot */}
                  {!isLast && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rounded-full ${dotColors[event.type]} opacity-0`}
                    />
                  )}
                </div>

                {/* Event Card */}
                <div className="flex-1 min-w-0 pb-3">
                  <div className="bg-white rounded-2xl border border-neutral-200/80 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-shadow">
                    {/* Time badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.time}
                        {event.endTime && ` - ${event.endTime}`}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-1">
                      {event.title}
                    </h3>

                    {/* Description */}
                    {event.description && (
                      <p className="text-sm text-neutral-600 leading-relaxed mb-2">
                        {event.description}
                      </p>
                    )}

                    {/* Location */}
                    {event.location && (
                      <div className="flex items-center text-xs text-neutral-400">
                        <Presentation className="w-3 h-3 mr-1" />
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-4 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 mb-3 font-medium uppercase tracking-wider">
          Event Types
        </p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(eventColors).map((type) => {
            const Icon = eventIcons[type as TimelineEvent["type"]];
            const label = type.charAt(0).toUpperCase() + type.slice(1);
            return (
              <div
                key={type}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-neutral-50 text-xs text-neutral-600"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
