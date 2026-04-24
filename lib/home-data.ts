import { Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaLinkedin } from "react-icons/fa";
import { EventData, TransportOption, SocialLink, TeamMember } from "@/types/home";

export const eventData: EventData = {
  title: "TEDxPanteionUniversity",
  theme: "Sensorium",
  date: "March 23rd, 2026",
  time: "10:00 AM - 6:00 PM",
  venue: "Ίδρυμα Μιχάλης Κακογιάννης",
  address: "Pireos 206, Tavros 177 78",
  description: "Join us for an inspiring day of thought-provoking talks, innovative ideas, and meaningful connections. TEDxPanteionUniversity brings together visionaries, change-makers, and curious minds to explore ideas that shape our future. Experience the power of ideas worth spreading in an intimate, locally curated event.",
};

export const transportationOptions: TransportOption[] = [
  { method: "Metro", details: "-", icon: "🚇" },
  { method: "Bus", details: "-", icon: "🚌" },
  { method: "Car", details: "-", icon: "🚗" },
];

export const socialLinks: SocialLink[] = [
  { platform: "Website", icon: Globe, handle: "TEDxPanteion University", url: "https://tedxpanteionuniversity.com/" },
  { platform: "Facebook", icon: FaFacebookF, handle: "TEDxPanteion University", url: "https://web.facebook.com/TEDxPANTEIONUNIVERSITY/?_rdc=1&_rdr#" },
  { platform: "Instagram", icon: FaInstagram, handle: "TEDxPanteion University", url: "https://www.instagram.com/tedxpanteionuniversity/?hl=en" },
  { platform: "TikTok", icon: FaTiktok, handle: "TEDxPanteion University", url: "https://www.tiktok.com/@tedxpanteionuniversity" },
  { platform: "Spotify", icon: FaSpotify, handle: "TEDxPanteion University", url: "https://open.spotify.com/show/5qEUo7uwYL829pcyCwjCsO?si=y-PD73rZSAeb3yT2jyHiwA&dl_branch=1&nd=1&dlsi=35612f59725843dd" },
  { platform: "Youtube", icon: FaYoutube, handle: "TEDxPanteion University", url: "https://www.youtube.com/@tedxpanteionuniversity9799" },
  { platform: "LinkedIn", icon: FaLinkedin, handle: "TEDxPanteion University", url: "https://www.linkedin.com/company/tedxpanteionuni/" },
];

export const teamMembers: TeamMember[] = [
  { name: "Fanis Efstathiou", role: "Curator", image: "/team/fanis.png" },
  { name: "Alexandra Storismenou", role: "Curator", image: "/team/alexandra.png" },
  
];