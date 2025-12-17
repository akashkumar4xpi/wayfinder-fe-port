import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/home/HeroSection'; // Reuse or create specific hero

// Data simulation (Isse baad me Database/CMS se replace kar sakte ho)
const industryData: Record<string, any> = {
  hospitals: {
    title: "Indoor Navigation for Hospitals",
    desc: "Reduce patient anxiety and missed appointments with step-by-step hospital wayfinding.",
    keywords: ["Hospital map", "Patient navigation", "Healthcare wayfinding"],
  },
  malls: {
    title: "Digital Wayfinding for Malls",
    desc: "Increase shopper dwell time and help them find stores instantly.",
    keywords: ["Mall kiosk", "Store locator", "Shopping mall map"],
  },
  offices: {
    title: "Smart Office Navigation",
    desc: "Help employees and visitors find meeting rooms and desks effortlessly.",
    keywords: ["Corporate wayfinding", "Meeting room finder", "Office map"],
  }
};

type Props = {
  params: { industry: string }
};

// 1. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = industryData[params.industry];
  if (!data) return { title: 'Solution Not Found' };

  return {
    title: `${data.title} | Wayfinder`,
    description: data.desc,
    keywords: data.keywords,
  };
}

// 2. The Page Content
export default function IndustryPage({ params }: Props) {
  const data = industryData[params.industry];

  if (!data) return notFound(); // 404 if industry doesn't exist

  return (
    <main className="bg-black min-h-screen text-white pt-24">
      {/* Dynamic Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          {data.title}
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          {data.desc}
        </p>
        <button className="px-8 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all">
          Get {params.industry} Strategy
        </button>
      </section>

      {/* Specific Content Section */}
      <section className="py-20 bg-neutral-900/30">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-8 text-center">Why Wayfinder for {params.industry}?</h2>
           {/* Add specific components for this industry here */}
           <div className="p-10 border border-white/10 rounded-2xl text-center">
              <p className="text-gray-400">Custom diagrams and features for {params.industry} appear here.</p>
           </div>
        </div>
      </section>
    </main>
  );
}

// 3. Static Generation for speed (Optional, but good for SEO)
export async function generateStaticParams() {
  return [
    { industry: 'hospitals' },
    { industry: 'malls' },
    { industry: 'offices' },
  ];
}