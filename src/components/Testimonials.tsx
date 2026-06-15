import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import SafeImage from './SafeImage';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const total = TESTIMONIALS.length;

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  };

  const active = TESTIMONIALS[activeIdx];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-b border-white/5 relative z-20 select-none overflow-hidden" id="testimonials-section">
      
      {/* Absolute decorative gradient highlights */}
      <div className="absolute left-0 bottom-1/4 w-[25svw] h-[25svw] bg-[#D4AF37]/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative">
        
        {/* Title Group */}
        <div className="space-y-3">
          <span className="text-[#D4AF37] text-[10px] font-mono tracking-[0.4em] font-extrabold uppercase block">
            Endorsement Logs
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-bold leading-none">
            Client <span className="italic font-light text-white/70">Reviews</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-xs leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] font-light mt-3">
            Review first-hand summaries compiled directly from prominent global financiers, art trustees, and premium property investors.
          </p>
        </div>

        {/* Dynamic Card Container with Slide Transitions */}
        <div className="relative min-h-[360px] md:min-h-[280px] flex items-center justify-center max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#050505]/60 block glass-panel p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl relative w-full text-left"
            >
              {/* Premiumquote symbol outline decoration */}
              <Quote size={80} className="text-white/5 absolute -top-4 -left-2 stroke-[0.5] select-none pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                
                {/* Client Portrait */}
                <div className="w-18 h-18 rounded-full overflow-hidden border border-[#D4AF37] p-1 flex-shrink-0 bg-black">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <SafeImage src={active.image} alt={active.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Testimonial info stack */}
                <div className="flex-1 space-y-4">
                  {/* Rating Stars row */}
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#D4AF37] fill-current" />
                    ))}
                  </div>

                  {/* Primary content verbal description */}
                  <p className="text-white/80 text-sm md:text-base font-light leading-relaxed italic">
                    "{active.content}"
                  </p>

                  {/* Verification label */}
                  <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
                    <div>
                      <h4 className="font-serif text-white font-medium text-sm md:text-base">{active.name}</h4>
                      <p className="text-white/40 text-[10px] uppercase font-mono tracking-wider mt-0.5">{active.role} {active.company ? `— ${active.company}` : ''}</p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 self-start bg-[#D4AF37]/5 border border-[#D4AF37]/15 px-3 py-1 rounded-sm text-[9px] font-mono font-bold text-[#D4AF37] uppercase">
                      <CheckCircle2 size={11} className="stroke-[2.5]" /> Verified Buyer: {active.propertyPurchased}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Slider Action Navigation controls */}
        <div className="flex items-center justify-center gap-4 select-none">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors bg-black/40 shadow-sm cursor-pointer"
            title="Prior testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Bullet Indicators row */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? "bg-[#D4AF37] scale-125" : "bg-white/20 hover:bg-white/40"
                }`}
                title={`To slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors bg-black/40 shadow-sm cursor-pointer"
            title="Subsequent testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
