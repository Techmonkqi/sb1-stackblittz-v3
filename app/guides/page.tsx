"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { guides } from "@/lib/data"
import { Star } from "lucide-react"

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGuides = guides.filter((guide) =>
    guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Tour Guides</h1>
      
      <div className="mb-8">
        <Input
          placeholder="Search guides by name or specialty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.map((guide) => (
          <Card key={guide.id} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={guide.image}
                alt={guide.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{guide.name}</CardTitle>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{guide.rating}</span>
                <span className="text-muted-foreground">
                  ({guide.reviewCount} reviews)
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{guide.bio}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((language) => (
                      <span
                        key={language}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full">Book This Guide</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}