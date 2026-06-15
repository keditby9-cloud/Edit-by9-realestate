import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, BedDouble, Bath, Maximize, Heart, ArrowUpRight, Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { Property } from '../types';
import SafeImage from './SafeImage';

interface FeaturedPropertiesProps {
  properties: Property[];
  favorites: Property[];
  onToggleFavorite: (prop: Property) => void;
  onSelectProperty: (prop: Property) => void;
  searchFilter: { location: string; type: string; budget: string } | null;
  onResetSearch: () => void;
}

const CATEGORIES = ["All", "Villa", "Penthouse", "Chateau", "Coastal"];

export default function FeaturedProperties({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  searchFilter,
  onResetSearch,
}: FeaturedPropertiesProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'default'>('default');
  const [localSearchText, setLocalSearchText] = useState("");

  // Grid filtered result set
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // 1. Category tab filter
    if (selectedCategory !== "All") {
      result = result.filter(p => p.type === selectedCategory);
    }

    // 2. Global search inputs filter (if present)
    if (searchFilter) {
      if (searchFilter.location) {
        result = result.filter(p => p.location.toLowerCase().includes(searchFilter.location.toLowerCase()));
      }
      if (searchFilter.type && searchFilter.type !== "All") {
        result = result.filter(p => p.type === searchFilter.type);
      }
      if (searchFilter.budget) {
        const numBudget = parseFloat(searchFilter.budget.replace(/[^0-9.]/g, ''));
        if (!isNaN(numBudget)) {
          result = result.filter(p => p.price <= numBudget);
        }
      }
    }

    // 3. Optional inline text filter
    if (localSearchText) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(localSearchText.toLowerCase()) ||
        p.location.toLowerCase().includes(localSearchText.toLowerCase())
      );
    }

    // Sort order logic
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [properties, selectedCategory, searchFilter, localSearchText, sortBy]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (searchFilter?.location) count++;
    if (searchFilter?.type && searchFilter.type !== "All") count++;
    if (searchFilter?.budget) count++;
    if (localSearchText) count++;
    return count;
  }, [selectedCategory, searchFilter, localSearchText]);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto select-none" id="listings-section">
      
      {/* Narrative Section Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
        <div>
          <span className="text-[#D4AF37] text-[10px] font-mono tracking-[0.4em] font-extrabold uppercase block mb-3">
            Featured Assets & Portfolio
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-white font-bold leading-none">
            Featured <span className="italic font-light text-white/70">Assets</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-xs leading-relaxed max-w-xl mt-3 uppercase tracking-[0.15em] font-light">
            Bespoke residential brokerage representing the world's most architectural and historically significant properties.
          </p>
        </div>

        {/* Global Active Filters Summary */}
        {activeFiltersCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-4 py-2 rounded-sm text-xs self-start"
          >
            <span className="text-white/80 font-mono text-[10px] uppercase">
              {activeFiltersCount} Filter{activeFiltersCount > 1 ? 's' : ''} Active
            </span>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setLocalSearchText("");
                onResetSearch();
              }}
              className="text-[#D4AF37] hover:text-white font-bold flex items-center gap-1 transition-colors uppercase text-[9px] font-mono hover:scale-102"
            >
              <RefreshCw size={10} /> Reset All
            </button>
          </motion.div>
        )}
      </div>

      {/* Auxiliary Controller Line */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-onyx-950 border border-white/5 p-4 rounded-sm mb-10">
        
        {/* Category Filter Chips */}
        <div className="flex gap-1.5 overflow-x-auto justify-start py-0.5 custom-scroll scroll-smooth">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all rounded-sm shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/10"
                  : "bg-black/40 text-white/50 border border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat === "All" ? "All Estates" : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Search & Sort controllers */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* Quick Find Input */}
          <div className="relative flex items-center bg-black border border-white/15 focus-within:border-[#D4AF37] rounded-sm transition-colors text-white px-3 py-1.5">
            <Search size={12} className="text-white/30 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Filter by name..."
              value={localSearchText}
              onChange={(e) => setLocalSearchText(e.target.value)}
              className="bg-transparent border-none outline-none text-[10px] placeholder:text-white/20 uppercase tracking-wider text-white font-medium w-full sm:w-36 focus:w-44 transition-all"
            />
          </div>

          {/* Sorter Selector */}
          <div className="relative flex items-center bg-black border border-white/15 rounded-sm px-3 text-white/70 py-1.5 gap-2 select-none">
            <SlidersHorizontal size={12} className="text-[#D4AF37]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border-none outline-none text-[10px] uppercase font-bold tracking-widest cursor-pointer text-white"
            >
              <option value="default" className="bg-onyx-950 text-white">Featured Default</option>
              <option value="price-asc" className="bg-onyx-950 text-white">Price: Ascent</option>
              <option value="price-desc" className="bg-onyx-950 text-white">Price: Descent</option>
            </select>
          </div>
        </div>

      </div>

      {/* Grid Display Stage */}
      <AnimatePresence mode="popLayout">
        {filteredProperties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center border border-dashed border-white/10 py-16 px-6 bg-[#0a0a0a]/40 rounded-sm"
          >
            <div className="max-w-md mx-auto space-y-4">
              <span className="text-2xl block">🌐</span>
              <h4 className="font-serif text-lg">No Matching Selections Found</h4>
              <p className="text-white/40 text-xs font-light leading-relaxed">
                Our bespoke listing portfolio yielded zero items matching your specific keyword, structure, or budget filter conditions.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setLocalSearchText("");
                  onResetSearch();
                }}
                className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-[9px] uppercase font-bold tracking-widest cursor-pointer rounded-sm"
              >
                Clear Search Filter Settings
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {filteredProperties.map((prop, idx) => {
              const isFav = favorites.some(fav => fav.id === prop.id);
              return (
                <motion.div
                  key={prop.id}
                  layoutId={prop.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4) }}
                  className="bg-onyx-950 border border-white/5 hover:border-[#D4AF37]/25 rounded-sm overflow-hidden group hover:shadow-2xl hover:shadow-black transition-all duration-300 flex flex-col justify-between"
                >
                  
                  {/* Image Header Area */}
                  <div className="relative aspect-[4/3] bg-black overflow-hidden select-none">
                    <SafeImage
                      src={prop.heroImage}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform"
                    />

                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                    {/* Left overlay tags */}
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[8px] uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-sm">
                      {prop.type}
                    </span>

                    {/* Favorite Bookmark Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(prop);
                      }}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
                      title="Save selection"
                      id={`fav-${prop.id}`}
                    >
                      <Heart
                        size={15}
                        className={`transition-colors duration-200 ${
                          isFav ? "text-red-500 fill-current" : "text-white/60 hover:text-[#D4AF37]"
                        }`}
                      />
                    </button>

                    {/* Bottom overlay price tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-baseline">
                      <p className="text-[#D4AF37] text-xl font-semibold select-all font-sans tracking-tight">
                        {prop.formattedPrice}
                      </p>
                      <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest">{prop.status}</span>
                    </div>

                  </div>

                  {/* Body textual content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-white/35 text-[9px] uppercase tracking-wider font-mono">
                        <MapPin size={10} className="text-[#D4AF37]/80" /> {prop.location}
                      </div>
                      
                      <h3 className="font-serif text-lg text-white mt-1.5 tracking-wide line-clamp-1 group-hover:text-[#D4AF37] transition-colors duration-200">
                        {prop.title}
                      </h3>
                      
                      <p className="text-white/50 text-[11px] font-light leading-relaxed line-clamp-2 mt-2">
                        {prop.description}
                      </p>
                    </div>

                    {/* Specifications grid strip */}
                    <div className="border-t border-white/5 pt-4 mt-5 flex justify-between items-center">
                      <div className="flex gap-4 text-[9px] text-white/40 uppercase tracking-widest font-mono">
                        <span className="flex items-center gap-1.5">
                          <BedDouble size={11} className="text-[#D4AF37]/80" /> {prop.beds} Beds
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Bath size={11} className="text-[#D4AF37]/80" /> {prop.baths} Baths
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Maximize size={11} className="text-[#D4AF37]/80" /> {prop.sqft.toLocaleString()} Sq Ft
                        </span>
                      </div>

                      {/* Detail triggers */}
                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="w-8 h-8 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] bg-black/40 flex items-center justify-center transition-colors shadow-sm cursor-pointer group-hover:scale-102"
                        title="View Full Details"
                        id={`details-${prop.id}`}
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </div>

                  </div>

                  {/* Absolute bottom visual gold highlights line */}
                  <div className="h-0.5 bg-transparent group-hover:gold-border-gradient transition-all duration-300" />

                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
