import { 
  Calendar, 
  Clock, 
  Mic, 
  Coffee, 
  Users, 
  Music,
  Award,
  Presentation
} from "lucide-react";

interface TimelineEvent {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  description?: string;
  location?: string;
  type: "registration" | "talk" | "break" | "workshop" | "performance" | "ceremony";
}

// Hardcoded placeholder data
const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    time: "09:00",
    endTime: "09:45",
    title: "Registration & Check-in",
    description: "Come Register",
    location: "Main Entrance",
    type: "registration",
  },
  {
    id: "2",
    time: "10:00",
    endTime: "10:15",
    title: "Opening Remarks",
    description: "Welcome from the organizers",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "3",
    time: "10:15",
    endTime: "10:45",
    title: "Speaker 1",
    description: "-",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "4",
    time: "10:45",
    endTime: "11:15",
    title: "Coffee Break",
    description: "Networking",
    location: "Lobby",
    type: "break",
  },
  {
    id: "5",
    time: "11:15",
    endTime: "11:45",
    title: "Speaker 2",
    description: "-",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "6",
    time: "11:45",
    endTime: "12:30",
    title: "Workshop 1",
    description: "-",
    location: "Room A",
    type: "workshop",
  },
  {
    id: "7",
    time: "12:30",
    endTime: "13:30",
    title: "Lunch Break",
    description: "Catered lunch",
    location: "Room B",
    type: "break",
  },
  {
    id: "8",
    time: "13:30",
    endTime: "14:00",
    title: "Speaker 3",
    description: "-",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "9",
    time: "14:00",
    endTime: "14:30",
    title: "Speaker 4",
    description: "- ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "10",
    time: "14:30",
    endTime: "15:00",
    title: "Speaker 5",
    description: "-",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "11",
    time: "15:00",
    endTime: "15:30",
    title: "Closing Ceremony",
    description: "Final remarks",
    location: "Main Stage",
    type: "ceremony",
  },
];

const eventIcons: Record<TimelineEvent["type"], React.ComponentType<{ className?: string }>> = {
  registration: Calendar,
  talk: Mic,
  break: Coffee,
  workshop: Users,
  performance: Music,
  ceremony: Award,
};

const eventColors: Record<TimelineEvent["type"], string> = {
  registration: "bg-neutral-100 text-neutral-600",
  talk: "bg-amber-50 text-amber-600",
  break: "bg-emerald-50 text-emerald-600",
  workshop: "bg-violet-50 text-violet-600",
  performance: "bg-pink-50 text-pink-600",
  ceremony: "bg-sky-50 text-sky-600",
};

const dotColors: Record<TimelineEvent["type"], string> = {
  registration: "bg-neutral-400",
  talk: "bg-amber-400",
  break: "bg-emerald-400",
  workshop: "bg-violet-400",
  performance: "bg-pink-400",
  ceremony: "bg-sky-400",
};

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
        <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-200/0" />

        <div className="space-y-3">
          {timelineEvents.map((event, index) => {
            const Icon = eventIcons[event.type];
            const isLast = index === timelineEvents.length - 1;

            return (
              <div key={event.id} className="relative flex gap-3">
                {/* Timeline dot with icon */}
                <div className="relative z-10 flex-shrink-0">
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
          {Object.entries(eventColors).map(([type, colorClass]) => {
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
