import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { Plane, Clock, Globe, Navigation, BarChart3, Users } from "lucide-react";

export default function AirportsPage() {
  return (
    <SolutionTemplate
      badge="Airports & Transit"
      headline="Guide every passenger, every terminal."
      subheadline="From check-in to gate, help passengers navigate complex multi-terminal airports with step-by-step indoor directions, flight integration, and accessibility routing."
      accentColor="cyan"
      stats={[
        { value: "35%", label: "Reduction in missed connections" },
        { value: "Multi-terminal", label: "Unified navigation map" },
        { value: "15+ lang", label: "Multilingual support" },
        { value: "CISF", label: "Security zone aware routing" },
      ]}
      benefits={[
        { icon: <Plane size={20} className="text-cyan-400" />, title: "Gate navigation", desc: "Passengers find their gate with estimated walk time based on real-time crowding and distance." },
        { icon: <Clock size={20} className="text-yellow-400" />, title: "Reduce missed flights", desc: "Early-arrival alerts and shortest-path routing minimise connection time crunches." },
        { icon: <Globe size={20} className="text-blue-400" />, title: "Multi-terminal maps", desc: "Unified wayfinding covering departures, arrivals, transit zones, and inter-terminal transit." },
        { icon: <Navigation size={20} className="text-green-400" />, title: "Security-aware routing", desc: "Pathfinding respects restricted zones, CISF checkpoints, and passenger category permissions." },
        { icon: <BarChart3 size={20} className="text-orange-400" />, title: "Flow analytics", desc: "Identify bottlenecks at immigration, security, and boarding to optimise staffing." },
        { icon: <Users size={20} className="text-purple-400" />, title: "Staff operations", desc: "Ground crew and airline staff navigation mode with airside access control." },
      ]}
      useCases={[
        "Check-in counter to departure gate routing",
        "Baggage claim to exit navigation",
        "Transit passenger connection guidance",
        "Lounge and restaurant discovery",
        "Duty-free zone mapping with promotions",
        "Accessibility routing for mobility-impaired",
        "Real-time flight delay rerouting",
        "Emergency evacuation guidance",
      ]}
      testimonial={{
        text: "We evaluated 6 vendors. Wayfinder was the only one with sub-2-week deployment and true multi-terminal support. Our missed-connection incidents dropped 35% in Q1.",
        name: "Sarah Chen",
        role: "Head of Digital Experience, Changi Airport Group",
      }}
    />
  );
}
