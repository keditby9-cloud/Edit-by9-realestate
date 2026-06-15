import React, { useState, useEffect } from 'react';
import { Heart, Calendar, ShieldAlert, FolderHeart, Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  favCount: number;
  bookingsCount: number;
  onOpenVault: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({
  favCount,
  bookingsCount,
  onOpenVault,
  onScrollToSection,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 select-none ${
          scrolled 
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Brandmark */}
          <button 
            onClick={() => onScrollToSection('hero-section')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="text-xl font-serif font-bold tracking-[0.2em] uppercase text-white">
              Sterling<span className="text-[#D4AF37]">Elite</span>
            </div>
          </button>

          {/* Desktop Navigation Map */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
            <button 
              onClick={() => onScrollToSection('listings-section')} 
              className="hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              Collection
            </button>
            <button 
              onClick={() => onScrollToSection('why-section')} 
              className="hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              Advisory
            </button>
            <button 
              onClick={() => onScrollToSection('about-section')} 
              className="hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              The Broker
            </button>
            <button 
              onClick={() => onScrollToSection('testimonials-section')} 
              className="hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              Valuation
            </button>
            <button 
              onClick={() => onScrollToSection('contact-section')} 
              className="hover:text-[#D4AF37] transition-all cursor-pointer"
            >
              Concierge
            </button>
          </div>

          {/* Action Center Trigger */}
          <div className="flex items-center gap-4">
            
            {/* Vault Folder trigger */}
            <button
              onClick={onOpenVault}
              className="relative px-5 py-2.5 bg-black/40 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all font-medium rounded-none flex items-center gap-2.5 group"
              id="open-vault-nav"
            >
              <FolderHeart size={13} className="group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline">My Vault</span>
              
              {/* Dynamic state badge */}
              {(favCount > 0 || bookingsCount > 0) && (
                <span className="flex h-3.5 w-3.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white text-black text-[8px] font-bold items-center justify-center font-mono">
                    {favCount + bookingsCount}
                  </span>
                </span>
              )}
            </button>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-sm hover:bg-white/5 border border-white/10 flex items-center justify-center transition-colors text-white"
              id="mobile-menu-trigger"
            >
              <Menu size={20} />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Backdrop Navigation Modal overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-8 select-none"
          >
            {/* Header section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#ebd89e] flex items-center justify-center text-black">
                  <Landmark size={16} />
                </div>
                <div>
                  <span className="block text-sm font-serif font-bold tracking-widest text-white">
                    STERLING
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links Stack */}
            <div className="flex flex-col gap-6 text-center">
              <span className="text-[9px] font-mono tracking-[0.3em] font-semibold text-[#D4AF37] uppercase">Explore Offerings</span>
              <button
                onClick={() => { setMobileMenuOpen(false); onScrollToSection('listings-section'); }}
                className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
              >
                Featured listings
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onScrollToSection('why-section'); }}
                className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
              >
                Bespoke Services
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onScrollToSection('about-section'); }}
                className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
              >
                The Specialist
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onScrollToSection('testimonials-section'); }}
                className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onScrollToSection('contact-section'); }}
                className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
              >
                Direct Inquiry
              </button>
            </div>

            {/* Micro details */}
            <div className="text-center space-y-4">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenVault(); }}
                className="inline-flex py-3 px-8 bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase rounded-sm gap-2"
              >
                Open Client Vault ({favCount + bookingsCount})
              </button>
              <p className="text-[10px] text-white/30 font-light font-mono uppercase tracking-[0.1em]">
                Alexander Sterling Portfolio © 2026
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
