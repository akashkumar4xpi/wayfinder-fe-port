import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import MapDemoSection from "@/components/home/MapDemoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureGrid />
      <MapDemoSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}