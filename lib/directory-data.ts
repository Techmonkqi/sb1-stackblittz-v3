// First, define the types
export type DirectoryCategory =
  | "Accommodations"
  | "Dining & Restaurants"
  | "Tour Operators"
  | "Transportation"
  | "Shopping"
  | "Entertainment"
  | "Health & Beauty"
  | "Activities & Experiences"
  | "Outdoor Recreation"
  | "Travel Services"
  | "Community-Based Tourism"
  | "Sustainable Tourism"
  | "Family-Friendly Resources"
  | "Cultural Resources"
  | "Photography & Art"
  | "Nightlife & Social Scene"

// Export the categories array before other exports
export const categories: DirectoryCategory[] = [
  "Accommodations",
  "Dining & Restaurants",
  "Tour Operators",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Health & Beauty",
  "Activities & Experiences",
  "Outdoor Recreation",
  "Travel Services",
  "Community-Based Tourism",
  "Sustainable Tourism",
  "Family-Friendly Resources",
  "Cultural Resources",
  "Photography & Art",
  "Nightlife & Social Scene"
]

// Rest of the types and data exports
export type Region =
  | "Demerara-Mahaica"
  | "Essequibo Islands-West Demerara"
  | "Pomeroon-Supenaam"
  | "Upper Demerara-Berbice"
  | "Upper Takutu-Upper Essequibo"
  | "Potaro-Siparuni"

export interface DirectoryListing {
  id: string
  name: string
  category: DirectoryCategory
  description: string
  region: Region
  city: string
  address: string
  phone?: string
  email?: string
  website?: string
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
  }
  rating: number
  reviewCount: number
  priceRange: "₭" | "₭₭" | "₭₭₭" | "₭₭₭₭"
  image: string
  features: string[]
  openingHours?: {
    days: string
    hours: string
  }
}

export const regions: Region[] = [
  "Demerara-Mahaica",
  "Essequibo Islands-West Demerara",
  "Pomeroon-Supenaam",
  "Upper Demerara-Berbice",
  "Upper Takutu-Upper Essequibo",
  "Potaro-Siparuni"
]

export const cities = [
  "Georgetown",
  "Linden",
  "New Amsterdam",
  "Anna Regina",
  "Bartica",
  "Lethem",
  "Mabaruma",
  "Mahdia"
]

export const directoryListings: DirectoryListing[] = [
  {
    id: "marriott-georgetown",
    name: "Guyana Marriott Hotel Georgetown",
    category: "Accommodations",
    description: "Luxury hotel featuring modern amenities, waterfront views, and world-class service in the heart of Georgetown.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Block Alpha Battery Road, Kingston, Georgetown",
    phone: "+592-231-2480",
    email: "reservations@marriottgeorgetown.com",
    website: "https://www.marriott.com/hotels/travel/geogy-guyana-marriott-hotel-georgetown",
    socialMedia: {
      facebook: "https://facebook.com/GuyanaMarriott",
      instagram: "https://instagram.com/guyanamarriott"
    },
    rating: 4.5,
    reviewCount: 856,
    priceRange: "₭₭₭₭",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000",
    features: [
      "Swimming Pool",
      "Fitness Center",
      "Restaurant & Bar",
      "Conference Facilities",
      "Spa Services",
      "24/7 Room Service"
    ],
    openingHours: {
      days: "Monday-Sunday",
      hours: "24 Hours"
    }
  },
  {
    id: "cara-lodge",
    name: "Cara Lodge",
    category: "Accommodations",
    description: "Historic colonial-style hotel offering traditional Guyanese hospitality and elegant accommodations.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "294 Quamina Street, Georgetown",
    phone: "+592-225-5301",
    email: "caralodge@guyana.net.gy",
    website: "https://caralodge.com",
    rating: 4.7,
    reviewCount: 423,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000",
    features: [
      "Heritage Building",
      "Fine Dining Restaurant",
      "Garden Setting",
      "Business Center",
      "Airport Shuttle"
    ],
    openingHours: {
      days: "Monday-Sunday",
      hours: "24 Hours"
    }
  },
  {
    id: "arawak-steakhouse",
    name: "Arawak Steakhouse & Grill",
    category: "Dining & Restaurants",
    description: "Premium steakhouse serving locally sourced meats and seafood with a Guyanese twist.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "125 Carmichael Street, Georgetown",
    phone: "+592-227-7665",
    rating: 4.6,
    reviewCount: 312,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=1000",
    features: [
      "Local & International Cuisine",
      "Wine Selection",
      "Private Dining",
      "Outdoor Seating"
    ],
    openingHours: {
      days: "Tuesday-Sunday",
      hours: "12:00 PM - 10:00 PM"
    }
  },
  {
    id: "wilderness-explorers",
    name: "Wilderness Explorers",
    category: "Tour Operators",
    description: "Leading adventure tour operator specializing in wildlife, nature, and cultural expeditions across Guyana.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "141 Fourth Street, Campbellville, Georgetown",
    phone: "+592-227-7698",
    email: "info@wildernessexplorers.com",
    website: "https://wildernessexplorers.com",
    rating: 4.9,
    reviewCount: 578,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
    features: [
      "Customized Tours",
      "Expert Guides",
      "Wildlife Expeditions",
      "Cultural Tours",
      "Photography Tours"
    ],
    openingHours: {
      days: "Monday-Friday",
      hours: "8:00 AM - 5:00 PM"
    }
  },
  {
    id: "roraima-airways",
    name: "Roraima Airways",
    category: "Transportation",
    description: "Domestic airline and charter service provider offering flights to interior locations and neighboring countries.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Eugene F. Correia International Airport, Ogle",
    phone: "+592-222-8277",
    website: "https://roraimaairways.com",
    rating: 4.3,
    reviewCount: 245,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000",
    features: [
      "Scheduled Flights",
      "Charter Services",
      "Air Ambulance",
      "Cargo Services"
    ],
    openingHours: {
      days: "Monday-Sunday",
      hours: "6:00 AM - 6:00 PM"
    }
  },
  {
    id: "stabroek-market",
    name: "Stabroek Market",
    category: "Shopping",
    description: "Historic marketplace offering local produce, crafts, and traditional items in an iconic colonial building.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Water Street, Georgetown",
    rating: 4.2,
    reviewCount: 687,
    priceRange: "₭",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    features: [
      "Fresh Produce",
      "Local Crafts",
      "Food Vendors",
      "Historic Architecture"
    ],
    openingHours: {
      days: "Monday-Saturday",
      hours: "7:00 AM - 5:00 PM"
    }
  },
  {
    id: "movie-towne-guyana",
    name: "MovieTowne Guyana",
    category: "Entertainment",
    description: "Modern multiplex cinema and entertainment center featuring the latest movies and family activities.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Turkeyen, East Coast Demerara",
    phone: "+592-222-5555",
    website: "https://movietowne.com/guyana",
    rating: 4.4,
    reviewCount: 892,
    priceRange: "₭₭",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1000",
    features: [
      "Multiple Screens",
      "IMAX Theatre",
      "Food Court",
      "Arcade Games"
    ],
    openingHours: {
      days: "Monday-Sunday",
      hours: "11:00 AM - 11:00 PM"
    }
  },
  {
    id: "oasis-spa",
    name: "Oasis Spa & Wellness",
    category: "Health & Beauty",
    description: "Luxury spa offering traditional and modern treatments in a tranquil setting.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "47 Main Street, Georgetown",
    phone: "+592-226-4847",
    rating: 4.6,
    reviewCount: 234,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000",
    features: [
      "Massage Therapy",
      "Facial Treatments",
      "Yoga Classes",
      "Steam Room"
    ],
    openingHours: {
      days: "Tuesday-Sunday",
      hours: "9:00 AM - 7:00 PM"
    }
  },
  {
    id: "kaieteur-adventures",
    name: "Kaieteur Adventures",
    category: "Activities & Experiences",
    description: "Specialized tour company offering guided visits to Kaieteur Falls and surrounding rainforest.",
    region: "Potaro-Siparuni",
    city: "Mahdia",
    address: "Mahdia Township",
    phone: "+592-231-5555",
    website: "https://kaieteurtours.gy",
    rating: 4.8,
    reviewCount: 445,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1000",
    features: [
      "Waterfall Tours",
      "Hiking Expeditions",
      "Photography Tours",
      "Bird Watching"
    ],
    openingHours: {
      days: "Monday-Saturday",
      hours: "8:00 AM - 5:00 PM"
    }
  },
  {
    id: "rupununi-eco-lodge",
    name: "Rupununi Eco Lodge",
    category: "Sustainable Tourism",
    description: "Eco-friendly lodge offering authentic experiences in the Rupununi savannah.",
    region: "Upper Takutu-Upper Essequibo",
    city: "Lethem",
    address: "North Rupununi",
    phone: "+592-227-8888",
    email: "bookings@rupununilodge.com",
    rating: 4.7,
    reviewCount: 312,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?q=80&w=1000",
    features: [
      "Eco-friendly Accommodations",
      "Wildlife Tours",
      "Cultural Experiences",
      "Local Cuisine"
    ],
    openingHours: {
      days: "Monday-Sunday",
      hours: "24 Hours"
    }
  },
  {
    id: "iwokrama-centre",
    name: "Iwokrama International Centre",
    category: "Cultural Resources",
    description: "Research and conservation center offering educational tours and rainforest experiences.",
    region: "Potaro-Siparuni",
    city: "Mahdia",
    address: "Iwokrama Forest",
    phone: "+592-225-1504",
    website: "https://iwokrama.org",
    rating: 4.9,
    reviewCount: 267,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000",
    features: [
      "Research Facilities",
      "Canopy Walkway",
      "Guided Tours",
      "Educational Programs"
    ],
    openingHours: {
      days: "Monday-Friday",
      hours: "8:00 AM - 4:00 PM"
    }
  },
  {
    id: "palm-court",
    name: "Palm Court",
    category: "Nightlife & Social Scene",
    description: "Popular nightclub and lounge featuring live music and entertainment.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "35 Main Street, Georgetown",
    phone: "+592-225-0318",
    rating: 4.3,
    reviewCount: 523,
    priceRange: "₭₭",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000",
    features: [
      "Live Music",
      "Dance Floor",
      "VIP Section",
      "Bar Service"
    ],
    openingHours: {
      days: "Thursday-Sunday",
      hours: "8:00 PM - 2:00 AM"
    }
  },
  {
    id: "guyana-craft-market",
    name: "Guyana Craft Market",
    category: "Shopping",
    description: "Market featuring local handicrafts, artwork, and traditional Guyanese products.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Robb Street, Georgetown",
    rating: 4.4,
    reviewCount: 345,
    priceRange: "₭₭",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000",
    features: [
      "Local Crafts",
      "Indigenous Art",
      "Souvenirs",
      "Cultural Items"
    ],
    openingHours: {
      days: "Monday-Saturday",
      hours: "9:00 AM - 5:00 PM"
    }
  },
  {
    id: "rainforest-tours",
    name: "Rainforest Tours",
    category: "Tour Operators",
    description: "Experienced tour operator specializing in rainforest expeditions and wildlife viewing.",
    region: "Upper Demerara-Berbice",
    city: "Linden",
    address: "72 Republic Avenue, Linden",
    phone: "+592-444-6789",
    email: "info@rainforesttours.gy",
    rating: 4.7,
    reviewCount: 289,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000",
    features: [
      "Guided Tours",
      "Bird Watching",
      "Photography Tours",
      "Camping Trips"
    ],
    openingHours: {
      days: "Monday-Saturday",
      hours: "8:00 AM - 5:00 PM"
    }
  },
  {
    id: "princess-hotel",
    name: "Princess Hotel & Casino",
    category: "Entertainment",
    description: "Hotel complex featuring casino gaming, entertainment, and dining options.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Providence, East Bank Demerara",
    phone: "+592-265-7001",
    website: "https://princesshotelguyana.com",
    rating: 4.2,
    reviewCount: 678,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000",
    features: [
      "Casino",
      "Multiple Restaurants",
      "Live Entertainment",
      "Pool & Spa"
    ],
    openingHours: {
      days: "Monday-Sunday",
      hours: "24 Hours"
    }
  }
]