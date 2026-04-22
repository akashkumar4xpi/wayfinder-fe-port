import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { GraduationCap, Users, MapPin, Navigation, Globe, Calendar } from "lucide-react";

export default function UniversitiesPage() {
  return (
    <SolutionTemplate
      badge="Universities & Campuses"
      headline="Every building, every lecture hall — found."
      subheadline="Help students, faculty, and visitors navigate sprawling university campuses with department-level precision. From admission day to graduation, make your campus welcoming."
      accentColor="yellow"
      stats={[
        { value: "90%", label: "Reduction in 'where is it?' queries" },
        { value: "Multi-campus", label: "Unified navigation map" },
        { value: "Open API", label: "Student app integration" },
        { value: "NAAC", label: "Digital infrastructure ready" },
      ]}
      benefits={[
        { icon: <GraduationCap size={20} className="text-yellow-400" />, title: "Lecture hall finder", desc: "Students navigate to the right hall for their class schedule with step-by-step directions." },
        { icon: <Users size={20} className="text-blue-400" />, title: "Admission day ready", desc: "Prospective students and parents navigate open-day events and admissions offices without getting lost." },
        { icon: <MapPin size={20} className="text-red-400" />, title: "Department mapping", desc: "Every department, lab, library section, hostel, and canteen mapped with real-time information." },
        { icon: <Navigation size={20} className="text-green-400" />, title: "Inter-campus routing", desc: "Multi-campus universities get unified navigation across all connected locations." },
        { icon: <Globe size={20} className="text-cyan-400" />, title: "International student UX", desc: "Multilingual support makes navigation inclusive for international students from day one." },
        { icon: <Calendar size={20} className="text-purple-400" />, title: "Event navigation", desc: "Automatically generate navigation maps for convocations, cultural fests, and sports events." },
      ]}
      useCases={[
        "First-year student campus orientation",
        "Finding department offices and labs",
        "Library section and resource room finder",
        "Examination hall navigation during exams",
        "Sports complex and hostel routing",
        "Faculty parking and office navigation",
        "Alumni events and convocation guidance",
        "Disability-friendly accessible campus routes",
      ]}
      testimonial={{
        text: "Students and visitors constantly compliment how easy it is to navigate our 250-acre campus. Integration with our existing Wi-Fi was seamless and deployment took just 11 days.",
        name: "Vikram Singh",
        role: "Campus Manager, IIT Delhi",
      }}
    />
  );
}
