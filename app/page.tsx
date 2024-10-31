"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { FeaturedBlogs } from "@/components/featured-blogs"
import { FeaturedPhotos } from "@/components/featured-photos"
import { FeaturedReels } from "@/components/featured-reels"
import { Bed, UtensilsCrossed, ShoppingBag, Baby, Car, Wine } from "lucide-react"
import { tours } from "@/lib/data"
import { TourCard } from "@/components/tour-card"

const directoryCategories = [
  { label: "Accommodations", icon: Bed, href: "/find?category=Accommodations" },
  { label: "Dining & Restaurants", icon: UtensilsCrossed, href: "/find?category=Dining%20%26%20Restaurants" },
  { label: "Shopping", icon: ShoppingBag, href: "/find?category=Shopping" },
  { label: "Family-Friendly", icon: Baby, href: "/find?category=Family-Friendly%20Resources" },
  { label: "Transportation", icon: Car, href: "/find?category=Transportation" },
  { label: "Nightlife", icon: Wine, href: "/find?category=Nightlife%20%26%20Social%20Scene" },
]

function HeroSection({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"
          alt="Guyana Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Magic of Guyana
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience authentic adventures with local guides and create unforgettable memories
        </p>
        <div className="flex max-w-md mx-auto gap-4">
          <Input
            type="search"
            placeholder="Search tours, destinations..."
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function FindSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="p-6 shadow-xl" style={{ backgroundColor: "#2a2b0f" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            <Search className="h-5 w-5" />
            Find
          </h2>
          <Link 
            href="/find" 
            className="text-primary hover:text-primary/80 transition-colors"
          >
            View All Categories →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {directoryCategories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.label} href={category.href}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <Icon className="h-8 w-8 mb-3 text-primary" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </Card>
    </section>
  )
}

function FeaturedToursSection() {
  // Get the first 3 tours for featured display
  const featuredTours = tours.slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Tours</h2>
        <Link
          href="/tours"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          View All Tours →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FindSection />
      <FeaturedToursSection />
      <FeaturedBlogs />
      <FeaturedPhotos />
      <FeaturedReels />
    </div>
  )
}