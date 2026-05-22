import type { ComponentType } from "react";
import { Mic } from "lucide-react";
import { TimelineEvent } from "@/types/schedule";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "registration",
    time: "11:30",
    endTime: "12:30",
    title: "Registration",
    location: "Main Entrance",
    type: "registration",
  },
  {
    id: "session-1-host-opening",
    time: "12:30",
    endTime: "12:35",
    title: "ΑΛΙΚΗ",
    description: "Hostess",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "session-1-curators",
    time: "12:35",
    endTime: "12:45",
    title: "Curators",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "session-1-sign-language",
    time: "12:45",
    endTime: "12:50",
    title: "ΝΟΗΜΑΤΙΚΗ",
    location: "Main Stage",
    type: "performance",
  },
  {
    id: "session-1-qgame",
    time: "12:50",
    endTime: "13:00",
    title: "QGame Performance",
    location: "Main Stage",
    type: "performance",
  },
  {
    id: "speaker-tsapanou",
    time: "13:00",
    endTime: "13:18",
    title: "ΤΣΑΠΑΝΟΥ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "speaker-karantinou",
    time: "13:18",
    endTime: "13:36",
    title: "ΚΑΡΑΝΤΙΝΟΥ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "speaker-ifigeneia",
    time: "13:36",
    endTime: "13:54",
    title: "ΙΦΙΓΕΝΕΙΑ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "session-1-host-closing",
    time: "13:54",
    endTime: "14:00",
    title: "ΑΛΙΚΗ",
    description: "Hostess",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "break-1",
    time: "14:00",
    endTime: "15:15",
    title: "1st Break",
    type: "break",
  },
  {
    id: "session-2-host-opening",
    time: "15:20",
    endTime: "15:25",
    title: "ΑΛΙΚΗ",
    description: "Hostess",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "session-2-standup",
    time: "15:25",
    endTime: "15:35",
    title: "Performance Stand Up",
    location: "Main Stage",
    type: "performance",
  },
  {
    id: "speaker-marina",
    time: "15:35",
    endTime: "15:53",
    title: "ΜΑΡΙΝΑ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "speaker-fylaktakis",
    time: "15:53",
    endTime: "16:11",
    title: "ΦΥΛΑΚΤΑΚΗΣ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "speaker-nina",
    time: "16:11",
    endTime: "16:29",
    title: "ΝΙΝΑ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "session-2-performance",
    time: "16:29",
    endTime: "16:40",
    title: "Performance",
    location: "Main Stage",
    type: "performance",
  },
  {
    id: "session-2-host-closing",
    time: "16:40",
    endTime: "16:45",
    title: "ΑΛΙΚΗ",
    description: "Hostess",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "break-2",
    time: "16:45",
    endTime: "17:50",
    title: "2nd Break",
    type: "break",
  },
  {
    id: "wine-tasting-workshop",
    time: "17:15",
    endTime: "17:45",
    title: "Wine Tasting Workshop",
    location: "Workshop Area",
    type: "workshop",
  },
  {
    id: "session-3-host-opening",
    time: "17:50",
    endTime: "17:55",
    title: "ΑΛΙΚΗ",
    description: "Hostess",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "speaker-makris",
    time: "17:55",
    endTime: "18:13",
    title: "ΜΑΚΡΗΣ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "speaker-mperis",
    time: "18:13",
    endTime: "18:31",
    title: "ΜΠΕΡΗΣ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "speaker-theofanidis",
    time: "18:31",
    endTime: "18:49",
    title: "ΘΕΟΦΑΝΙΔΗΣ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "session-3-song",
    time: "18:49",
    endTime: "18:59",
    title: "Performance τραγούδι",
    location: "Main Stage",
    type: "performance",
  },
  {
    id: "session-3-host-mid",
    time: "18:59",
    endTime: "19:04",
    title: "ΑΛΙΚΗ",
    description: "Hostess",
    location: "Main Stage",
    type: "ceremony",
  },
  {
    id: "speaker-kaperonis",
    time: "19:04",
    endTime: "19:14",
    title: "ΚΑΠΕΡΩΝΗΣ",
    location: "Main Stage",
    type: "talk",
  },
  {
    id: "session-3-curators",
    time: "19:14",
    endTime: "19:24",
    title: "Curators",
    location: "Main Stage",
    type: "ceremony",
  },
];

type EventIcon =
  | {
      kind: "component";
      Icon: ComponentType<{ className?: string }>;
    }
  | {
      kind: "image";
      src: string;
    };

export const eventIcons: Record<TimelineEvent["type"], EventIcon> = {
  registration: {
    kind: "image",
    src: "/schedule/register.svg",
  },
  talk: {
    kind: "component",
    Icon: Mic,
  },
  break: {
    kind: "image",
    src: "/schedule/break.svg",
  },
  workshop: {
    kind: "image",
    src: "/schedule/eye.svg",
  },
  performance: {
    kind: "image",
    src: "/schedule/eye.svg",
  },
  ceremony: {
    kind: "image",
    src: "/schedule/eye.svg",
  },
};

export const eventColors: Record<TimelineEvent["type"], string> = {
  registration: "bg-neutral-100 text-neutral-600",
  talk: "bg-amber-50 text-amber-600",
  break: "bg-emerald-50 text-emerald-600",
  workshop: "bg-violet-50 text-violet-600",
  performance: "bg-pink-50 text-pink-600",
  ceremony: "bg-sky-50 text-sky-600",
};

export const dotColors: Record<TimelineEvent["type"], string> = {
  registration: "bg-neutral-400",
  talk: "bg-amber-400",
  break: "bg-emerald-400",
  workshop: "bg-violet-400",
  performance: "bg-pink-400",
  ceremony: "bg-sky-400",
};
