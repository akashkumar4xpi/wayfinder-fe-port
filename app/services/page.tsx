import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PenTool, Server, Palette, Headphones } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-wider uppercase">Professional Services</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Tailored to your needs.</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We help you digitize, deploy, and customize Wayfinder for your specific environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10">
            <PenTool className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Map Digitization</h3>
            <p className="text-gray-400 mb-6">
              Send us your architectural CAD or PDF floor plans. Our GIS team will convert them into interactive maps.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10">
            <Palette className="w-10 h-10 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">White-Label & Branding</h3>
            <p className="text-gray-400 mb-6">
              Make the app your own. We customize the UI to match your brand colors, fonts, and logo.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10">
            <Server className="w-10 h-10 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">On-Premise Deployment</h3>
            <p className="text-gray-400 mb-6">
              For high-security clients (Government, Defense), we can deploy Wayfinder on your local servers.
            </p>
          </div>

           <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10">
            <Headphones className="w-10 h-10 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
            <p className="text-gray-400 mb-6">
              Enterprise plans include a dedicated account manager and 24/7 engineering support.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}