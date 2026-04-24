export interface TimelineEvent {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  description?: string;
  location?: string;
  type: "registration" | "talk" | "break" | "workshop" | "performance" | "ceremony";
}