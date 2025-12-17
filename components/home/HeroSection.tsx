"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react"; // Icons
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* Background Animated Grid (Abstract Map Feel) */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Elements Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 text-blue-500 blur-sm"
      >
        <MapPin size={40} />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
        >
          🚀 The Future of Indoor Guidance
        </motion.div>

        {/* Headline - Big & Bold */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Navigate Complex Spaces <br />
          <span className="text-blue-500">Without Confusion.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Turn your building into a smart space. Seamless navigation for Malls, Hospitals, and Offices with 99% accuracy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all flex items-center justify-center gap-2">
            Get a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/features" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white font-semibold transition-all">
            View Features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}