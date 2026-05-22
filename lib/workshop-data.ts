import { timelineEvents } from "@/lib/schedule-data";
import type { Workshop } from "@/types/workshop";

const workshopDetailsById: Record<
  string,
  Pick<Workshop, "description" | "facilitator" | "room" | "seatsLeft" | "capacity" | "registerHref">
> = {
  "theater-workshop": {
    description: "About the workshop",
    facilitator: "TEDxPU Team",
    room: "Workshop Area",
    seatsLeft: 0,
    capacity: 0,
    registerHref: "#",
  },
  "wine-tasting-workshop": {
    description: "About the workshop",
    facilitator: "K.Theodorakakoy",
    room: "Room A",
    seatsLeft: 2,
    capacity: 30,
    registerHref: "#",
  },
};

function formatWorkshopTime(time: string, endTime?: string) {
  return endTime ? `${time} - ${endTime}` : time;
}

export const workshops: Workshop[] = timelineEvents
  .filter((event) => event.type === "workshop")
  .map((event) => {
    const details = workshopDetailsById[event.id];

    return {
      title: event.title,
      description: details?.description ?? "",
      facilitator: details?.facilitator ?? "",
      time: formatWorkshopTime(event.time, event.endTime),
      room: details?.room ?? event.location ?? "",
      seatsLeft: details?.seatsLeft ?? 0,
      capacity: details?.capacity ?? 0,
      registerHref: details?.registerHref ?? "#",
    };
  });
