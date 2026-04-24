"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Calendar, HouseIcon, Users, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
{ href: "/", label: "Home", icon: HouseIcon },
  { href: "/schedule", label: "Schedule", icon: Calendar },
  { href: "/speakers", label: "Speakers", icon: Users },
  { href: "/workshops", label: "Workshops", icon: Wrench },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Safe area spacing for iOS devices */}
      <div className="h-[env(safe-area-inset-bottom)] bg-background/80 backdrop-blur-lg" />
      
      {/* Navigation bar */}
      <div className="bg-background/80 backdrop-blur-lg border-t border-border/50">
        <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 px-4 py-1 rounded-lg transition-all duration-200 min-w-[64px]",
                  "active:scale-95",
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon 
                  className={cn(
                    "transition-all duration-200",
                    isActive ? "w-6 h-6" : "w-5 h-5"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={cn(
                  "text-xs font-medium transition-all duration-200",
                  isActive && "font-semibold"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}