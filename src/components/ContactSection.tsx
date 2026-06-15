import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Landmark, Send, Trash2, CheckCircle, ShieldCheck } from 'lucide-react';
import { InquireMessage } from '../types';

interface ContactSectionProps {
  onAddInquiry: (inq: Omit<InquireMessage, 'id' | 'createdAt'>) => void;
  inquiries: InquireMessage[];
  onDeleteInquiry: (id: string) => void;
}

export default function ContactSection({
  onAddInquiry,
  inquiries,
  onDeleteInquiry,
}: ContactSectionProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState<any>("Portfolio Consultation");
  const [propertyInterest, setPropertyInterest] = useState("General portfolio inquiry");
  const [messageText, setMessageText] = useState("");

  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !messageText) {
      setFormError("All core legal fields are required to secure accreditation.");
      return;
    }

    setFormError("");

    onAddInquiry({
      firstName,
      lastName,
      email,
      phone,
      propertyInterest,
      serviceType,
      message: messageText
    });

    setFormSuccess(true);
    
    // Clear form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessageText("");
    setPropertyInterest("General portfolio inquiry");

    setTimeout(() => {
      setFormSuccess(false);
    }, 4500);
  };

  return (
    <section className="py-24 bg-white text-[#0a0a0a]" id="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-[#D4AF37] text-[10px] font-mono tracking-[0.4em] font-extrabold uppercase block mb-1">
                Confidential Channels
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#0A0A0A] font-bold leading-none">
                Ready to move <span className="italic font-light">into perfection?</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-xs leading-relaxed max-w-sm uppercase tracking-[0.15em] font-light mt-3">
                Reach out to our private concierge desk to arrange personalized asset consultations, appraisal checklists, or off-market site allocations.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-6">
              
              {/* Phone connection */}
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 rounded-full bg-black text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 duration-300 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Confidential Core Line</p>
                  <a href="tel:18005894663" className="block text-base font-bold text-black hover:text-[#D4AF37] transition-colors mt-0.5">
                    +1 (800) LUX-HOME
                  </a>
                </div>
              </div>

              {/* Email channel */}
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 rounded-full bg-black text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 duration-300 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Bespoke Concierge Mail</p>
                  <a href="mailto:concierge@estateelite.com" className="block text-base font-bold text-black hover:text-[#D4AF37] transition-colors mt-0.5">
                    concierge@estateelite.com
                  </a>
                </div>
              </div>

              {/* Office address */}
              <div className="flex gap-4 items-center group">
                <div className="w-12 h-12 rounded-full bg-black text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 duration-300 transition-transform">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Principal HQ Office Address</p>
                  <p className="text-sm font-bold text-black leading-relaxed mt-0.5">
                    9560 Wilshire Blvd, Beverly Hills, CA 90212
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map Element with Elegant Border */}
            <div className="border border-gray-200 p-2 bg-gray-50 rounded-sm shadow-sm">
              <p className="text-[9px] font-mono uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1.5 px-1 py-0.5">
                <Landmark size={12} className="text-[#D4AF37]" /> Wilshire HQ Location Coordinates
              </p>
              
              <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden rounded-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!1s0x80c2bc0f12c146d9%3A0x7d65389da4bd9bc7!2s9560+Wilshire+Blvd%2C+Beverly+Hills%2C+CA+90212!5e0!3m2!1sen!2sus!4v1550000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Aura Luxury Real Estate HQ in Beverly Hills"
                  className="grayscale opacity-90 contrast-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Intake Form & Sent Messages list */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="bg-gray-50 border border-gray-150 p-8 md:p-10 rounded-sm shadow-xl space-y-6">
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-serif text-black">Private Inquiry Registration</h3>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Enter your verification data. Submissions are securely routed and logged under strict client privacy parameters.
                </p>
              </div>

              {formSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#1c1706] border border-[#D4AF37]/35 text-white p-6 rounded-sm text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-[#D4AF37] text-base">Inquiry Registered Safely</h5>
                    <p className="text-white/70 text-xs font-light mt-1.5 leading-relaxed">
                      Your confidential portfolio transmission completed successfully. Alexander Sterling or an appointed underwriting manager will follow up directly.
                    </p>
                  </div>
                  <p className="text-white/40 text-[9px] uppercase tracking-wider font-mono">Submission saved locally in 'My Selections Folder' at the top screen menu.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 select-none">
                  
                  {/* Name field double grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">First Legal Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none px-4 py-2.5 text-xs text-black rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">Last Legal Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none px-4 py-2.5 text-xs text-black rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Contact channels double grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">Secure Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none px-4 py-2.5 text-xs text-black rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">Mobile Access Line</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none px-4 py-2.5 text-xs text-black rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Portfolio request category selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">Desired Service Tier</label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value as any)}
                        className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none px-3 py-2.5 text-xs text-black/80 rounded-sm cursor-pointer"
                      >
                        <option value="Portfolio Consultation">Portfolio Consultation</option>
                        <option value="Listing Appraisal">Listing Appraisal</option>
                        <option value="Private Tour">Private Property Tour</option>
                        <option value="General Inquiry">General Information Request</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">Estate of Specific Interest</label>
                      <input
                        type="text"
                        placeholder="e.g. General portfolio index, The Eclipse Pavilion"
                        value={propertyInterest}
                        onChange={(e) => setPropertyInterest(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none px-4 py-2.5 text-xs text-black rounded-sm"
                      />
                    </div>
                  </div>

                  {/* Large Message Body */}
                  <div>
                    <label className="text-gray-400 text-[8px] uppercase tracking-[0.15em] font-mono block mb-1">Confidential Requirements & Notes</label>
                    <textarea
                      required
                      placeholder="Detail specific location, structural requirements, built year limitations, or security parameters..."
                      rows={4}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full bg-white border border-gray-200 focus:border-[#D4AF37] outline-none p-4 text-xs text-black resize-none rounded-sm"
                    />
                  </div>

                  {/* Form error logging */}
                  {formError && (
                    <p className="text-red-500 text-[10px] bg-red-100 border border-red-200 p-2.5 text-center font-mono">
                      {formError}
                    </p>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-[#0a0a0a50] hover:bg-black text-black hover:text-white border border-black/10 py-4 text-[10px] uppercase font-bold tracking-[0.25em] rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send size={12} className="stroke-[2.5]" /> Launch Transmission Securely
                  </button>

                </form>
              )}

              {/* Disclaimer */}
              <div className="flex gap-2 items-center text-[10px] text-gray-400 justify-center">
                <ShieldCheck size={13} className="text-[#D4AF37]" />
                <span>Encrypted private client channel. Real estate brokerage standards apply.</span>
              </div>

            </div>

            {/* Dynamic sent inquiry records ticker inside Contact Section */}
            {inquiries.length > 0 && (
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">Active Submitted Inquiries ({inquiries.length})</span>
                  <span className="text-[9px] text-gray-400">Stored on device</span>
                </div>

                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 bg-gray-50 border border-gray-150 rounded-sm flex justify-between items-start group hover:border-[#D4AF37]/35 transition-colors duration-200"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-black font-mono uppercase">{inq.serviceType}</span>
                          <span className="text-[9px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">Confirmed Sent</span>
                        </div>
                        <p className="text-[11px] text-gray-500 leading-normal font-light">
                          Interest: <span className="text-black font-semibold uppercase text-[10px]">{inq.propertyInterest}</span>
                        </p>
                        <p className="text-xs text-black/80 font-serif italic mt-1 bg-white p-2.5 border border-gray-100 rounded-sm">
                          "{inq.message}"
                        </p>
                        <span className="block text-[8px] font-mono text-gray-400 mt-2 uppercase">
                          Sent: {new Date(inq.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <button
                        onClick={() => onDeleteInquiry(inq.id)}
                        className="text-gray-300 hover:text-red-500 p-1.5 transition-colors shrink-0"
                        title="Delete transmission record"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
