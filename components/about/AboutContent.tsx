"use client";
import { motion } from "framer-motion";
import { Target, Users, Zap, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: <Target size={22} className="text-blue-400" />, title: "Precision-first", desc: "We obsess over accuracy. 1-meter indoor positioning isn't a marketing claim — it's our engineering baseline." },
  { icon: <Users size={22} className="text-purple-400" />, title: "Human-centric", desc: "Navigation should feel natural. We design for the visitor who has never seen your building before." },
  { icon: <Zap size={22} className="text-yellow-400" />, title: "Deployment speed", desc: "Enterprise systems shouldn't take months. We go from building survey to live navigation in 2 weeks." },
  { icon: <Globe size={22} className="text-green-400" />, title: "Scale without limits", desc: "One building or one hundred — our platform handles it without re-architecting your setup." },
];

const team = [
  { name: "Ashwini Kumar Singh", role: "CEO & Co-Founder", avatar: "AK", bg: "from-blue-500 to-indigo-600" },
  { name: "Vivek Bhatt", role: "Co-Founder & Business Head", avatar: "VB", bg: "from-purple-500 to-pink-600" },
  { name: "Akash Kumar", role: "CTO & Senior Software Engineer", avatar: "AK", bg: "from-cyan-500 to-blue-600" },
  { name: "Shamim Ahmad", role: "Senior Software Engineer", avatar: "SA", bg: "from-green-500 to-teal-600" },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small opacity-40" />
        <div className="orb orb-blue w-[500px] h-[500px] top-0 left-0 opacity-15" />
        <div className="orb orb-purple w-[400px] h-[400px] bottom-0 right-0 opacity-15" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium uppercase tracking-widest">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-hero mb-6">
              We believe getting lost should be a thing of the past.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Wayfinder was founded in 2022 after our team spent 45 minutes lost in a major hospital trying to find an ICU ward.
              That moment of frustration became our mission: make every complex space as navigable as Google Maps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold text-center text-gradient-hero mb-14">
            What drives us.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-white/8 bg-white/[0.02] card-hover"
              >
                <div className="p-2.5 bg-white/5 rounded-xl w-fit mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold text-center text-gradient-hero mb-4">
            The team.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-500 text-center mb-14">
            Ex-Google, IIT, and ISRO engineers obsessed with indoor positioning.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/8 bg-white/[0.02] card-hover"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.bg} flex items-center justify-center text-lg font-bold text-white mx-auto mb-4`}>
                  {member.avatar}
                </div>
                <p className="text-white font-semibold text-sm">{member.name}</p>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gradient-hero mb-4">Ready to work with us?</h2>
          <p className="text-gray-500 mb-8">Let&apos;s map your building together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            Book a Demo <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
