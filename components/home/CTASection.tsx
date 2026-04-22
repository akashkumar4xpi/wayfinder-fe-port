"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-28 relative overflow-hidden bg-[#050508]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-[#050508] to-purple-950/30" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="orb orb-blue w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center animate-float">
              <MapPin size={28} className="text-blue-400 fill-blue-400/30" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gradient-hero mb-6">
            Ready to map your building?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Get a free 30-minute consultation with our navigation engineers. We&apos;ll assess your space 
            and give you a deployment roadmap — no commitment required.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3.5 glass rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold text-sm transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] whitespace-nowrap"
              >
                Get Started <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto mb-6 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
            >
              ✅ We&apos;ll reach out within 24 hours. Check your inbox!
            </motion.div>
          )}

          <p className="text-gray-600 text-sm mb-10">
            Or{" "}
            <Link href="/contact" className="text-blue-500 hover:text-blue-400 underline transition-colors">
              fill out the full contact form
            </Link>
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-xs">
            {["SOC 2 Compliant", "No Beacon Hardware", "2-week Deployment", "24/7 Support"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
