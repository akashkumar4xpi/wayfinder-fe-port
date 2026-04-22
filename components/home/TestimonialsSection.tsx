"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Nair",
    role: "CTO, Apollo Hospitals",
    text: "Wayfinder reduced patient wait times by 40% at our Bangalore campus. Visitors now find departments in under 2 minutes, even in a 12-floor building.",
    stars: 5,
    avatar: "PN",
    color: "from-blue-500/20 to-transparent",
    border: "border-blue-500/20",
  },
  {
    name: "Rajesh Menon",
    role: "Operations Director, Lulu Mall Kochi",
    text: "Our retail tenants saw a 28% increase in footfall after deployment. The kiosk interface is beautiful and incredibly easy for customers to use.",
    stars: 5,
    avatar: "RM",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/20",
  },
  {
    name: "Sarah Chen",
    role: "Head of Digital, Changi Airport",
    text: "We evaluated 6 vendors. Wayfinder was the only one with sub-2-week deployment and true multi-terminal support. The accuracy is outstanding.",
    stars: 5,
    avatar: "SC",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/20",
  },
  {
    name: "Vikram Singh",
    role: "Campus Manager, IIT Delhi",
    text: "Students and visitors constantly compliment how easy it is to navigate our huge campus. Integration with our existing Wi-Fi was seamless.",
    stars: 5,
    avatar: "VS",
    color: "from-green-500/20 to-transparent",
    border: "border-green-500/20",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="orb orb-blue w-[600px] h-[400px] top-0 left-0 opacity-10" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium uppercase tracking-widest">
            Customer Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-hero mb-4">
            Loved by operators <br className="hidden md:block" />worldwide.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From 300-bed hospitals to international airports — see how teams use Wayfinder to guide millions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-7 rounded-2xl border bg-gradient-to-br ${t.color} ${t.border} card-hover relative overflow-hidden group`}
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            >
              {/* Quote icon */}
              <Quote size={36} className="absolute top-5 right-6 text-white/5 group-hover:text-white/10 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
