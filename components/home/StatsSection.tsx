"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Buildings Mapped",
    sub: "Across 12 countries",
    color: "text-blue-400",
    bg: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
  },
  {
    value: 1,
    suffix: "M+",
    label: "Daily Navigations",
    sub: "Across all deployments",
    color: "text-cyan-400",
    bg: "from-cyan-500/10 to-transparent",
    border: "border-cyan-500/20",
  },
  {
    value: 99,
    suffix: ".2%",
    label: "Positioning Accuracy",
    sub: "1-meter indoor precision",
    color: "text-purple-400",
    bg: "from-purple-500/10 to-transparent",
    border: "border-purple-500/20",
  },
  {
    value: 2,
    suffix: " weeks",
    label: "Average Deployment",
    sub: "From survey to live",
    color: "text-green-400",
    bg: "from-green-500/10 to-transparent",
    border: "border-green-500/20",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#050508] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small opacity-60" />
      <div className="orb orb-purple w-[500px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-hero mb-4">
            Trusted at enterprise scale.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real numbers from real deployments across healthcare, retail, and transportation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-7 rounded-2xl border bg-gradient-to-br ${stat.bg} ${stat.border} card-hover`}
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            >
              <p className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 leading-none`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
