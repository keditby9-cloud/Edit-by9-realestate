import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Trophy, TrendingUp, Handshake } from 'lucide-react';

interface StatCounterProps {
  label: string;
  target: number;
  suffix: string;
  prefix?: string;
  icon: React.ReactNode;
  delayMs?: number;
}

function StatCounter({ label, target, suffix, prefix = "", icon, delayMs = 100 }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    const duration = 1500; // ms
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setTimeout(() => {
      const counterInterval = setInterval(() => {
        if (!active) return;
        frame++;
        const progress = frame / totalFrames;
        // Ease out quadratic
        const currentCount = Math.round(target * (progress * (2 - progress)));
        
        if (frame >= totalFrames) {
          setCount(target);
          clearInterval(counterInterval);
        } else {
          setCount(currentCount);
        }
      }, frameRate);

      return () => {
        clearInterval(counterInterval);
      };
    }, delayMs);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [target, delayMs]);

  return (
    <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-sm flex flex-col justify-between items-center text-center relative select-none h-60 max-w-sm">
      {/* Icon Stage */}
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] bg-white/5 bg-opacity-40">
        {icon}
      </div>

      <div className="space-y-1">
        {/* Large Number Ticker */}
        <p className="text-4xl md:text-5xl font-serif text-white block tracking-tight font-extrabold font-sans">
          {prefix}{count.toLocaleString()}{suffix}
        </p>

        {/* Counter label */}
        <span className="block text-[8px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold pt-1">
          {label}
        </span>
      </div>

      {/* Trust check summary */}
      <p className="text-[10px] text-white/40 leading-relaxed max-w-xs font-light">
        Aesthetic record subject to public SEC reviews and certification parameters.
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#050505] relative z-20 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section title card */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#D4AF37] text-[10px] font-mono tracking-[0.4em] font-extrabold uppercase block">
            Discretion Ledger
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-bold leading-none">
            Historical <span className="italic font-light text-white/70">Achievements</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-xs leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] font-light mt-3">
            Our historical achievements compile decadal transactional metrics demonstrating market leadership, continuous investor confidence, and global brokering volume.
          </p>
        </div>

        {/* Counters stage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center items-center">
          
          <StatCounter
            label="Properties Solved & Closed"
            target={850}
            suffix="+"
            icon={<Trophy size={20} />}
            delayMs={100}
          />

          <StatCounter
            label="Curated Happy Clients"
            target={1200}
            suffix="+"
            icon={<Handshake size={20} />}
            delayMs={250}
          />

          <StatCounter
            label="Decades of Client Representation"
            target={18}
            suffix="+"
            icon={<TrendingUp size={20} />}
            delayMs={400}
          />

          <StatCounter
            label="Secured Transaction ledger"
            target={2}
            prefix="$"
            suffix=".4B+"
            icon={<ShieldAlert size={20} />}
            delayMs={550}
          />

        </div>

      </div>
    </section>
  );
}
