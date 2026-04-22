"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Github, Twitter, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const team = [
  {
    name: "Ashwini Kumar Singh",
    role: "Founder & CEO",
    tag: "Visionary Leader",
    bio: "Ashwini is the driving force behind Into Pie. With a sharp entrepreneurial mind and a passion for solving real-world navigation problems, he founded Wayfinder with a mission to make every complex space as navigable as the open road. He leads strategy, fundraising, and partnerships — always pushing the envelope on what indoor navigation can become.",
    image: "/team_ashwini.png",
    skills: ["Strategy", "Fundraising", "Product Vision", "Partnerships"],
    gradient: "from-blue-600 to-indigo-700",
    border: "border-blue-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Vivek Bhatt",
    role: "Co-Founder & Business Head",
    tag: "Growth Architect",
    bio: "Vivek brings strategic clarity and an enterprise sales mindset to Into Pie. He spearheads business development, key accounts, and go-to-market strategies — transforming Wayfinder from a product into a scalable SaaS platform. His deep understanding of enterprise procurement cycles has helped secure deployments across healthcare and retail sectors.",
    image: "/team_vivek.png",
    skills: ["Business Dev", "Enterprise Sales", "GTM Strategy", "Key Accounts"],
    gradient: "from-purple-600 to-pink-600",
    border: "border-purple-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Akash Kumar",
    role: "CTO & Lead Architect",
    tag: "Tech Visionary",
    bio: "Akash is the technical backbone of Wayfinder. As CTO and Lead Architect, he has designed the entire indoor positioning engine — from Wi-Fi fingerprinting algorithms to real-time pathfinding and the scalable multi-tenant SaaS infrastructure. An IIT alumnus with deep expertise in distributed systems, computer vision, and embedded IoT, he ensures Wayfinder delivers 1-meter accuracy at enterprise scale.",
    image: "/team_akash.png",
    skills: ["System Architecture", "Indoor Positioning", "FastAPI", "React Native", "PostgreSQL", "MongoDB"],
    gradient: "from-cyan-600 to-blue-600",
    border: "border-cyan-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Shamim Ahmad",
    role: "Senior Software Engineer",
    tag: "Full-Stack Craftsman",
    bio: "Shamim is the engineer who makes ideas real. As Senior Software Engineer at Into Pie, he builds and maintains the Wayfinder frontend, admin dashboards, and backend APIs. From crafting pixel-perfect React components to optimising database queries, he is the engineer every startup dreams of — fast, meticulous, and relentlessly quality-driven.",
    image: "/team_shamim.png",
    skills: ["Next.js", "TypeScript", "Python", "REST APIs", "UI/UX", "DevOps"],
    gradient: "from-green-600 to-teal-600",
    border: "border-green-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function TeamContent() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small opacity-40" />
        <div className="orb orb-blue w-[600px] h-[400px] top-0 left-0 opacity-15" />
        <div className="orb orb-purple w-[500px] h-[400px] bottom-0 right-0 opacity-12" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium uppercase tracking-widest">
              <MapPin size={12} className="text-blue-400" /> Into Pie Pvt Ltd
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-hero mb-6 leading-tight">
              Meet the people <br />building tomorrow.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Four visionaries united by a single mission — to make every complex space as simple to navigate as the open road. The core pillars of Wayfinder.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            {["Founded 2022", "Bangalore, India", "Wayfinder Platform", "Into Pie Pvt Ltd"].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-10 pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className={`group relative p-0 rounded-3xl border ${member.border} bg-white/[0.02] overflow-hidden transition-all duration-500 ${member.glow}`}
                style={{ borderWidth: "1px", borderStyle: "solid" }}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${member.gradient}`} />
                <div className="p-7 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`relative w-28 h-28 rounded-2xl overflow-hidden border-2 ${member.border} shadow-xl`}>
                        <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                        <div className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t ${member.gradient} opacity-40`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block text-[10px] uppercase tracking-widest font-semibold mb-2 px-2.5 py-1 rounded-full bg-gradient-to-r ${member.gradient} bg-opacity-10 text-white/70`}>
                        {member.tag}
                      </span>
                      <h2 className="text-2xl font-bold text-white mb-0.5">{member.name}</h2>
                      <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>{member.role}</p>
                      <div className="flex gap-3 mb-4">
                        <a href={member.social.linkedin} className="text-gray-600 hover:text-white transition-colors"><Linkedin size={16} /></a>
                        <a href={member.social.twitter} className="text-gray-600 hover:text-white transition-colors"><Twitter size={16} /></a>
                        <a href={member.social.github} className="text-gray-600 hover:text-white transition-colors"><Github size={16} /></a>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-5">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/8 text-gray-400 group-hover:border-white/15 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Company CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-3xl mx-auto text-center p-10 rounded-3xl border border-white/8 bg-gradient-to-br from-blue-900/15 to-purple-900/10"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-3">Built by engineers. Driven by purpose.</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Into Pie Pvt Ltd is a Bangalore-based deep-tech startup redefining indoor spatial intelligence. Wayfinder is our flagship product — and this is just the beginning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                Partner With Us <ArrowRight size={16} />
              </Link>
              <Link href="/" className="inline-flex items-center gap-2 px-7 py-3.5 glass rounded-full text-white font-semibold transition-all hover:bg-white/10">
                See Our Product
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
