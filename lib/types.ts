export interface Tour {
  id: number
  title: string
  description: string
  image: string
  price: number
  duration: string
  location: string
  included: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  maxGroupSize: number
  difficulty: "Easy" | "Moderate" | "Challenging"
  startDates: string[]
}

export interface Guide {
  id: number
  name: string
  image: string
  bio: string
  specialties: string[]
  languages: string[]
  rating: number
  reviewCount: number
  dailyRate: number
  availability: string[]
}

export interface Review {
  id: number
  userId: number
  tourId: number
  rating: number
  comment: string
  date: string
  userName: string
  userImage?: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readingTime: string
  categories: string[]
  tags: string[]
  metaDescription: string
  metaKeywords: string[]
}