"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Zap, Building2, Users } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const TYPING_WORDS = ["Hospitals", "Malls", "Airports", "Offices", "Universities"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_WORDS[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const stats = [
    { icon: <Building2 size={16} />, label: "500+ Buildings Mapped" },
    { icon: <Users size={16} />, label: "1M+ Navigations Daily" },
    { icon: <Zap size={16} />, label: "99.2% Accuracy" },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050508] text-white">

      {/* Orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] top-[-100px] left-[-150px] opacity-60" />
      <div className="orb orb-purple w-[500px] h-[500px] bottom-[-100px] right-[-100px] opacity-50" />
      <div className="orb orb-cyan w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-small opacity-100 z-0" />

      {/* Floating Map Pins */}
      <motion.div
        className="absolute top-1/4 left-[12%] text-blue-500/50"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin size={32} className="drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-[10%] text-cyan-500/40"
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <MapPin size={24} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[20%] text-purple-500/30"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <MapPin size={20} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-8">

        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          The Future of Indoor Navigation is Here
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-[1.05]"
        >
          <span className="text-gradient-hero">Navigate Complex</span>
          <br />
          <span className="text-gradient-hero">Spaces Without</span>
          <br />
          <span className="text-glow-blue text-blue-400">Confusion.</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-4 mb-6 text-2xl md:text-3xl font-semibold text-gray-300"
        >
          Built for{" "}
          <span className="text-gradient-blue font-bold">
            {displayed}
            <span className="cursor-blink" />
          </span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Turn any building into a smart, guided experience. No expensive beacons required — 
          just Wi-Fi fingerprinting delivering 1-meter indoor accuracy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5"
          >
            Get a Free Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-8 py-4 glass rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Explore Features
          </Link>
        </motion.div>

        {/* Stats Ticker */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-blue-400">{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent z-10" />
    </section>
  );
}