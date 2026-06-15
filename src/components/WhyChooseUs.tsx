import React from 'react';
import { motion } from 'motion/react';
import { Users, CheckCircle, BadgeDollarSign, HeartHandshake, ShieldCheck, Gem } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <Users className="stroke-1" size={32} />,
    title: "Trusted Elite Advisors",
    subtitle: "Highly Accredited Expertise",
    desc: "Our career broker team holds an average career tenure of 14+ years, delivering seasoned market assessments under total client privacy guarantees.",
  },
  {
    icon: <CheckCircle className="stroke-1" size={32} />,
    title: "Vetted Properties",
    subtitle: "50-Point Structural Verification",
    desc: "Every listing is subjected to rigorous legal, mechanical, and geologic check-ins prior to being curated into our public selection portfolio.",
  },
  {
    icon: <BadgeDollarSign className="stroke-1" size={32} />,
    title: "Optimized Valuations",
    subtitle: "Private Off-Market Safeguards",
    desc: "We utilize advanced localized valuation indexes to assert accurate price points, negotiating under direct, clean transaction timelines.",
  },
  {
    icon: <HeartHandshake className="stroke-1" size={32} />,
    title: "24/7 Connoisseur Care",
    subtitle: "Continuity Beyond Hand-Over",
    desc: "Whether executing private relocations, asset transitions, or high-security hand-overs, our active team stands online around the clock.",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative z-20 select-none" id="why-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[#D4AF37] text-[10px] font-mono tracking-[0.4em] font-extrabold uppercase block">
            Prestige Values
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-bold leading-none">
            An Uncompromising <span className="italic font-light text-white/70">Benchmark</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-xs leading-relaxed max-w-xl mx-auto uppercase tracking-[0.15em] font-light mt-3">
            In an industry measured by standard metrics, our group defines success through absolute fidelity, discretion, and perfection.
          </p>
        </div>

        {/* Dynamic Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ADVANTAGES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-6 md:p-8 bg-black/40 border border-white/5 hover:border-[#D4AF37]/35 rounded-sm flex flex-col justify-between h-72 transition-colors duration-300 group relative overflow-hidden"
            >
              {/* Highlight Background Flare */}
              <div className="absolute inset-0 bg-radial from-[#D4AF37]/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Gold Styled Icon Stage */}
                <div className="text-[#D4AF37] group-hover:scale-105 group-hover:text-white transition-all duration-300 w-12 h-12 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center">
                  {item.icon}
                </div>

                <div className="mt-6">
                  <span className="block text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="text-lg font-serif text-white tracking-wide">
                    {item.title}
                  </h4>
                </div>
              </div>

              <p className="text-white/40 text-xs font-light leading-relaxed mt-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Trust Badging block */}
        <div className="mt-16 text-center select-none">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-white/5 pt-12 w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="text-[#D4AF37]" size={16} />
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">FINRA & NAR Registered</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="flex items-center gap-2.5">
              <Gem className="text-[#D4AF37]" size={16} />
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">Forbes Luxury Alliance Partner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
