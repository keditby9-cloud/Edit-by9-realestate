import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Building, DollarSign, ArrowDownCircle, ShieldCheck } from 'lucide-react';
import SafeImage from './SafeImage';

interface HeroProps {
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onSearch, onScrollToSection }: HeroProps) {
  const [locationInput, setLocationInput] = useState("");
  const [typeInput, setTypeInput] = useState("All");
  const [budgetInput, setBudgetInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: locationInput,
      type: typeInput,
      budget: budgetInput,
    });
    // Scroll automatically to listings
    onScrollToSection('listings-section');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden z-20 select-none" id="hero-section">
      
      {/* Background artwork area */}
      <div className="absolute inset-0 z-0">
        <SafeImage 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury waterfront estate backdrop" 
          className="w-full h-full object-cover opacity-50 select-none scale-102"
        />
        {/* Shadow Overlay Vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/30 to-[#050505]" />
      </div>

      {/* Main typography stack */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 mt-12">
        
        {/* Luxury Banner Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] sm:text-[11px] font-bold mb-2">
            PREMIUM REAL ESTATE GROUP
          </span>
        </motion.div>
 
        {/* Multi tier headlines */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl sm:text-7xl md:text-8.5xl font-serif font-bold leading-[1.1] text-white"
          >
            Find Your <br />
            <span className="italic font-light text-white/90">Dream</span> Property
          </motion.h1>
 
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs sm:text-xs md:text-sm text-white/50 leading-relaxed max-w-md mx-auto uppercase tracking-[0.2em]"
          >
            Bespoke residential brokerage representing the world's most architectural and historically significant properties.
          </motion.p>
        </div>
 
        {/* Lead conversion buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => onScrollToSection('listings-section')}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer rounded-none"
          >
            Inquire Now
          </button>
          <button
            onClick={() => onScrollToSection('contact-section')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors cursor-pointer rounded-none"
          >
            Contact Agent
          </button>
        </motion.div>
 
        {/* Global Search Filtering Hub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-4xl mx-auto pt-6 text-left"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 flex flex-col md:flex-row gap-0.5 rounded-none shadow-2xl relative"
          >
            {/* Input 1: Location */}
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <label className="block text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold font-mono">Location</label>
              <input
                type="text"
                placeholder="Beverly Hills"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-white placeholder:text-white/30"
              />
            </div>
 
            {/* Input 2: Property Type */}
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <label className="block text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold font-mono font-sans">Type</label>
              <select
                value={typeInput}
                onChange={(e) => setTypeInput(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-white/80 cursor-pointer focus:bg-neutral-900"
              >
                <option value="All" className="bg-neutral-950 text-white">All Formats</option>
                <option value="Villa" className="bg-neutral-950 text-white">Modern Villa</option>
                <option value="Penthouse" className="bg-neutral-950 text-white">Sky Penthouse</option>
                <option value="Chateau" className="bg-neutral-950 text-white">Alpine Chateau</option>
                <option value="Coastal" className="bg-neutral-950 text-white">Coastal Retreat</option>
              </select>
            </div>
 
            {/* Input 3: Budget Range */}
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <label className="block text-[9px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold font-mono">Target Budget</label>
              <input
                type="text"
                placeholder="e.g. 20,000,000"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
                className="bg-transparent text-sm w-full outline-none text-white placeholder:text-white/30"
              />
            </div>
 
            {/* Submit Trigger */}
            <button
              type="submit"
              className="bg-[#D4AF37] text-black px-10 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer md:self-stretch"
            >
              Search
            </button>
          </form>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 mt-4 text-[10px] text-white/40 justify-center md:justify-start">
            <ShieldCheck size={12} className="text-[#D4AF37]" />
            <span>Fully insured listings with off-market private purchase options.</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors">
        <span className="text-[8px] uppercase tracking-[0.4em] font-mono leading-none">Descend</span>
        <button 
          onClick={() => onScrollToSection('listings-section')}
          className="animate-bounce"
        >
          <ArrowDownCircle size={22} className="stroke-1" />
        </button>
      </div>

    </section>
  );
}
