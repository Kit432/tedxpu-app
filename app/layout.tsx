import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/SideNav";

export const metadata: Metadata = {
  title: "TEDx Panteion University | Sensorium",
  description: "Official Sensorium web app for TEDx Panteion University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-[100dvh] overflow-hidden bg-white text-black">
          <div className="mx-auto flex min-h-[100dvh] w-full max-w-[430px] flex-col bg-white">
            <Header />
            <SideNav />
            <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}