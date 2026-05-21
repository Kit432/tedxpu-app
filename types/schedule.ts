export interface TimelineEvent {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  description?: string;
  location?: string;
  isSectionHeader?: boolean;
  type: "registration" | "talk" | "break" | "workshop" | "performance" | "ceremony";
}
