import Image from "next/image";
import { MapPin, Calendar, Mail, Globe} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaLinkedin } from "react-icons/fa";

// Placeholder data - will be replaced with actual data later
const eventData = {
  title: "TEDxPanteionUniversity",
  theme: "Ideas Worth Spreading",
  date: "March 15, 2025",
  time: "10:00 AM - 6:00 PM",
  venue: "Panteion University Main Auditorium",
  address: "Syngrou Ave 136, Athens 176 71",
  description:
    "Join us for an inspiring day of thought-provoking talks, innovative ideas, and meaningful connections. TEDxPanteionUniversity brings together visionaries, change-makers, and curious minds to explore ideas that shape our future. Experience the power of ideas worth spreading in an intimate, locally curated event.",
};

const transportationOptions = [
  {
    method: "Metro",
    details: "Line 2 (Red) - Syngrou-Fix Station, 5 min walk",
    icon: "🚇",
  },
  {
    method: "Bus",
    details: "Lines 040, 106, 126 - Panteion Stop",
    icon: "🚌",
  },
  {
    method: "Car",
    details: "Limited parking available at Syngrou Ave",
    icon: "🚗",
  },
];

const socialLinks = [
  
  { platform: "Website", icon: Globe, handle: "TEDxPanteion University", url: "https://tedxpanteionuniversity.com/" },
  { platform: "Facebook", icon: FaFacebookF, handle: "TEDxPanteion University", url: "https://web.facebook.com/TEDxPANTEIONUNIVERSITY/?_rdc=1&_rdr#" },
  { platform: "Instagram", icon: FaInstagram, handle: "TEDxPanteion University", url: "https://www.instagram.com/tedxpanteionuniversity/?hl=en" },
  { platform: "TikTok", icon: FaTiktok, handle: "TEDxPanteion University", url: "https://www.tiktok.com/@tedxpanteionuniversity"},
  { platform: "Spotify", icon: FaSpotify, handle: "TEDxPanteion University", url: "https://open.spotify.com/show/5qEUo7uwYL829pcyCwjCsO?si=y-PD73rZSAeb3yT2jyHiwA&dl_branch=1&nd=1&dlsi=35612f59725843dd"},
  { platform: "Youtube", icon: FaYoutube, handle: "TEDxPanteion University", url: "https://www.youtube.com/@tedxpanteionuniversity9799"},
  { platform: "LinkedIn", icon: FaLinkedin, handle: "TEDxPanteion University", url: "https://www.linkedin.com/company/tedxpanteionuni/" },
];

const teamMembers = [
  { name: "Alexandra Papadopoulou", role: "Lead Organizer", image: "https://picsum.photos/seed/team1/200/200" },
  { name: "Dimitris Konstantinou", role: "Curator", image: "https://picsum.photos/seed/team2/200/200" },
  { name: "Maria Evangelou", role: "Speakers Lead", image: "https://picsum.photos/seed/team3/200/200" },
  { name: "Nikos Athanasiou", role: "Marketing Director", image: "https://picsum.photos/seed/team4/200/200" },
  { name: "Elena Dimitriou", role: "Event Coordinator", image: "https://picsum.photos/seed/team5/200/200" },
  { name: "Giorgos Michailidis", role: "Technical Lead", image: "https://picsum.photos/seed/team6/200/200" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 dark:to-background" />

        <div className="relative px-5 pt-12 pb-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28">
              <Image
                src="https://picsum.photos/seed/tedxlogo/200/200"
                alt="TEDx Panteion University Logo"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {eventData.title}
            </h1>
            <p className="text-sm text-red-600 font-medium tracking-wide uppercase">
              {eventData.theme}
            </p>
          </div>

          {/* Event Info Card */}
          <div className="bg-card rounded-2xl border border-border/50 p-4 shadow-sm">
            <div className="space-y-3">
              {/* Date & Time */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30">
                  <Calendar className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{eventData.date}</p>
                  <p className="text-xs text-muted-foreground">{eventData.time}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{eventData.venue}</p>
                  <p className="text-xs text-muted-foreground">{eventData.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-5 py-6">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">About the Event</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {eventData.description}
          </p>
        </div>
      </section>

      {/* Getting There Section */}
      <section className="px-5 py-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Getting There</h2>
        <div className="space-y-3">
          {transportationOptions.map((option) => (
            <div
              key={option.method}
              className="bg-card rounded-xl border border-border/50 p-4 flex items-center gap-4"
            >
              <div className="text-2xl">{option.icon}</div>
              <div>
                <p className="text-sm font-medium text-foreground">{option.method}</p>
                <p className="text-xs text-muted-foreground">{option.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-4 rounded-2xl overflow-hidden border border-border/50 bg-muted/30 h-40 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs">Interactive map coming soon</p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-5 py-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h2>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border/50 p-4 flex items-center gap-3 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 dark:bg-red-950/30">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{social.platform}</p>
                  <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="px-5 py-6 pb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Meet the Team</h2>
        <div className="grid grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover border-2 border-border/50"
                  sizes="80px"
                />
              </div>
              <p className="text-xs font-medium text-foreground truncate">{member.name.split(" ")[0]}</p>
              <p className="text-[10px] text-muted-foreground truncate">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-6 pb-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-5 border border-red-100 dark:border-red-900/50">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-red-600" />
            <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Have questions? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:info@tedxpanteion.com"
            className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-xl active:scale-[0.98] transition-transform"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
