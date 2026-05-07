"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: string;
  activeIcon: string;
  exact?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: "/icons/home.svg",
    activeIcon: "/icons/active-home.svg",
    exact: true,
  },
  {
    label: "Schedule",
    href: "/schedule",
    icon: "/icons/schedule.svg",
    activeIcon: "/icons/active-schedule.svg",
  },
  {
    label: "Info",
    href: "/info",
    icon: "/icons/info.svg",
    activeIcon: "/icons/active-info.svg",
  },
];

function isActivePath(pathname: string, item: NavItem) {
  if (item.exact) {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-5"
      style={{
        right: "max(12px, calc((100vw - 430px) / 2 + 12px))",
      }}
      aria-label="Main navigation"
    >
      {navItems.map((item) => {
        const active = isActivePath(pathname, item);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            className="flex h-11 w-11 items-center justify-center rounded-2xl active:scale-95"
          >
            <img
              src={active ? item.activeIcon : item.icon}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </Link>
        );
      })}
    </nav>
  );
}