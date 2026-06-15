import React, { useState } from 'react';
import { motion } from 'motion/react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";

export default function SafeImage({ 
  src, 
  alt, 
  className = "w-full h-full object-cover", 
  fallbackSrc = FALLBACK_IMAGE 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-onyx-950 ${className}`}>
      {/* Premium Shimmer Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-900 via-onyx-800 to-onyx-900 animate-pulse flex items-center justify-center">
          <span className="text-[10px] tracking-widest text-[#D4AF37]/30 uppercase font-mono">Loading Artwork</span>
        </div>
      )}
      
      <motion.img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${className} transition-transform duration-700`}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
      />
    </div>
  );
}
