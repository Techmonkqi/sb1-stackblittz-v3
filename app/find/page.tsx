"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import {
  Bed,
  UtensilsCrossed,
  Compass,
  Car,
  ShoppingBag,
  Music,
  Sparkles,
  Mountain,
  TreePine,
  Briefcase,
  Users,
  Leaf,
  Baby,
  Landmark,
  Camera,
  Wine,
} from "lucide-react"
import {
  directoryListings,
  categories,
  regions,
  cities,
  type DirectoryCategory,
  type Region,
} from "@/lib/directory-data"
import { Breadcrumbs } from "@/components/breadcrumbs"

const categoryIcons: Record<DirectoryCategory, any> = {
  "Accommodations": Bed,
  "Dining & Restaurants": UtensilsCrossed,
  "Tour Operators": Compass,
  "Transportation": Car,
  "Shopping": ShoppingBag,
  "Entertainment": Music,
  "Health & Beauty": Sparkles,
  "Activities & Experiences": Mountain,
  "Outdoor Recreation": TreePine,
  "Travel Services": Briefcase,
  "Community-Based Tourism": Users,
  "Sustainable Tourism": Leaf,
  "Family-Friendly Resources": Baby,
  "Cultural Resources": Landmark,
  "Photography & Art": Camera,
  "Nightlife & Social Scene": Wine,
}

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<DirectoryCategory | "all">("all")
  const [selectedRegion, setSelectedRegion] = useState<Region | "all">("all")
  const [selectedCity, setSelectedCity] = useState<string | "all">("all")

  const filteredListings = directoryListings.filter((listing) => {
    const matchesSearch = listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory
    const matchesRegion = selectedRegion === "all" || listing.region === selectedRegion
    const matchesCity = selectedCity === "all" || listing.city === selectedCity
    return matchesSearch && matchesCategory && matchesRegion && matchesCity
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold mb-8">Guyana Travel Directory</h1>

      <div className="grid gap-6 mb-8">
        <Input
          placeholder="Search businesses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as DirectoryCategory | "all")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedRegion}
            onValueChange={(value) => setSelectedRegion(value as Region | "all")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedCity}
            onValueChange={setSelectedCity}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = categoryIcons[category]
            return (
              <Card
                key={category}
                className={`cursor-pointer transition-colors hover-scale ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category ? "all" : category
                )}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Icon className="h-8 w-8 mb-2" />
                  <span className="text-sm text-center">{category}</span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <Link key={listing.id} href={`/find/${listing.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow hover-lift">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${listing.image})` }}
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="mb-2">{listing.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{listing.rating}</span>
                      <span>({listing.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">{listing.priceRange}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">{listing.description}</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Category:</strong> {listing.category}</p>
                  <p><strong>Location:</strong> {listing.city}, {listing.region}</p>
                  {listing.openingHours && (
                    <p>
                      <strong>Hours:</strong> {listing.openingHours.days}, {listing.openingHours.hours}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}