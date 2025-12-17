"use client";
import { motion } from "framer-motion";
import { Navigation, Smartphone, Lock, Activity } from "lucide-react";

const features = [
  {
    title: "Real-time Blue Dot",
    desc: "Navigate with 1-meter accuracy using our advanced indoor positioning algorithm.",
    icon: <Navigation className="w-6 h-6 text-blue-400" />,
    colSpan: "col-span-1 md:col-span-2", // Big box
    bg: "bg-gradient-to-br from-blue-900/20 to-black",
  },
  {
    title: "Kiosk Mode",
    desc: "Optimized touch interface for large interactive displays.",
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    colSpan: "col-span-1", // Small box
    bg: "bg-neutral-900/50",
  },
  {
    title: "Enterprise Security",
    desc: "Role-based access control and encrypted map data storage.",
    icon: <Lock className="w-6 h-6 text-green-400" />,
    colSpan: "col-span-1",
    bg: "bg-neutral-900/50",
  },
  {
    title: "Heatmap Analytics",
    desc: "Understand visitor flow and dwell times to optimize your space layout.",
    icon: <Activity className="w-6 h-6 text-orange-400" />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-orange-900/20 to-black",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to guide visitors.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From mobile apps to physical kiosks, Wayfinder provides a unified navigation infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${feature.colSpan} ${feature.bg} p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors group`}
            >
              <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}