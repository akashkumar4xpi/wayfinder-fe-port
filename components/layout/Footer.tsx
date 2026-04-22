import Link from "next/link";
import { Github, Twitter, Linkedin, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Healthcare", href: "/solutions/hospitals" },
    { label: "Retail & Malls", href: "/solutions/malls" },
    { label: "Airports", href: "/solutions/airports" },
    { label: "Corporate Offices", href: "/solutions/offices" },
    { label: "Universities", href: "/solutions/universities" },
  ],
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Developer API", href: "/features" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/8 pt-20 pb-10 text-sm relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-small opacity-30" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4 w-fit group">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <MapPin size={16} className="text-white fill-current" />
              </span>
              Wayfinder<span className="text-blue-400">.</span>
            </Link>
            <p className="text-gray-500 mb-6 max-w-xs leading-relaxed text-[13px]">
              The enterprise standard for indoor positioning and navigation. Built for scale, security, and 1-meter precision.
            </p>

            {/* Newsletter mini-form */}
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Get product updates"
                className="flex-1 px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button className="px-3 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                <ArrowRight size={14} className="text-white" />
              </button>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-[13px]">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-white transition-colors text-[13px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[12px]">
            © {new Date().getFullYear()} Wayfinder Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-[12px]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-[12px]">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-[12px]">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}