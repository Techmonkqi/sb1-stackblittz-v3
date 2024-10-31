export const tours = [
  {
    id: 1,
    title: "Rupununi Brazil Experience Tour",
    description: "Experience the unique culture and landscapes of the Rupununi region, where Guyana meets Brazil. Explore savannas, meet indigenous communities, and witness incredible wildlife.",
    image: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=1000",
    price: 299,
    duration: "3 days",
    location: "Rupununi Region",
    included: [
      "All transportation",
      "Accommodation",
      "Meals",
      "Local guide",
      "Activities",
      "Equipment"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Cultural Welcome",
        description: "Arrive in Lethem, transfer to lodge, welcome ceremony with indigenous community"
      },
      {
        day: 2,
        title: "Savanna Safari",
        description: "Full-day wildlife viewing, bird watching, and visiting local ranches"
      },
      {
        day: 3,
        title: "Border Experience",
        description: "Visit the Guyana-Brazil border, local market tour, departure"
      }
    ],
    maxGroupSize: 12,
    difficulty: "Moderate",
    startDates: ["2024-05-01", "2024-06-15", "2024-07-30"]
  },
  {
    id: 2,
    title: "Iwokrama Jungle Canopy Experience",
    description: "Explore the rainforest canopy and spot rare wildlife species in the heart of Guyana's pristine jungle. Stay at the renowned Iwokrama River Lodge.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
    price: 399,
    duration: "2 days",
    location: "Iwokrama Forest",
    included: [
      "Transportation from Georgetown",
      "Lodge accommodation",
      "All meals",
      "Expert guide",
      "Canopy walkway access",
      "Night tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Iwokrama",
        description: "Morning flight to Iwokrama, afternoon canopy walk, night wildlife tour"
      },
      {
        day: 2,
        title: "Wildlife & Research",
        description: "Morning bird watching, visit research station, afternoon return flight"
      }
    ],
    maxGroupSize: 8,
    difficulty: "Easy",
    startDates: ["2024-04-15", "2024-05-20", "2024-06-10"]
  },
  {
    id: 3,
    title: "Kaieteur Falls Adventure",
    description: "Visit the world's highest single-drop waterfall, surrounded by pristine rainforest. Experience the power of nature at its finest.",
    image: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1000",
    price: 199,
    duration: "1 day",
    location: "Kaieteur National Park",
    included: [
      "Return flights",
      "Park fees",
      "Guide services",
      "Lunch",
      "Safety equipment",
      "Photography permit"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kaieteur Experience",
        description: "Morning flight, guided tour of falls and surroundings, afternoon return"
      }
    ],
    maxGroupSize: 12,
    difficulty: "Easy",
    startDates: ["2024-04-01", "2024-04-15", "2024-05-01"]
  }
]

export const guides = [
  {
    id: 1,
    name: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    bio: "Expert naturalist with 10 years of experience in Guyana's rainforests",
    specialties: ["Wildlife Photography", "Bird Watching", "Indigenous Culture"],
    languages: ["English", "Portuguese", "Spanish"],
    rating: 4.9,
    reviewCount: 128,
    dailyRate: 150,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    bio: "Certified eco-tourism guide specializing in adventure experiences",
    specialties: ["Rock Climbing", "Survival Skills", "Botany"],
    languages: ["English", "French"],
    rating: 4.8,
    reviewCount: 95,
    dailyRate: 175,
    availability: ["Wed", "Thu", "Fri", "Sat", "Sun"]
  }
]