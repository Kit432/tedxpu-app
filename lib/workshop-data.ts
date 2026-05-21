import { Workshop } from "@/types/workshop";

export const workshops: Workshop[] = [
  {
    title: "Wine Tasting WS",
    description: "About the workshop",
    facilitator: "K.Theodorakakoy",
    time: "17:15 - 17:45",
    room: "Room A",
    seatsLeft: 2,
    capacity: 30,
    registerHref: "#",
  },
  {
    title: "Sound and memory",
    description: "A sensory field lab",
    facilitator: "M. Antoniou",
    time: "13:15 - 14:00",
    room: "Room B",
    seatsLeft: 7,
    capacity: 24,
    registerHref: "#",
  },
  {
    title: "Sketch the senses",
    description: "Fast drawing session",
    facilitator: "TEDxPU Team",
    time: "15:30 - 16:15",
    room: "Room C",
    seatsLeft: 11,
    capacity: 28,
    registerHref: "#",
  },
];
