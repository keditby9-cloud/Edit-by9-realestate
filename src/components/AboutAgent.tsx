import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Facebook, Award, Briefcase, Sparkles, Send } from 'lucide-react';
import { AGENT_PROFILE } from '../data';
import SafeImage from './SafeImage';

interface AboutAgentProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function AboutAgent({ onScrollToSection }: AboutAgentProps) {
  const profile = AGENT_PROFILE;

  return (
    <section className="py-24 bg-[#050505] relative z-20 select-none overflow-hidden" id="about-section">
      
      {/* Absolute decorative glow backdrop */}
      <div className="absolute right-0 top-1/4 w-[30svw] h-[30svw] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait representation */}
          <div className="lg:col-span-5 relative group">
            {/* Elegant outer metallic framing borders */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-[#D4AF37] pointer-events-none hidden md:block group-hover:scale-102 transition-transform duration-500" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-[#D4AF37] pointer-events-none hidden md:block group-hover:scale-102 transition-transform duration-500" />
            
            {/* The primary portrait */}
            <div className="relative aspect-[3/4] bg-black overflow-hidden shadow-2xl border border-white/10 rounded-sm">
              <SafeImage
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 duration-slow shadow-indigo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Overlaid quick badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-onyx-950/90 backdrop-blur-md p-4 border border-white/5 rounded-sm flex justify-between items-center">
                <div>
                  <p className="text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">Career Volume</p>
                  <p className="text-xl font-serif text-white mt-0.5">$2.4+ Billion</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D4AF37] bg-[#D4AF37]/5">
                  <Award size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[#D4AF37] text-[10px] font-mono tracking-[0.3em] font-extrabold uppercase block">
                Elite Representation
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal leading-tight">
                Alexander <span className="italic font-light">Sterling</span>
              </h2>
              <p className="text-white/40 text-[11px] font-mono uppercase tracking-widest mt-1">
                Principal Advisory Partner — {profile.experience} Experience
              </p>
            </div>

            <p className="text-white/70 text-sm font-light leading-relaxed">
              {profile.bio}
            </p>

            {/* Custom accomplishments lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-white/5 py-8 my-2">
              <div>
                <span className="text-white/30 text-[9px] uppercase tracking-wider font-mono block mb-3">Distinguished Achievements</span>
                <ul className="space-y-2 text-xs">
                  {profile.achievements.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-white/30 text-[9px] uppercase tracking-wider font-mono block mb-3">Area Specialties</span>
                <ul className="space-y-2 text-xs">
                  {profile.specialties.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <Sparkles className="text-[#D4AF37]/70 font-mono" size={11} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Signature and actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-4">
              {/* Hand signature rendering mock */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div>
                  <span className="text-white/25 text-[9px] uppercase font-mono tracking-widest block mb-1">Official Authenticity</span>
                  <span className="italic font-serif text-[#D4AF37] text-2xl tracking-widest select-none block">
                    {profile.signature}
                  </span>
                </div>
                <div className="flex gap-2 mt-1 sm:mt-4">
                  <span className="text-[8px] font-mono border border-white/5 bg-white/5 text-white/40 px-2 py-0.5 uppercase tracking-widest">LUXURY COUNCIL</span>
                  <span className="text-[8px] font-mono border border-white/5 bg-white/5 text-white/40 px-2 py-0.5 uppercase tracking-widest">PLATINUM CLUB</span>
                </div>
              </div>

              {/* Engagement trigger */}
              <div className="flex items-center gap-6">
                {/* Social circles */}
                <div className="flex items-center gap-4">
                  <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#D4AF37] transition-colors" title="Follow Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#D4AF37] transition-colors" title="Connect LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#D4AF37] transition-colors" title="Join Facebook">
                    <Facebook size={18} />
                  </a>
                </div>

                <div className="h-6 w-px bg-white/10 hidden sm:block" />

                <button
                  onClick={() => onScrollToSection('contact-section')}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-[10px] uppercase font-mono font-bold tracking-widest rounded-sm transition-all flex items-center gap-2 cursor-pointer text-center"
                >
                  <Send size={11} /> Secure Consultation
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
