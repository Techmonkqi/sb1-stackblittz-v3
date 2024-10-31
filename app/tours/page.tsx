"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { TourCard } from "@/components/tour-card"
import { tours } from "@/lib/data"

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState("all")
  const [duration, setDuration] = useState("all")

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = priceRange === "all" || 
      (priceRange === "0-200" && tour.price <= 200) ||
      (priceRange === "201-500" && tour.price > 200 && tour.price <= 500) ||
      (priceRange === "501+" && tour.price > 500)
    const matchesDuration = duration === "all" ||
      (duration === "1" && tour.duration === "1 day") ||
      (duration === "2-3" && ["2 days", "3 days"].includes(tour.duration)) ||
      (duration === "4+" && parseInt(tour.duration) >= 4)
    
    return matchesSearch && matchesPrice && matchesDuration
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Our Tours</h1>
      
      <Card className="p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Search tours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select
            value={priceRange}
            onValueChange={setPriceRange}
          >
            <option value="all">All Prices</option>
            <option value="0-200">$0 - $200</option>
            <option value="201-500">$201 - $500</option>
            <option value="501+">$501+</option>
          </Select>
          <Select
            value={duration}
            onValueChange={setDuration}
          >
            <option value="all">All Durations</option>
            <option value="1">1 Day</option>
            <option value="2-3">2-3 Days</option>
            <option value="4+">4+ Days</option>
          </Select>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  )
}