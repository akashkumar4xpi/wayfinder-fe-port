import type { Metadata } from "next";
import TeamContent from "@/components/team/TeamContent";

export const metadata: Metadata = {
  title: "Team — Into Pie Pvt Ltd",
  description:
    "Meet Ashwini Kumar Singh (CEO), Vivek Bhatt (Business Head), Akash Kumar (CTO), and Shamim Ahmad (Senior Engineer) — the core pillars behind Wayfinder and Into Pie Pvt Ltd.",
  keywords: ["Into Pie team", "Ashwini Kumar Singh", "Akash Kumar CTO", "Wayfinder founders", "indoor navigation engineers"],
  openGraph: {
    title: "Meet the Team — Into Pie Pvt Ltd | Wayfinder",
    description: "Four visionaries united by a single mission. The core pillars of Wayfinder, India's leading indoor navigation platform.",
    url: "/team",
  },
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return <TeamContent />;
}
