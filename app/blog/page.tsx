import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dummy Data (Replace with API call later)
const posts = [
  {
    slug: "future-of-indoor-navigation",
    title: "The Future of Indoor Navigation: 2025 Outlook",
    excerpt: "Why Bluetooth Low Energy (BLE) and Wi-Fi RTT are changing how we navigate malls.",
    date: "Dec 14, 2025",
    category: "Technology",
    image: "bg-blue-900" // Use real image URL in production
  },
  {
    slug: "hospital-wayfinding-guide",
    title: "Reducing Patient Anxiety with Digital Wayfinding",
    excerpt: "Case study: How City Hospital improved patient experience by 40% using Wayfinder.",
    date: "Dec 10, 2025",
    category: "Healthcare",
    image: "bg-green-900"
  },
  {
    slug: "mall-navigation-roi",
    title: "Calculating ROI for Mall Navigation Systems",
    excerpt: "How guiding customers to stores increases dwell time and revenue.",
    date: "Nov 28, 2025",
    category: "Business",
    image: "bg-purple-900"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Wayfinder <span className="text-gray-500">Insights</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Latest updates on indoor positioning technology, use cases, and company news.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all h-full flex flex-col">
                {/* Fake Image Placeholder */}
                <div className={`h-48 w-full ${post.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="text-blue-400 font-medium uppercase tracking-wider">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <span className="text-sm font-bold text-white group-hover:underline">Read Article →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}