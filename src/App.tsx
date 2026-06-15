import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import AboutAgent from './components/AboutAgent';
import Testimonials from './components/Testimonials';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import AgentDashboard from './components/AgentDashboard';
import { Property, TourBooking, InquireMessage } from './types';
import { LUXURY_PROPERTIES } from './data';

export default function App() {
  const [properties] = useState<Property[]>(LUXURY_PROPERTIES);
  
  // Storage synchronized selections state values
  const [favorites, setFavorites] = useState<Property[]>([]);
  const [bookings, setBookings] = useState<TourBooking[]>([]);
  const [inquiries, setInquiries] = useState<InquireMessage[]>([]);

  // Operational togglers state managers
  const [searchFilter, setSearchFilter] = useState<{ location: string; type: string; budget: string } | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [vaultOpen, setVaultOpen] = useState(false);

  // Initialize and load synced local storage sessions on mount
  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem('sterling_favorites');
      const storedBookings = localStorage.getItem('sterling_bookings');
      const storedInquiries = localStorage.getItem('sterling_inquiries');

      if (storedFavs) setFavorites(JSON.parse(storedFavs));
      if (storedBookings) setBookings(JSON.parse(storedBookings));
      if (storedInquiries) setInquiries(JSON.parse(storedInquiries));
    } catch (err) {
      console.error("Accreditation state sync failure:", err);
    }
  }, []);

  // Update localStorage helper helpers
  const saveFavs = (updated: Property[]) => {
    setFavorites(updated);
    localStorage.setItem('sterling_favorites', JSON.stringify(updated));
  };

  const saveBookings = (updated: TourBooking[]) => {
    setBookings(updated);
    localStorage.setItem('sterling_bookings', JSON.stringify(updated));
  };

  const saveInquiries = (updated: InquireMessage[]) => {
    setInquiries(updated);
    localStorage.setItem('sterling_inquiries', JSON.stringify(updated));
  };

  // 1. Toggler bookmark Favorite controller
  const handleToggleFavorite = (prop: Property) => {
    const exists = favorites.some((fav) => fav.id === prop.id);
    if (exists) {
      const updated = favorites.filter((fav) => fav.id !== prop.id);
      saveFavs(updated);
    } else {
      const updated = [...favorites, prop];
      saveFavs(updated);
    }
  };

  const handleRemoveFavorite = (prop: Property) => {
    const updated = favorites.filter((fav) => fav.id !== prop.id);
    saveFavs(updated);
  };

  // 2. Dispatchers scheduling Tour viewings
  const handleAddBooking = (newShow: Omit<TourBooking, 'id' | 'createdAt' | 'status'>) => {
    const bookingRecord: TourBooking = {
      ...newShow,
      id: `book_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    const updated = [...bookings, bookingRecord];
    saveBookings(updated);
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    saveBookings(updated);
  };

  // 3. Dispatchers registering leads inquiries
  const handleAddInquiry = (newInquiry: Omit<InquireMessage, 'id' | 'createdAt'>) => {
    const inquiryRecord: InquireMessage = {
      ...newInquiry,
      id: `inq_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      createdAt: new Date().toISOString()
    };

    const updated = [inquiryRecord, ...inquiries]; // Put latest upfront
    saveInquiries(updated);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  // 4. Advanced search filter receiver
  const handleSearchCommit = (filters: { location: string; type: string; budget: string }) => {
    setSearchFilter(filters);
  };

  const handleResetSearch = () => {
    setSearchFilter(null);
  };

  // Smooth scroll helper for navigational tags
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. Header Navigation System */}
      <Navbar
        favCount={favorites.length}
        bookingsCount={bookings.length}
        onOpenVault={() => setVaultOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. Stunning Hero Stage */}
      <Hero 
        onSearch={handleSearchCommit} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* 3. Catalog & Listings Showcase */}
      <FeaturedProperties
        properties={properties}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        searchFilter={searchFilter}
        onResetSearch={handleResetSearch}
      />

      {/* 4. Core Brand bento grid */}
      <WhyChooseUs />

      {/* 5. Senior Special Broker Profile Section */}
      <AboutAgent onScrollToSection={handleScrollToSection} />

      {/* 6. Quantitative record totals counter ledger */}
      <StatsSection />

      {/* 7. Endorsements carousel slider */}
      <Testimonials />

      {/* 8. Conversion contact sheet & Stylized map coordinates */}
      <ContactSection
        onAddInquiry={handleAddInquiry}
        inquiries={inquiries}
        onDeleteInquiry={handleDeleteInquiry}
      />

      {/* 9. Copyright Credits footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* --- Overlay Modals Portal Systems --- */}

      {/* Selection Vault Sliding Drawer */}
      <AgentDashboard
        isOpen={vaultOpen}
        onClose={() => setVaultOpen(false)}
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
        inquiries={inquiries}
        onDeleteInquiry={handleDeleteInquiry}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
      />

      {/* Property Details Presentation sheet Overlay */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.some((fav) => fav.id === selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
          onAddBooking={handleAddBooking}
        />
      )}

    </div>
  );
}
