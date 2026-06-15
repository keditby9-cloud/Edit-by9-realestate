import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BedDouble, Bath, Maximize, Calendar, Clock, MapPin, Check, Heart, Shield, Video, User, Phone, Mail } from 'lucide-react';
import { Property, TourBooking } from '../types';
import SafeImage from './SafeImage';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (prop: Property) => void;
  onAddBooking: (booking: Omit<TourBooking, 'id' | 'createdAt' | 'status'>) => void;
}

const TIME_SLOTS = [
  "10:00 AM — Morning Exclusive",
  "01:00 PM — Midday Soiree Slot",
  "04:00 PM — Golden Hour Appraisal",
  "07:00 PM — Sunset Illumination"
];

export default function PropertyModal({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddBooking,
}: PropertyModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState(TIME_SLOTS[0]);
  const [tourType, setTourType] = useState<'In-person' | 'Virtual Video'>('In-person');
  
  // Contact details
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  if (!property) return null;

  const handleBookTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate) {
      setValidationError("Please select an appointment date.");
      return;
    }
    if (!clientName || !clientEmail || !clientPhone) {
      setValidationError("Please complete all personal VIP credentials.");
      return;
    }

    setValidationError("");
    
    // Dispatch
    onAddBooking({
      propertyId: property.id,
      propertyName: property.title,
      clientName,
      clientEmail,
      clientPhone,
      date: bookingDate,
      timeSlot: bookingTime,
      tourType
    });

    setBookingSuccess(true);
    
    // Clear inputs after 3 seconds success
    setTimeout(() => {
      setBookingDate("");
      setClientName("");
      setClientEmail("");
      setClientPhone("");
    }, 4000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      >
        {/* Modal Sheet Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className="bg-onyx-950 border border-white/10 w-full max-w-5xl rounded-sm shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
        >
          {/* Left Action: Media & Detail Display */}
          <div className="flex-1 overflow-y-auto max-h-[45vh] md:max-h-[90vh] border-r border-white/5 custom-scroll">
            
            {/* Image Stage */}
            <div className="relative aspect-[16/10] bg-black">
              <SafeImage
                src={property.gallery[activeImageIdx]}
                alt={`${property.title} - view ${activeImageIdx + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Buttons */}
              <button
                onClick={onClose}
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors shadow-lg"
                id="close-property-detail"
              >
                <X size={18} />
              </button>

              <button
                onClick={() => onToggleFavorite(property)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center transition-colors shadow-lg group"
                id="toggle-fav-inside"
              >
                <Heart
                  size={18}
                  className={`transition-colors duration-200 ${
                    isFavorite 
                      ? "text-red-500 fill-current" 
                      : "text-white group-hover:text-[#D4AF37]"
                  }`}
                />
              </button>

              {/* Dynamic Status Tag */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-sm">
                  {property.status}
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white border border-white/10 text-[9px] uppercase tracking-wider px-3 py-1 rounded-sm font-mono">
                  BUILT IN {property.yearBuilt}
                </span>
              </div>
            </div>

            {/* Thumbnail Selection Strip */}
            <div className="flex gap-2 p-4 bg-onyx-900 border-b border-white/5 overflow-x-auto justify-start">
              {property.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 flex-shrink-0 aspect-[16/10] bg-black rounded-sm overflow-hidden border transition-all ${
                    idx === activeImageIdx 
                      ? "border-[#D4AF37] opacity-100 scale-102 shadow-md" 
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <SafeImage src={imgUrl} alt="Interior look" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* General Property Text */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4AF37] font-semibold flex items-center gap-1">
                  <MapPin size={10} /> {property.location}
                </span>
                <h3 className="text-2xl md:text-4xl font-serif tracking-tight mt-1">{property.title}</h3>
                <p className="text-[#D4AF37] text-lg md:text-2xl font-semibold mt-1 font-sans">{property.formattedPrice}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
                <div className="text-center md:text-left">
                  <p className="text-white/35 text-[9px] uppercase tracking-widest font-mono">Bedrooms</p>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mt-1">
                    <BedDouble size={16} className="text-[#D4AF37]" />
                    <span className="text-sm font-medium">{property.beds} Double Suites</span>
                  </div>
                </div>
                <div className="text-center md:text-left border-x border-white/10 px-4">
                  <p className="text-white/35 text-[9px] uppercase tracking-widest font-mono">Bathrooms</p>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mt-1">
                    <Bath size={16} className="text-[#D4AF37]" />
                    <span className="text-sm font-medium">{property.baths} Bathrooms</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-white/35 text-[9px] uppercase tracking-widest font-mono">Total Area</p>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mt-1">
                    <Maximize size={16} className="text-[#D4AF37]" />
                    <span className="text-sm font-medium">{property.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-3">Architectural Narrative</h4>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Tailored Amenities */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4">Elite Amenities & Structural Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-onyx-900 border border-white/5 rounded-sm hover:border-[#D4AF37]/20 transition-all duration-300">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span className="text-xs text-white/80 font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Action: Showcase Scheduling Form */}
          <div className="w-full md:w-[380px] bg-onyx-900 overflow-y-auto p-6 md:p-8 flex flex-col justify-between shrink-0 select-none">
            
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-sm uppercase font-bold inline-block mb-2">
                  <Shield size={10} className="inline mr-1" /> Verified Listing Specialist
                </span>
                <h4 className="text-lg font-serif">Schedule Private Tour</h4>
                <p className="text-white/40 text-[11px] font-light leading-relaxed mt-1">
                  Secure an exclusive, highly discreet viewing slot overseen directly by Alexander Sterling.
                </p>
              </div>

              {bookingSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-[#1c1706] to-[#0d0a02] border border-[#D4AF37]/30 p-5 rounded-sm text-center my-6 space-y-4"
                >
                  <div className="w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check size={24} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-[#D4AF37] text-base">Booking Registered</h5>
                    <p className="text-white/65 text-xs font-light mt-1.5 leading-relaxed">
                      Thank you for using Sterling Services. Our lead strategist will ring you to finalize secure accreditation details.
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-3">
                    <p className="text-white/40 text-[9px] uppercase tracking-wider font-mono">Check status in 'Secure Client Vault' at the top menu.</p>
                  </div>
                  <button
                    onClick={() => setBookingSuccess(false)}
                    className="text-xs text-[#D4AF37]/80 hover:text-[#D4AF37] select-none hover:underline font-mono"
                  >
                    Schedule Another Date
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleBookTour} className="space-y-4">
                  {/* Tour Type Selector */}
                  <div>
                    <label className="text-white/35 text-[9px] uppercase tracking-[0.15em] font-mono block mb-1.5">Select Tour Format</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setTourType('In-person')}
                        className={`py-2.5 px-3 border text-xs tracking-wider uppercase font-semibold transition-all rounded-sm flex items-center justify-center gap-1.5 ${
                          tourType === 'In-person' 
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]" 
                            : "bg-black/30 border-white/10 hover:border-white/20 text-white"
                        }`}
                      >
                        <User size={13} /> Private Sight
                      </button>
                      <button
                        type="button"
                        onClick={() => setTourType('Virtual Video')}
                        className={`py-2.5 px-3 border text-xs tracking-wider uppercase font-semibold transition-all rounded-sm flex items-center justify-center gap-1.5 ${
                          tourType === 'Virtual Video' 
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]" 
                            : "bg-black/30 border-white/10 hover:border-white/20 text-white"
                        }`}
                      >
                        <Video size={13} /> Live Broadcast
                      </button>
                    </div>
                  </div>

                  {/* Scheduled Date */}
                  <div>
                    <label className="text-white/35 text-[9px] uppercase tracking-[0.15em] font-mono block mb-1.5 flex items-center gap-1">
                      <Calendar size={11} /> Appointment Date
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-black border border-white/10 focus:border-[#D4AF37] outline-none px-4 py-2.5 text-xs text-white uppercase rounded-sm"
                    />
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="text-white/35 text-[9px] uppercase tracking-[0.15em] font-mono block mb-1.5 flex items-center gap-1">
                      <Clock size={11} /> High-Accreditation Hour
                    </label>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setBookingTime(slot)}
                          className={`w-full py-2 px-3 border rounded-sm text-[10px] text-left transition-all ${
                            bookingTime === slot 
                              ? "bg-white/10 border-[#D4AF37] text-[#D4AF37]" 
                              : "bg-black/20 border-white/5 hover:border-white/15 text-white/60"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal info fields */}
                  <div className="border-t border-white/10 pt-4 mt-2 space-y-2.5">
                    <label className="text-white/35 text-[9px] uppercase tracking-[0.15em] font-mono block mb-0.5">Your VIP Credentials</label>
                    
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-white/30" size={13} />
                      <input
                        type="text"
                        required
                        placeholder="Full Legal Name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-black border border-white/10 focus:border-[#D4AF37] outline-none pl-9 pr-4 py-2 text-xs rounded-sm"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-white/30" size={13} />
                      <input
                        type="email"
                        required
                        placeholder="Secure Email Address"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-black border border-white/10 focus:border-[#D4AF37] outline-none pl-9 pr-4 py-2 text-xs rounded-sm"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-white/30" size={13} />
                      <input
                        type="tel"
                        required
                        placeholder="Confidential Mobile Line"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full bg-black border border-white/10 focus:border-[#D4AF37] outline-none pl-9 pr-4 py-2 text-xs rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Submission validation state */}
                  {validationError && (
                    <p className="text-red-400 text-[10px] bg-red-500/10 border border-red-500/20 p-2.5 text-center font-mono">
                      {validationError}
                    </p>
                  )}

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-white text-black font-semibold text-[10px] uppercase tracking-[0.25em] py-3.5 transition-colors shadow-lg mt-2 cursor-pointer"
                  >
                    Send Access Request
                  </button>
                </form>
              )}
            </div>

            <p className="text-[10px] text-white/30 font-light text-center leading-relaxed mt-6">
              Privacy and complete security guaranteed. Real estate transactions overseen under strict state codes and broker insurance portfolios.
            </p>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
