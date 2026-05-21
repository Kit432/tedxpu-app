"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Clock, Presentation } from "lucide-react";
import { timelineEvents, eventIcons, eventColors, dotColors } from "@/lib/schedule-data";
import { TimelineEvent } from "@/types/schedule";
import { cn } from "@/lib/utils";

const EVENT_TIME_ZONE = "Europe/Athens";
const EVENT_DATE = {
  year: 2026,
  month: 5,
  day: 21,
};

function parseTimeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getAthensTimeParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const valueFor = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: valueFor("year"),
    month: valueFor("month"),
    day: valueFor("day"),
    minutes: valueFor("hour") * 60 + valueFor("minute"),
  };
}

function isEventDate(date: Date) {
  const athensNow = getAthensTimeParts(date);

  return (
    athensNow.year === EVENT_DATE.year &&
    athensNow.month === EVENT_DATE.month &&
    athensNow.day === EVENT_DATE.day
  );
}

function findActiveEvent(date: Date) {
  if (!isEventDate(date)) {
    return null;
  }

  const { minutes } = getAthensTimeParts(date);
  const matchingEvents = timelineEvents.filter((event) => {
    if (!event.endTime) {
      return false;
    }

    const startsAt = parseTimeToMinutes(event.time);
    const endsAt = parseTimeToMinutes(event.endTime);

    return minutes >= startsAt && minutes < endsAt;
  });

  if (matchingEvents.length === 0) {
    return null;
  }

  return matchingEvents.find((event) => !event.isSectionHeader) ?? matchingEvents[0];
}

export function EventTimeline() {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);
  const eventRefs = useRef(new Map<string, HTMLDivElement>());
  const hasScrolledToActiveEvent = useRef(false);

  const scrollToEvent = useCallback((eventId: string) => {
    const eventElement = eventRefs.current.get(eventId);

    if (!eventElement) {
      return;
    }

    eventElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  useEffect(() => {
    const updateActiveEvent = () => {
      setActiveEvent(findActiveEvent(new Date()));
    };

    updateActiveEvent();
    const intervalId = window.setInterval(updateActiveEvent, 30_000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!activeEvent || hasScrolledToActiveEvent.current) {
      return;
    }

    hasScrolledToActiveEvent.current = true;
    window.requestAnimationFrame(() => scrollToEvent(activeEvent.id));
  }, [activeEvent, scrollToEvent]);

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
          Schedule
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Saturday, May 23, 2026
        </p>
        {activeEvent && (
          <button
            type="button"
            onClick={() => scrollToEvent(activeEvent.id)}
            className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-left text-xs font-semibold text-red-600 shadow-sm active:scale-[0.98]"
            aria-label={`Scroll to current schedule event: ${activeEvent.title}`}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
            <span className="shrink-0">Now:</span>
            <span className="min-w-0 truncate">{activeEvent.title}</span>
          </button>
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5.5 top-2 bottom-2 w-0.5 bg-linear-to-b from-neutral-200 via-neutral-200 to-neutral-200/0" />

        <div className="space-y-3">
          {timelineEvents.map((event, index) => {
            const Icon = eventIcons[event.type];
            const isLast = index === timelineEvents.length - 1;
            const isActive = activeEvent?.id === event.id;

            return (
              <div
                key={event.id}
                ref={(node) => {
                  if (node) {
                    eventRefs.current.set(event.id, node);
                    return;
                  }

                  eventRefs.current.delete(event.id);
                }}
                className="relative flex gap-3"
              >
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
                  <div className="relative">
                    {isActive && (
                      <div className="absolute -left-2 top-4 h-8 w-1 rounded-full bg-red-500" />
                    )}
                    <div
                      className={cn(
                        "rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)]",
                        isActive && "border-red-300 bg-red-50/60 shadow-[0_2px_10px_rgba(239,68,68,0.12)] ring-1 ring-red-100"
                      )}
                    >
                      {/* Time badge */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-full">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.time}
                          {event.endTime && ` - ${event.endTime}`}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                            Now
                          </span>
                        )}
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
