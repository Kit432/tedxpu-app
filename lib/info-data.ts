import { Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaLinkedin } from "react-icons/fa";
import { EventData, SocialLink, TeamGroup, TransportOption } from "@/types/info";

export const eventData: EventData = {
  title: "TEDxPanteion University",
  theme: "Sensorium",
  date: "May 23rd, 2026",
  time: "10:00 AM - 6:00 PM",
  venue: "Ίδρυμα Μιχάλης Κακογιάννης",
  address: "Pireos 206, Tavros 177 78",
  description: "Join us for an inspiring day of thought-provoking talks, innovative ideas, and meaningful connections. TEDxPanteionUniversity brings together visionaries, change-makers, and curious minds to explore ideas that shape our future. Experience the power of ideas worth spreading in an intimate, locally curated event.",
};

export const socialLinks: SocialLink[] = [
  { platform: "Website", icon: Globe, handle: "TEDxPanteion University", url: "https://tedxpanteionuniversity.com/" },
  { platform: "Facebook", icon: FaFacebookF, handle: "TEDxPanteion University", url: "https://web.facebook.com/TEDxPANTEIONUNIVERSITY/?_rdc=1&_rdr#" },
  { platform: "Instagram", icon: FaInstagram, handle: "TEDxPanteion University", url: "https://www.instagram.com/tedxpanteionuniversity/?hl=en" },
  { platform: "TikTok", icon: FaTiktok, handle: "TEDxPanteion University", url: "https://www.tiktok.com/@tedxpanteionuniversity" },
  { platform: "Spotify", icon: FaSpotify, handle: "TEDxPanteion University", url: "https://open.spotify.com/show/5qEUo7uwYL829pcyCwjCsO?si=y-PD73rZSAeb3yT2jyHiwA&dl_branch=1&nd=1&dlsi=35612f59725843dd" },
  { platform: "Youtube", icon: FaYoutube, handle: "TEDxPanteion University", url: "https://www.youtube.com/@tedxpanteionuniversity9799" },
  { platform: "LinkedIn", icon: FaLinkedin, handle: "TEDxPanteion University", url: "https://www.linkedin.com/company/tedxpanteionuni/" },
];

export const transportationOptions: TransportOption[] = [
  { method: "Metro", details: "-", icon: "🚇" },
  { method: "Bus", details: "-", icon: "🚌" },
  { method: "Car", details: "-", icon: "🚗" },
];

export const teamGroups: TeamGroup[] = [
  {
    name: "Curation Team",
    slug: "curation",
    image: "/team/curation.webp",
    members: [
      { name: "Efstathiou Fanis" },
      { name: "Storismenou Alexandra" },
    ],
  },
  {
    name: "Graphics & Design Team",
    slug: "graphs",
    image: "/team/graphs.webp",
    members: [
      { name: "Lykas Alkiviadis", director: true },
      { name: "Loukakis Giorgos-F." },
      { name: "Dimas Triantafyllos" },
      { name: "Sismanopoulou Aigli" },
    ],
  },
  {
    name: "Marketing & IT Team",
    slug: "mark",
    image: "/team/marketing.webp",
    members: [
      { name: "Lekka Nikoleta", director: true },
      { name: "Egglezopoulou Ioanna" },
      { name: "Soupila Marta" },
      { name: "Hajdari Kristiana" },
      { name: "Polydorou Eirini" },
      { name: "Lin Kit" },
    ],
  },
  {
    name: "Experience Team",
    slug: "exp",
    image: "/team/exp.webp",
    members: [
      { name: "Koutsiouba Argyrh", director: true },
      { name: "Aliftira Georgia" },
      { name: "Porfyris Alexandros" },
      { name: "Vaggeli Eirini" },
      { name: "Skordyli Eleytheria" },
      { name: "Christias Ilias" },
    ],
  },
  {
    name: "Speakers Team",
    slug: "speakers",
    image: "/team/speakers.webp",
    members: [
      { name: "Mytakidis Sotiris" },
      { name: "Christou Artemis" },
      { name: "Koutsoumpa Eleni" },
      { name: "Georga Matina" },
    ],
  },
  {
    name: "Sponsorships Team",
    slug: "spons",
    image: "/team/spons.webp",
    members: [
      { name: "Ntantalia Chysovalanto", director: true },
      { name: "Kapnistou Maria" },
      { name: "Zoidi Georgia" },
      { name: "Leontarakis Iasonas" },
      { name: "Papanikolaou Evelina" },
    ],
  },
];
