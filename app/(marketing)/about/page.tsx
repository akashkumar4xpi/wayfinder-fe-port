import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <section className="pt-32 pb-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-8">We guide the world indoors.</h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Wayfinder started with a simple problem: Why does GPS stop working when we enter a building? Today, we are building the operating system for indoor spaces.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center my-20">
                    <div className="p-6 bg-neutral-900 rounded-2xl">
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">99%</h3>
                        <p className="text-gray-400">Navigation Accuracy</p>
                    </div>
                    <div className="p-6 bg-neutral-900 rounded-2xl">
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">2M+</h3>
                        <p className="text-gray-400">Sq. Ft. Mapped</p>
                    </div>
                    <div className="p-6 bg-neutral-900 rounded-2xl">
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">15+</h3>
                        <p className="text-gray-400">Enterprise Clients</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}