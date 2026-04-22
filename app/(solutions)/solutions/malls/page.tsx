import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { ShoppingBag, TrendingUp, MapPin, Smartphone, Star, BarChart3 } from "lucide-react";

export default function MallsPage() {
  return (
    <SolutionTemplate
      badge="Retail & Malls"
      headline="Turn shoppers into loyal visitors."
      subheadline="Help customers find stores, food courts, parking, and promotions instantly. Drive tenant footfall with intelligent indoor wayfinding."
      accentColor="purple"
      stats={[
        { value: "28%", label: "Increase in tenant footfall" },
        { value: "500+", label: "Stores indexed per mall" },
        { value: "Real-time", label: "Promotional banners in-map" },
        { value: "50+", label: "Mall deployments across India" },
      ]}
      benefits={[
        { icon: <ShoppingBag size={20} className="text-purple-400" />, title: "Store discovery", desc: "Shoppers find the exact store, floor, and entrance with turn-by-turn indoor directions." },
        { icon: <TrendingUp size={20} className="text-green-400" />, title: "Tenant revenue growth", desc: "Promoted store placements in navigation results drive measurable footfall increases." },
        { icon: <MapPin size={20} className="text-blue-400" />, title: "Multi-zone mapping", desc: "Map parking, anchor stores, food courts, restrooms, ATMs, and service desks." },
        { icon: <Smartphone size={20} className="text-cyan-400" />, title: "Kiosk & mobile", desc: "Dual-mode navigation — beautifully embedded in your mall app and touchscreen kiosks." },
        { icon: <Star size={20} className="text-yellow-400" />, title: "Promotions engine", desc: "Push location-based offers to shoppers as they navigate near relevant stores." },
        { icon: <BarChart3 size={20} className="text-orange-400" />, title: "Dwell analytics", desc: "Understand which zones attract visitors and for how long to optimise your layout." },
      ]}
      useCases={[
        "Finding a specific store by name or category",
        "Navigating from parking to a destination",
        "Locating nearest food court or restroom",
        "Directional kiosks at mall entrances",
        "Event and sale zone promotion",
        "New tenant onboarding routing",
        "Senior citizen accessibility routing",
        "Emergency exit pathfinding",
      ]}
      testimonial={{
        text: "Our retail tenants saw a 28% increase in footfall after Wayfinder launched. The kiosk experience is beautiful and customers use it instinctively.",
        name: "Rajesh Menon",
        role: "Operations Director, Lulu Mall Kochi",
      }}
    />
  );
}
