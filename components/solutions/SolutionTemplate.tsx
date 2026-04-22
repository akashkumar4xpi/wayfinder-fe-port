"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface SolutionPageProps {
  badge: string;
  headline: string;
  subheadline: string;
  accentColor: string; // tailwind class for accent
  stats: { value: string; label: string }[];
  benefits: { icon: ReactNode; title: string; desc: string }[];
  useCases: string[];
  testimonial: { text: string; name: string; role: string };
}

export default function SolutionTemplate({
  badge, headline, subheadline, accentColor, stats, benefits, useCases, testimonial
}: SolutionPageProps) {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small opacity-40" />
        <div className="orb orb-blue w-[600px] h-[600px] top-[-100px] right-[-100px] opacity-20" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium uppercase tracking-widest">
              {badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-hero mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                Book a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 px-7 py-3.5 glass rounded-full text-white font-semibold transition-all hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="p-5 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-gray-500 text-xs">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold text-gradient-hero text-center mb-14">
            Why Wayfinder works here.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl border border-white/8 bg-white/[0.02] card-hover"
              >
                <div className="p-2.5 bg-white/5 rounded-xl w-fit mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-4xl font-bold text-gradient-hero text-center mb-10">
            Common use cases.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <Check size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{uc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/15 to-purple-900/10 text-center"
          >
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <footer>
              <p className="text-blue-400 font-semibold">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-white/8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gradient-hero mb-4">Ready to get started?</h2>
          <p className="text-gray-500 mb-8">Book a free consultation with our deployment engineers.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            Book a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
