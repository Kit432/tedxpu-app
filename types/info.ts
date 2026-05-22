import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface EventData {
  title: string;
  theme: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
}

export interface TransportOption {
  method: string;
  details: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  icon: LucideIcon | IconType;
  handle: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TeamGroupMember {
  name: string;
  director?: boolean;
}

export interface TeamGroup {
  name: string;
  slug: string;
  image: string;
  members: TeamGroupMember[];
}
