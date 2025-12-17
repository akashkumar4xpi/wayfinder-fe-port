import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import MapDemoSection from "@/components/home/MapDemoSection"; // NEW
import Footer from "@/components/layout/Footer"; // NEW

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <MapDemoSection /> {/* Ye add kiya */}
      <Footer /> {/* Ye add kiya */}
    </main>
  );
}