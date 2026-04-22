"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions/malls" },
  { name: "Pricing", href: "/pricing" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark border-b border-white/8 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <MapPin size={16} className="text-white fill-current" />
            </span>
            Wayfinder<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Log in
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
            >
              Book Demo <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 glass-dark pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-white/8 text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                    <ChevronRight size={18} className="text-gray-600" />
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-4 bg-blue-600 rounded-2xl text-center text-white font-bold text-lg hover:bg-blue-500 transition-colors"
                >
                  Book a Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}