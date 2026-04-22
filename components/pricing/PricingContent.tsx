"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Building } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plans = [
  {
    name: "Starter",
    price: "₹49,999", period: "/month",
    desc: "Perfect for single-building pilots and small venues.",
    icon: <Zap size={20} className="text-blue-400" />,
    color: "border-white/10", highlight: false,
    features: ["1 building (up to 5 floors)", "Mobile wayfinding app", "500 navigations / day", "Basic analytics dashboard", "Email support", "2-week deployment"],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: "₹1,49,999", period: "/month",
    desc: "For growing institutions with multi-floor needs.",
    icon: <Building size={20} className="text-white" />,
    color: "border-blue-500/60", highlight: true, badge: "Most Popular",
    features: ["3 buildings (unlimited floors)", "Kiosk mode included", "Unlimited navigations", "Heatmap analytics", "Multi-floor pathfinding", "Priority support (24h SLA)", "API access", "Custom branding"],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom", period: "",
    desc: "For hospital networks, airport authorities, and large chains.",
    icon: <Shield size={20} className="text-purple-400" />,
    color: "border-purple-500/20", highlight: false,
    features: ["Unlimited buildings", "White-label platform", "On-premise deployment option", "Dedicated success manager", "99.9% SLA uptime guarantee", "HIPAA & SOC 2 compliance", "Custom integrations", "Staff training program"],
    cta: "Contact Sales",
  },
];

export default function PricingContent() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />
      <section className="pt-36 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small opacity-50" />
        <div className="orb orb-blue w-[500px] h-[500px] top-0 right-0 opacity-20" />
        <div className="orb orb-purple w-[400px] h-[400px] bottom-0 left-0 opacity-15" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium uppercase tracking-widest">Pricing</div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-hero mb-5">Simple, transparent <br />pricing.</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">No hidden fees. No beacon hardware costs. Just powerful indoor navigation from day one.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border card-hover ${plan.color} ${plan.highlight ? "bg-gradient-to-b from-blue-600/15 to-transparent glow-blue" : "bg-white/[0.02]"}`}
                style={{ borderWidth: "1px", borderStyle: "solid" }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white">{plan.badge}</div>
                )}
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">{plan.icon}</div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.highlight ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"}`}
                >
                  {plan.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center text-gray-600 text-sm mt-10">
            All plans include a 14-day free trial. No credit card required.
          </motion.p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
