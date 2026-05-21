import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/SideNav";
import { DeveloperSignature } from "@/components/home/SensoriumHome";

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
        {/*
          Built by Λιν Χονγκ Τσε (Κιτ) — TEDxPanteion University Sensorium web app
          Github: https://github.com/Kit432
        */}
        <div className="fixed inset-0 bg-white text-black">
          <div className="relative mx-auto flex h-full w-full max-w-[430px] flex-col overflow-hidden bg-white">
            <Header />
            <SideNav />
            <DeveloperSignature />
            <main className="relative min-h-0 flex-1 overflow-x-hidden overflow-y-scroll overscroll-contain [-webkit-overflow-scrolling:touch]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
