import type { Metadata } from "next";
import { Info } from "@/components/info/Info";

export const metadata: Metadata = {
  title: "Info | TEDx Panteion University Sensorium",
  description:
    "Event details, team credits, and official links for TEDx Panteion University Sensorium.",
};

export default function InfoPage() {
  return <Info />;
}
