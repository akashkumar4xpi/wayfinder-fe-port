import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";

// Example static params for now
export async function generateStaticParams() {
  return [
    { slug: 'future-of-indoor-navigation' },
    { slug: 'hospital-wayfinding-guide' }
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Normally fetch data here based on params.slug
  if (params.slug === "error") return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <article className="pt-32 pb-20 container mx-auto px-4 max-w-3xl">
        <header className="mb-10 text-center">
          <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Technology</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            The Future of Indoor Navigation: 2025 Outlook
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-400 text-sm">
            <span>By Aakash Kumar</span>
            <span>•</span>
            <span>Dec 14, 2025</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg mx-auto">
            {/* HTML Content simluated */}
            <p className="lead text-xl text-gray-300 mb-8">
                Indoor navigation is rapidly evolving. From hospitals to airports, the need for precise "blue dot" guidance is becoming a standard requirement rather than a luxury.
            </p>
            <h3>Why Wi-Fi RTT Matters</h3>
            <p>
                Unlike traditional GPS which fails indoors, Wi-Fi RTT (Round Trip Time) allows devices to calculate distance from access points with sub-meter accuracy...
            </p>
            <div className="my-8 p-6 bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
                <strong>Key Insight:</strong> Wayfinder utilizes a hybrid approach, combining magnetic fingerprinting with sensor fusion for maximum reliability.
            </div>
            <h3>Conclusion</h3>
            <p>
                As we move into 2026, building managers who ignore digital wayfinding will face operational inefficiencies.
            </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}