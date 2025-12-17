import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    desc: "For small clinics and offices.",
    features: ["Up to 10,000 sq. ft.", "Mobile App SDK", "Email Support", "Basic Analytics"],
    cta: "Start Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large hospitals and malls.",
    features: ["Unlimited Area", "Kiosk Support", "Dedicated Account Manager", "Heatmap Analytics", "On-premise Deployment"],
    cta: "Contact Sales",
    popular: true,
  },
  {
    name: "Partner",
    price: "API",
    period: "/usage",
    desc: "For developers and integrators.",
    features: ["Full API Access", "White-labeling", "Hardware Integration", "24/7 Tech Support"],
    cta: "Get API Key",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16">
          No hidden hardware costs. Pay only for the software and mapping service.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`p-8 rounded-3xl border flex flex-col ${
                tier.popular 
                  ? "border-blue-500 bg-blue-900/10 relative" 
                  : "border-white/10 bg-neutral-900/50"
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-300">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-500">{tier.period}</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">{tier.desc}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-blue-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.popular 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-white text-black hover:bg-gray-200"
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}