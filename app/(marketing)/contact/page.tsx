"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import { sendLead } from "@/lib/api"; // Import created above
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "", type: "General" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await sendLead(form);
            setStatus("success");
            setForm({ name: "", email: "", message: "", type: "General" });
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left: Contact Info */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <h1 className="text-5xl font-bold mb-6">Let's map your space.</h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Ready to deploy Wayfinder? Our team of engineers will help you digitize your building in less than 2 weeks.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full"><Mail className="text-blue-500" /></div>
                                <div><p className="text-xs text-gray-500">Email us</p><p className="font-medium">sales@wayfinder.com</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full"><Phone className="text-blue-500" /></div>
                                <div><p className="text-xs text-gray-500">Call us</p><p className="font-medium">+91 98765 43210</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full"><MapPin className="text-blue-500" /></div>
                                <div><p className="text-xs text-gray-500">HQ</p><p className="font-medium">Bangalore, India</p></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                        className="bg-neutral-900/50 p-8 rounded-3xl border border-white/10"
                    >
                        {status === "success" ? (
                            <div className="text-center py-20">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-gray-400">Our team will contact you within 24 hours.</p>
                                <button onClick={() => setStatus("idle")} className="mt-6 text-blue-500 underline">Send another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                    <input
                                        required type="text"
                                        className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                                    <input
                                        required type="email"
                                        className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="john@company.com"
                                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Inquiry Type</label>
                                    <select
                                        className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                        value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Book a Demo</option>
                                        <option>Technical Support</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        required rows={4}
                                        className="w-full bg-black border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="Tell us about your building..."
                                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold transition-all flex justify-center items-center gap-2 disabled:opacity-50"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                    {!status && <Send size={18} />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}