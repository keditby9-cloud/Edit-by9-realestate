import React from 'react';
import { Landmark, Instagram, Linkedin, Facebook, Twitter, Shield } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 select-none py-16" id="footer-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <button 
              onClick={() => onScrollToSection('hero-section')}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#D4AF37] flex items-center justify-center text-black shadow-lg shadow-gold-500/10 shrink-0">
                <Landmark size={18} />
              </div>
              <div>
                <span className="block text-base font-serif font-bold tracking-[0.25em] text-white">
                  STERLING
                </span>
                <span className="block text-[8px] font-mono tracking-[0.4em] text-[#D4AF37] uppercase font-bold">
                  ESTATE GROUP
                </span>
              </div>
            </button>
            <p className="text-white/40 text-xs font-light leading-relaxed max-w-sm">
              Redefining luxury real estate brokering through extreme discretion, specialized local underwriting audits, and world-class asset representation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37] font-mono">Bespoke Options</h4>
            <div className="flex flex-col gap-2.5 text-xs text-white/50">
              <button onClick={() => onScrollToSection('listings-section')} className="hover:text-white hover:gold-glow self-start transition-all cursor-pointer">Featured Estates</button>
              <button onClick={() => onScrollToSection('why-section')} className="hover:text-white hover:gold-glow self-start transition-all cursor-pointer">Why Sterling</button>
              <button onClick={() => onScrollToSection('about-section')} className="hover:text-white hover:gold-glow self-start transition-all cursor-pointer">The Broker Specialist</button>
              <button onClick={() => onScrollToSection('testimonials-section')} className="hover:text-white hover:gold-glow self-start transition-all cursor-pointer">Client Reviews</button>
              <button onClick={() => onScrollToSection('contact-section')} className="hover:text-white hover:gold-glow self-start transition-all cursor-pointer">Exclusive Consultation</button>
            </div>
          </div>

          {/* Column 3: Regional Hubs */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37] font-mono">Metropolitan Hubs</h4>
            <div className="flex flex-col gap-2.5 text-xs text-white/50">
              <p className="hover:text-white transition-colors cursor-default">Beverly Hills HQ — Wilshire Blvd</p>
              <p className="hover:text-white transition-colors cursor-default">Malibu Bureau — Pacific Coast Hwy</p>
              <p className="hover:text-white transition-colors cursor-default">Manhattan Office — Fifth Ave</p>
              <p className="hover:text-white transition-colors cursor-default">Monaco Satellite — Port Hercule</p>
            </div>
          </div>

          {/* Column 4: Newsletter & Licensing */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4AF37] font-mono">Official Accreditation</h4>
            <p className="text-white/40 text-xs font-light leading-relaxed">
              Sterling Brokerage is fully licensed under California Department of Real Estate portfolio codes.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-white/30 pt-1.5 border-t border-white/5">
              <Shield size={12} className="text-[#D4AF37]/80 inline" />
              <span>DRE License #014028965</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright status */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10 text-[10px] text-white/30 select-none">
          <p>© 2026 Sterling Estate Group. All rights reserved globally.</p>

          <div className="flex gap-8 uppercase font-mono tracking-widest">
            <a href="#listings" className="hover:text-white transition-colors text-[9px]">Privacy Policy</a>
            <a href="#listings" className="hover:text-white transition-colors text-[9px]">Regulatory Disclosures</a>
            <a href="#listings" className="hover:text-white transition-colors text-[9px]">Sitemap</a>
          </div>

          {/* Socials stack */}
          <div className="flex items-center gap-4 text-white/50">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors"><Instagram size={14} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors"><Linkedin size={14} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors"><Facebook size={14} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors"><Twitter size={14} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
