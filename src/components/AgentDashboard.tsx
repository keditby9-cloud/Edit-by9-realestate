import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Calendar, MessageSquare, Trash2, Home, ArrowRight, ShieldCheck } from 'lucide-react';
import { Property, TourBooking, InquireMessage } from '../types';
import SafeImage from './SafeImage';

interface AgentDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Property[];
  onRemoveFavorite: (prop: Property) => void;
  bookings: TourBooking[];
  onCancelBooking: (bookingId: string) => void;
  inquiries: InquireMessage[];
  onDeleteInquiry: (inquiryId: string) => void;
  onSelectProperty: (prop: Property) => void;
}

export default function AgentDashboard({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  bookings,
  onCancelBooking,
  inquiries,
  onDeleteInquiry,
  onSelectProperty,
}: AgentDashboardProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-md"
          />

          {/* Sliding premium drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-onyx-950 text-white z-50 border-l border-white/5 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 bg-onyx-900 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <ShieldCheck size={12} /> Secure Client Vault
                </span>
                <h3 className="text-xl font-serif mt-0.5">My Bespoke Selections</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors duration-200"
                id="close-vault"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable sections container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 select-none">
              
              {/* Section 1: Saved Favorites */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
                  <Heart size={14} className="fill-current text-[#D4AF37]" /> Bookmarked Properties ({favorites.length})
                </h4>

                {favorites.length === 0 ? (
                  <div className="border border-dashed border-white/10 p-6 text-center rounded-sm bg-onyx-900/40">
                    <p className="text-white/40 text-xs font-light leading-relaxed">
                      Your premium portfolio is empty. Click the heart icon on properties to save them for personal review.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {favorites.map((prop) => (
                      <motion.div
                        layout
                        key={prop.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 p-3 bg-onyx-900/60 border border-white/5 rounded-sm hover:border-[#D4AF37]/30 transition-all group duration-300"
                      >
                        <div className="w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => { onSelectProperty(prop); onClose(); }}>
                          <SafeImage src={prop.heroImage} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">{prop.location}</p>
                          <h5 className="font-serif text-sm text-white truncate hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => { onSelectProperty(prop); onClose(); }}>{prop.title}</h5>
                          <p className="text-[#D4AF37] text-xs font-semibold mt-0.5">{prop.formattedPrice}</p>
                        </div>
                        <button
                          onClick={() => onRemoveFavorite(prop)}
                          className="text-white/30 hover:text-red-400 p-2 self-center transition-colors"
                          title="Remove bookmark"
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Section 2: Booked viewings */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
                  <Calendar size={14} /> Private Access Bookings ({bookings.length})
                </h4>

                {bookings.length === 0 ? (
                  <div className="border border-dashed border-white/10 p-6 text-center rounded-sm bg-onyx-900/40">
                    <p className="text-white/40 text-xs font-light leading-relaxed">
                      No tours scheduled. Select 'View Details' on any listing and choose an exclusive show slot to register.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <motion.div
                        layout
                        key={booking.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-[#111] border border-white/10 rounded-sm relative"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="inline-block px-2 py-0.5 text-[8px] font-mono font-bold uppercase tracking-widest bg-yellow-400/15 text-yellow-300 border border-yellow-400/20 rounded-sm mb-1">
                              {booking.status}
                            </span>
                            <h5 className="font-serif text-sm tracking-wide">{booking.propertyName}</h5>
                          </div>
                          <button
                            onClick={() => onCancelBooking(booking.id)}
                            className="text-white/30 hover:text-red-400 p-1.5 transition-colors absolute top-4 right-4"
                            title="Cancel viewing"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-3 text-xs border-t border-white/5 pt-3">
                          <div>
                            <p className="text-white/30 text-[9px] uppercase tracking-wider font-mono">Scheduled Date</p>
                            <p className="font-medium text-white/95 mt-0.5">{booking.date}</p>
                          </div>
                          <div>
                            <p className="text-white/30 text-[9px] uppercase tracking-wider font-mono">Show Format</p>
                            <p className="font-medium text-[#D4AF37] mt-0.5">{booking.tourType} ({booking.timeSlot})</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Section 3: Concierge communications */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare size={14} /> Registered Inquiries ({inquiries.length})
                </h4>

                {inquiries.length === 0 ? (
                  <div className="border border-dashed border-white/10 p-6 text-center rounded-sm bg-onyx-900/40">
                    <p className="text-white/40 text-xs font-light leading-relaxed">
                      No submissions sent. Write to Alexander Sterling in the contact form to register direct requests.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map((inq) => (
                      <motion.div
                        layout
                        key={inq.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-onyx-900/60 border border-white/5 rounded-sm relative"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="block text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold mb-0.5">
                              {inq.serviceType}
                            </span>
                            <h5 className="font-serif text-sm">Interest: <span className="text-white/80 italic font-sans text-xs">{inq.propertyInterest}</span></h5>
                          </div>
                          <button
                            onClick={() => onDeleteInquiry(inq.id)}
                            className="text-white/30 hover:text-red-400 p-1.5 transition-colors absolute top-4 right-4"
                            title="Delete record"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <p className="text-xs text-white/60 italic line-clamp-2 mt-2 leading-relaxed bg-black/30 p-2 rounded-sm">
                          "{inq.message}"
                        </p>
                        <p className="text-[9px] text-white/30 font-mono mt-3 uppercase tracking-wider">
                          Received: {new Date(inq.createdAt).toLocaleDateString()} at {new Date(inq.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Footer information */}
            <div className="p-6 bg-[#000] border-t border-white/15 text-center">
              <p className="text-[10px] text-white/40 font-light max-w-sm mx-auto leading-relaxed">
                Vault selections are stored on your local device. Underwriter security parameters apply. For immediate VIP assistance, call +1 (800) LUX-HOME.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
