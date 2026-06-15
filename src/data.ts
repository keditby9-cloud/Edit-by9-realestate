import { Property, AgentProfile, Testimonial } from './types';

export const LUXURY_PROPERTIES: Property[] = [
  {
    id: "prop_eclipse",
    title: "The Eclipse Pavilion",
    price: 24800000,
    formattedPrice: "$24,800,000",
    location: "Malibu, California",
    beds: 6,
    baths: 8,
    sqft: 11400,
    type: "Coastal",
    status: "Exclusive",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Perched dramatically above the Pacific Ocean, The Eclipse Pavilion is a masterpiece of architectural precision and organic design. Sculpted from premium board-formed concrete, post-tensioned steel, and continuous panels of acoustic glass, this sanctuary spans over 1.2 oceanfront acres. Features include an eighty-foot cantilevered infinity pool, a professional-grade subterranean wine gallery, five separate kitchen stations, and private beach steps descending directly into the golden sands of Malibu.",
    amenities: [
      "80-Foot Cantilever Infinity Pool",
      "Direct Private Beach Access",
      "1,800-Bottle Climate Controlled Wine Cellar",
      "Subterranean 10-Car Auto Gallery",
      "Savant Integrated Smart Home System",
      "Wellness Suite with Dry & Steam Saunas"
    ],
    yearBuilt: 2024,
    coordinates: { lat: 34.0259, lng: -118.7798 }
  },
  {
    id: "prop_one_belair",
    title: "The One Zenith Chateau",
    price: 38000000,
    formattedPrice: "$38,000,000",
    location: "Bel Air, California",
    beds: 8,
    baths: 11,
    sqft: 21500,
    type: "Chateau",
    status: "For Sale",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e7a6b85e4c7?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Unrivaled in scale and sophistication, The One Zenith Chateau towers majestically over the dramatic Los Angeles basin, offering unobstructed 270-degree skyline views starting from the Downtown skyscrapers all the way to the blue Pacific waters. Enter through monumental thirty-foot bespoke bronze pivot doors to discover soaring hand-carved Travertine colonnades, a master suite that mirrors a five-star presidential quarters, and a majestic indoor/outdoor water system reflecting golden California light.",
    amenities: [
      "270-Degree City-To-Ocean Views",
      "Subterranean Private Cinema with Dolby Atmos",
      "Commercial Grade Catering Kitchen",
      "Helipad Landing Credentials",
      "Two-Story Double Sided Fireplace Panel",
      "Zero-Edge Reflective Oasis Lagoons"
    ],
    yearBuilt: 2023,
    coordinates: { lat: 34.0833, lng: -118.4478 }
  },
  {
    id: "prop_onyx_penthouse",
    title: "Onyx Horizon Penthouse",
    price: 14250000,
    formattedPrice: "$14,250,000",
    location: "Fifth Avenue, New York",
    beds: 4,
    baths: 5,
    sqft: 7200,
    type: "Penthouse",
    status: "Exclusive",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Occupying the complete top two levels of Fifth Avenue's newest boutique residential monolith, the Onyx Horizon boasts breathtaking overlook vantage points directly into Central Park. Featuring bespoke Herringbone timber floorboards paired with architectural dark iron structures and double-height walls of pristine crystalline glass, this penthouse sets a new benchmark for private urban residency in Manhattan.",
    amenities: [
      "Panoramic Central Park & Skyline Views",
      "Private Wrap-around Sky Terrace",
      "Bespoke Brass Gas Flame Fire Pit",
      "24/7 Elite Uniformed Doorman & Porter",
      "Dual Private Key-Locked Lift Entrances",
      "La Cornue Professional Kitchen Suite"
    ],
    yearBuilt: 2025,
    coordinates: { lat: 40.7711, lng: -73.9741 }
  },
  {
    id: "prop_belvedere_monaco",
    title: "Villa Belvedere Monaco",
    price: 32000000,
    formattedPrice: "$32,000,000",
    location: "French Riviera, Monaco",
    beds: 7,
    baths: 9,
    sqft: 14800,
    type: "Villa",
    status: "Under Contract",
    heroImage: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Commanding views of Monaco's elite superyacht harbor, Villa Belvedere stands as a crown jewel of architectural modernism along the majestic Côte d'Azur. Originally sculpted by legendary European craft masters, this estate combines classical limestone curves with floor-to-ceiling glass and high-altitude infinity viewing points. Perfect for hosts who desire complete privacy, custom security details, and absolute proximity to World Championship events.",
    amenities: [
      "Superyacht Harbor Overlook Views",
      "Double-Heated Saltwater Infinity Pool",
      "Helipad Landing Permissions",
      "Separate Security Garrison Suite",
      "Master Artisan Glass Lift Structure",
      "Lush Olive Grove Gardens"
    ],
    yearBuilt: 2022,
    coordinates: { lat: 43.7384, lng: 7.4246 }
  },
  {
    id: "prop_laurel_manor",
    title: "The Laurel Peak Chateau",
    price: 19800000,
    formattedPrice: "$19,800,000",
    location: "Aspen, Colorado",
    beds: 5,
    baths: 7,
    sqft: 10500,
    type: "Chateau",
    status: "For Sale",
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Nestled beautifully against the snow-covered slopes of Aspen Mountain, The Laurel Peak Chateau is a mountain sanctuary that bridges rough alpine texture with modern minimal luxury. Structured with massive imported cedar columns, hand-chiseled slate, and triple-pane architectural glass, the property includes elite features such as a ski-in/ski-out boot vault, a glass-sided thermal spa pool, and expansive warm heated stone entertainment terraces.",
    amenities: [
      "Direct Ski-In / Ski-Out Access Lobby",
      "Glass-Enclosed Heated Thermal Hydro-Pool",
      "Double-Height Exposed Cedar Rafters",
      "Professional Boot Room & Ski Fitting Locker",
      "Wine Tasting Crypt in Natural Aspen Bedrock",
      "Outdoor Heated Timber Dining Gazebo"
    ],
    yearBuilt: 2024,
    coordinates: { lat: 39.1911, lng: -106.8175 }
  }
];

export const AGENT_PROFILE: AgentProfile = {
  name: "Alexander Sterling",
  title: "Principal Broker & Luxury Specialist",
  experience: "18+ Years",
  bio: "Alexander Sterling has established himself as the premier representative for elite high-net-worth buyers, sovereign funds, and luxury developers globally. With a lifetime career transaction ledger exceeding $2.4 Billion and an unmatched discretion record, Alexander elevates property brokerage of multi-million dollar estates from standard transactions into carefully curated experiences. His personal philosophy pairs absolute client fidelity with cutting edge architectural knowledge.",
  achievements: [
    "Over $2.4 Billion Lifetime Sales Vol",
    "Wall Street Journal Top Broker Award",
    "Special Advisory to Elite Global Developers",
    "Disputed World Auction Sales Leader"
  ],
  specialties: [
    "Off-Market Private Portfolio Brokering",
    "Architectural Development Advisory",
    "Estate Asset Securitization",
    "Discreet Multi-Jurisdictional Relocations"
  ],
  photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
  signature: "Alexander Sterling",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Arthur Pendelton III",
    role: "President",
    company: "Pendelton Equity Group",
    content: "Alexander handled our acquisition of The Eclipse Pavilion with unmatched discretion, absolute professionalism, and brilliant strategic oversight. His understand of luxury spatial geometry, local land covenants, and privacy boundaries makes him the only broker we will utilize in North America.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    propertyPurchased: "The Eclipse Pavilion"
  },
  {
    id: "test2",
    name: "Sienna von Hapsburg",
    role: "Collector & Heiress",
    company: "Geneva Capital Foundation",
    content: "The level of personal attention provided by the Sterling Concierge program is reminiscent of elite private family offices. Alexander did not simply show us properties; he curated a weekend bespoke selection matching our art collection requirements and aesthetic desires perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    propertyPurchased: "Villa Belvedere Monaco"
  },
  {
    id: "test3",
    name: "Dr. Kenji Takahara",
    role: "Founder",
    company: "Takahara Automata",
    content: "We acquired our flagship coastal penthouse through Alexander Sterling. In a super-heated competitive market, his direct relationships allowed us to view and close off-market before the general public was even aware. His insight into modern structural designs was key.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    propertyPurchased: "Onyx Horizon Penthouse"
  }
];
