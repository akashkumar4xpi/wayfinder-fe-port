"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Database } from "lucide-react";

const featureSections = [
  {
    title: "For Visitors: Mobile Navigation",
    desc: "A Google Maps-like experience for indoor spaces.",
    items: [
      { title: "Blue Dot Navigation", desc: "Real-time positioning with 1-meter accuracy." },
      { title: "Voice Guidance", desc: "Audio instructions for accessibility." },
      { title: "Offline Mode", desc: "Works even without internet using cached maps." },
      { title: "Share Location", desc: "Send your live location to friends or family." }
    ],
    icon: <Smartphone className="w-12 h-12 text-blue-500" />
  },
  {
    title: "For Managers: Admin Dashboard",
    desc: "Full control over your building's digital twin.",
    items: [
      { title: "Heatmap Analytics", desc: "See where visitors spend the most time." },
      { title: "Push Notifications", desc: "Send offers when users enter specific zones." },
      { title: "Asset Tracking", desc: "Track medical equipment or security staff." },
      { title: "Map Editor", desc: "Update blocked paths or new stores instantly." }
    ],
    icon: <Database className="w-12 h-12 text-purple-500" />
  },
  {
    title: "For Kiosks: Touch Interface",
    desc: "Large screen 2D maps for entrances and lobbies.",
    items: [
      { title: "QR Code Handoff", desc: "Scan on kiosk, continue on mobile." },
      { title: "Multi-floor 2D View", desc: "Visualize complex building structures." },
      { title: "Directory Search", desc: "Smart search for doctors, stores, or gates." },
      { title: "Ada Compliant", desc: "Wheelchair accessible routes mode." }
    ],
    icon: <Monitor className="w-12 h-12 text-green-500" />
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-16 text-center container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Product Capabilities</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Wayfinder is not just a map. It is a complete operating system for indoor location intelligence.
        </p>
      </section>

      <div className="container mx-auto px-4 pb-24 space-y-24">
        {featureSections.map((section, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={idx} 
            className="grid md:grid-cols-12 gap-12 items-start border-t border-white/10 pt-16"
          >
            <div className="md:col-span-4">
              <div className="mb-6 p-4 bg-neutral-900 rounded-2xl w-fit">{section.icon}</div>
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-400 text-lg">{section.desc}</p>
            </div>

            <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
              {section.items.map((item, i) => (
                <div key={i} className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </main>
  );
}