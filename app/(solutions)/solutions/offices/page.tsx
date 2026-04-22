import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { Building2, Users, Calendar, Lock, BarChart3, Smartphone } from "lucide-react";

export default function OfficesPage() {
  return (
    <SolutionTemplate
      badge="Corporate Offices"
      headline="Every employee finds their way."
      subheadline="Help employees, clients, and visitors navigate large corporate campuses, hot-desking environments, and multi-wing offices — from the lobby to any desk or room."
      accentColor="green"
      stats={[
        { value: "5 min", label: "Average time saved per visit" },
        { value: "Hot-desk", label: "Real-time desk locator" },
        { value: "SSO", label: "Enterprise SSO integration" },
        { value: "GDPR", label: "Privacy-compliant data" },
      ]}
      benefits={[
        { icon: <Building2 size={20} className="text-green-400" />, title: "Campus navigation", desc: "Multi-building corporate campuses mapped as one unified navigable space." },
        { icon: <Users size={20} className="text-blue-400" />, title: "Visitor management", desc: "Guests navigate from security desk to meeting rooms without escort, improving experience." },
        { icon: <Calendar size={20} className="text-purple-400" />, title: "Meeting room finder", desc: "Integrates with Outlook and Google Calendar to guide employees directly to their next meeting." },
        { icon: <Lock size={20} className="text-red-400" />, title: "Access-aware routing", desc: "Navigation respects access control zones — guests get restricted routes automatically." },
        { icon: <BarChart3 size={20} className="text-orange-400" />, title: "Space utilisation", desc: "Understand which floors, rooms, and corridors are actually being used to plan real-estate." },
        { icon: <Smartphone size={20} className="text-cyan-400" />, title: "Mobile & kiosk", desc: "Embedded in your company app or standalone kiosks at lobby entrances." },
      ]}
      useCases={[
        "Visitor check-in to meeting room navigation",
        "New employee onboarding campus tours",
        "Hot-desk and free seat locator",
        "Canteen and amenity discovery",
        "Emergency muster point guidance",
        "IT helpdesk and HR room finding",
        "Multi-wing office floor navigation",
        "After-hours limited-access routing",
      ]}
      testimonial={{
        text: "We have a 22-floor headquarters. Wayfinder eliminated the endless 'where is the meeting room?' Slack messages. Our visitors always arrive on time now.",
        name: "Tanvi Sood",
        role: "Head of Workplace, Infosys BPM",
      }}
    />
  );
}
