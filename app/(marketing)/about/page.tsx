import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Into Pie Pvt Ltd",
  description:
    "Learn about Into Pie Pvt Ltd, the Bangalore-based deep-tech startup behind Wayfinder — the enterprise indoor navigation platform. Founded 2022.",
  keywords: ["Into Pie Pvt Ltd", "Wayfinder team", "indoor navigation startup India", "Bangalore tech startup"],
  openGraph: {
    title: "About Into Pie Pvt Ltd — Builders of Wayfinder",
    description: "Four engineers united by a mission: make every complex space as navigable as Google Maps. Founded 2022, Bangalore.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}