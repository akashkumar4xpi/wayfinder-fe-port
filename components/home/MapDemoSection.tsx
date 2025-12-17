"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation2, Clock, Footprints } from "lucide-react";

export default function MapDemoSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Simulation steps logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000); // Change step every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { text: "Detected Entrance Hall", dist: "0m" },
    { text: "Turn right at Starbucks", dist: "20m" },
    { text: "Go up via Elevator B", dist: "50m" },
    { text: "Arrived at Dr. Sharma's Clinic", dist: "10m" },
  ];

  return (
    <section className="py-24 bg-neutral-950 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Text Context */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intuitive navigation, <br />
            <span className="text-blue-500">just like GPS.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            No expensive hardware required. Wayfinder uses existing Wi-Fi and magnetic fingerprints to guide visitors with 1-meter accuracy.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Save Time</h4>
                <p className="text-gray-500">Visitors find destinations 70% faster.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Footprints size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Seamless Pathfinding</h4>
                <p className="text-gray-500">Multi-floor navigation logic built-in.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Phone Simulation (Pure CSS/Framer) */}
        <div className="md:w-1/2 flex justify-center z-10">
          <div className="relative w-[300px] h-[600px] bg-black border-8 border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20" />
            
            {/* Map UI Header */}
            <div className="absolute top-0 left-0 right-0 bg-neutral-900/90 backdrop-blur p-6 pt-10 z-10 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Navigation2 size={20} className="text-white fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Next Turn</p>
                  <p className="text-white font-bold text-sm">
                    {steps[activeStep].text}
                  </p>
                </div>
              </div>
            </div>

            {/* The Map Visualization */}
            <div className="relative w-full h-full bg-neutral-800">
              {/* Grid Lines (Map) */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Path Line (SVG Animation) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  d="M 150 500 Q 150 300 220 250 T 100 100"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Moving Blue Dot */}
              <motion.div
                className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg shadow-blue-500/50 z-10"
                animate={{
                  top: ["83%", "50%", "42%", "16%"],
                  left: ["50%", "50%", "73%", "33%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Field of View Cone */}
                <div className="absolute -top-16 -left-8 w-24 h-24 bg-gradient-to-t from-blue-500/30 to-transparent rounded-full blur-md transform -rotate-45" />
              </motion.div>

              {/* Destination Pin */}
              <div className="absolute top-[14%] left-[30%] text-red-500">
                <MapPin size={32} fill="currentColor" />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-neutral-900 p-4 border-t border-white/10 flex justify-around">
               <div className="text-center">
                 <p className="text-xs text-gray-400">Distance</p>
                 <p className="text-white font-bold">{steps[activeStep].dist}</p>
               </div>
               <div className="text-center">
                 <p className="text-xs text-gray-400">Time</p>
                 <p className="text-white font-bold">2 min</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}