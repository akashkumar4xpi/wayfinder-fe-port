"use client";
import { motion } from "framer-motion";
import { Navigation, Smartphone, Lock, Activity, Globe, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Real-time Blue Dot",
    desc: "Navigate with 1-meter accuracy using our advanced Wi-Fi fingerprinting and magnetic field positioning. No beacons required.",
    icon: <Navigation className="w-6 h-6 text-blue-400" />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "from-blue-900/20 to-transparent",
    accent: "blue",
    tag: "Core Technology",
  },
  {
    title: "Kiosk Mode",
    desc: "Optimized touch interface for large displays in malls and hospitals.",
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    colSpan: "col-span-1",
    bg: "from-purple-900/20 to-transparent",
    accent: "purple",
    tag: "Hardware",
  },
  {
    title: "Enterprise Security",
    desc: "Role-based access control and AES-256 encrypted map data.",
    icon: <Lock className="w-6 h-6 text-green-400" />,
    colSpan: "col-span-1",
    bg: "from-green-900/20 to-transparent",
    accent: "green",
    tag: "Security",
  },
  {
    title: "Heatmap Analytics",
    desc: "Understand visitor flow, dwell times, and peak zones to optimize space layout and tenant performance.",
    icon: <Activity className="w-6 h-6 text-orange-400" />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "from-orange-900/20 to-transparent",
    accent: "orange",
    tag: "Analytics",
  },
  {
    title: "Multi-Floor Navigation",
    desc: "Seamlessly guide visitors across floors using elevator and staircase routing.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    colSpan: "col-span-1",
    bg: "from-cyan-900/20 to-transparent",
    accent: "cyan",
    tag: "Navigation",
  },
  {
    title: "Developer API",
    desc: "REST & WebSocket APIs to embed navigation into your own app.",
    icon: <Code2 className="w-6 h-6 text-yellow-400" />,
    colSpan: "col-span-1",
    bg: "from-yellow-900/10 to-transparent",
    accent: "yellow",
    tag: "SDK",
  },
];

const accentColors: Record<string, string> = {
  blue: "border-blue-500/20 group-hover:border-blue-500/50",
  purple: "border-purple-500/20 group-hover:border-purple-500/50",
  green: "border-green-500/20 group-hover:border-green-500/50",
  orange: "border-orange-500/20 group-hover:border-orange-500/50",
  cyan: "border-cyan-500/20 group-hover:border-cyan-500/50",
  yellow: "border-yellow-500/20 group-hover:border-yellow-500/50",
};

export default function FeatureGrid() {
  return (
    <section className="py-28 bg-[#050508] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="orb orb-blue w-[400px] h-[400px] top-0 right-0 opacity-20" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium uppercase tracking-widest"
          >
            Platform Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-5 text-gradient-hero"
          >
            Everything you need to guide visitors.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From mobile apps to physical kiosks — a unified indoor navigation platform, built for enterprise scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`${feature.colSpan} group relative p-7 rounded-2xl border bg-gradient-to-br ${feature.bg} card-hover cursor-default ${accentColors[feature.accent]} transition-all duration-300 overflow-hidden`}
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

              {/* Tag */}
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium mb-4 block">
                {feature.tag}
              </span>

              {/* Icon */}
              <div className="mb-4 p-3 bg-white/5 group-hover:bg-white/10 rounded-xl w-fit transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
          >
            View all features
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}