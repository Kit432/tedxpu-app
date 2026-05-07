import Link from "next/link";
import { CalendarDays, Home, Info } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    active: true,
  },
  {
    label: "Schedule",
    href: "/schedule",
    icon: CalendarDays,
  },
  {
    label: "Info",
    href: "/info",
    icon: Info,
  },
];

export default function SideNav() {
  return (
    <nav
      className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-7"
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/75 active:scale-95"
          >
            <Icon
              className={`h-11 w-11 stroke-[2.6] ${
                item.active ? "text-[#009b50]" : "text-black"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}