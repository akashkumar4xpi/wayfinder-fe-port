import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wifi, Compass, Cpu } from "lucide-react";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 text-center container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Under the Hood</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Wayfinder uses a hybrid "Sensor Fusion" algorithm to achieve accurate indoor positioning.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="mt-2"><Wifi className="text-blue-500 w-8 h-8" /></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Wi-Fi Fingerprinting</h3>
                <p className="text-gray-400">
                  We map the signal strength (RSSI) of existing Wi-Fi routers. Every point has a unique signature.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="mt-2"><Compass className="text-red-500 w-8 h-8" /></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">2. Geomagnetic Positioning</h3>
                <p className="text-gray-400">
                  Steel structures create unique magnetic field distortions. We use these for orientation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="mt-2"><Cpu className="text-yellow-500 w-8 h-8" /></div>
              <div>
                <h3 className="text-2xl font-bold mb-2">3. Pedestrian Dead Reckoning</h3>
                <p className="text-gray-400">
                  Using the phone's accelerometer and gyroscope to calculate steps and direction changes.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] bg-neutral-900 rounded-3xl border border-white/10 flex items-center justify-center">
             <h3 className="text-2xl text-gray-500 font-bold">Algorithm Visualization</h3>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}