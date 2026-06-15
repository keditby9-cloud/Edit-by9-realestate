export interface Property {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Villa' | 'Penthouse' | 'Chateau' | 'Coastal';
  status: 'For Sale' | 'Under Contract' | 'Exclusive';
  heroImage: string;
  gallery: string[];
  description: string;
  amenities: string[];
  yearBuilt: number;
  coordinates: { lat: number; lng: number };
}

export interface AgentProfile {
  name: string;
  title: string;
  experience: string;
  bio: string;
  achievements: string[];
  specialties: string[];
  photo: string;
  signature: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
    twitter: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
  propertyPurchased: string;
}

export interface TourBooking {
  id: string;
  propertyId: string;
  propertyName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  timeSlot: string;
  tourType: 'In-person' | 'Virtual Video';
  status: 'Confirmed' | 'Pending Verification';
  createdAt: string;
}

export interface InquireMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyInterest: string; // "General inquiry" or property title
  serviceType: 'Private Tour' | 'Listing Appraisal' | 'Portfolio Consultation' | 'General Inquiry';
  message: string;
  createdAt: string;
}
