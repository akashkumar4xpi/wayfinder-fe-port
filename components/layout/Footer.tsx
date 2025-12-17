import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
              Wayfinder<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              The enterprise standard for indoor positioning and navigation. Built for scale, security, and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Solutions Column (SEO Keywords) */}
          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/hospitals" className="text-gray-400 hover:text-blue-500 transition-colors">Healthcare</Link></li>
              <li><Link href="/solutions/malls" className="text-gray-400 hover:text-blue-500 transition-colors">Retail & Malls</Link></li>
              <li><Link href="/solutions/airports" className="text-gray-400 hover:text-blue-500 transition-colors">Airports</Link></li>
              <li><Link href="/solutions/offices" className="text-gray-400 hover:text-blue-500 transition-colors">Corporate Offices</Link></li>
              <li><Link href="/solutions/universities" className="text-gray-400 hover:text-blue-500 transition-colors">Universities</Link></li>
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-gray-400 hover:text-blue-500 transition-colors">Features</Link></li>
              <li><Link href="/tech" className="text-gray-400 hover:text-blue-500 transition-colors">Technology</Link></li>
              <li><Link href="/sdk" className="text-gray-400 hover:text-blue-500 transition-colors">Developer SDK</Link></li>
              <li><Link href="/hardware" className="text-gray-400 hover:text-blue-500 transition-colors">Hardware Requirements</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">© 2025 Wayfinder Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}