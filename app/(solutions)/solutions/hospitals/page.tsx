import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { Heart, Clock, Navigation, MapPin, Users, Activity } from "lucide-react";

export default function HospitalsPage() {
  return (
    <SolutionTemplate
      badge="Healthcare"
      headline="Navigation built for hospitals."
      subheadline="Guide patients and visitors to any ward, department, or clinic — in multi-floor hospitals with 1-meter accuracy. Reduce staff interruptions and improve HCAHPS scores."
      accentColor="blue"
      stats={[
        { value: "70%", label: "Reduction in 'lost visitor' queries" },
        { value: "2 min", label: "Average time to find department" },
        { value: "HIPAA", label: "Compliant data handling" },
        { value: "150+", label: "Hospital deployments" },
      ]}
      benefits={[
        { icon: <Heart size={20} className="text-red-400" />, title: "Patient-first design", desc: "Simple, accessible UI designed for patients who may be stressed or unfamiliar with technology." },
        { icon: <Clock size={20} className="text-blue-400" />, title: "Reduce wait times", desc: "Patients arrive at the right place at the right time, reducing cascading appointment delays." },
        { icon: <Navigation size={20} className="text-green-400" />, title: "Multi-floor routing", desc: "Seamlessly guide across floors with elevator-aware pathfinding and accessibility routing." },
        { icon: <MapPin size={20} className="text-purple-400" />, title: "OP/IP zone mapping", desc: "Map OPD, IPD, ICU, diagnostics, and pharmacy zones with custom color-coding." },
        { icon: <Users size={20} className="text-yellow-400" />, title: "Staff navigation", desc: "Separate interface for staff to navigate to administrative areas, stores, and labs." },
        { icon: <Activity size={20} className="text-orange-400" />, title: "Patient flow analytics", desc: "Understand crowded zones, peak hours, and optimize bed allocation with heatmap data." },
      ]}
      useCases={[
        "Guiding patients from reception to OPD",
        "Navigating from parking to emergency ward",
        "Finding diagnostic labs and pharmacy",
        "ICU family waiting area directions",
        "NICU / isolation ward visitor management",
        "Staff shortcut routing across departments",
        "Multi-campus hospital navigation",
        "Accessibility routing for wheelchair users",
      ]}
      testimonial={{
        text: "Wayfinder reduced lost-patient incidents by 90% in our 14-floor hospital. Our HCAHPS 'orientation & navigation' score rose from 72 to 91 within 3 months of deployment.",
        name: "Dr. Priya Nair",
        role: "CTO, Apollo Hospitals Bangalore",
      }}
    />
  );
}
