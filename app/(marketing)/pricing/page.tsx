import type { Metadata } from "next";
import PricingContent from "@/components/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Pricing — Indoor Navigation Plans",
  description:
    "Transparent pricing for Wayfinder indoor navigation. Starter ₹49,999/mo, Growth ₹1,49,999/mo, Enterprise custom. No hidden fees. 14-day free trial. By Into Pie Pvt Ltd.",
  keywords: ["indoor navigation pricing", "wayfinder plans", "enterprise indoor GPS cost", "Into Pie pricing"],
  openGraph: {
    title: "Wayfinder Pricing — Simple, Transparent Indoor Navigation Plans",
    description: "From single-building pilots to hospital networks — pick a plan that fits your scale. No beacon hardware costs.",
    url: "/pricing",
  },
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingContent />;
}