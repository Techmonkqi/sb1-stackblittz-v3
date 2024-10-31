"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { photos } from "@/lib/photo-data"

// All unique tags from photos
const allTags = Array.from(
  new Set(photos.flatMap(photo => photo.tags))
).sort()

export default function PhotosPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPhotos = photos.filter(photo => {
    const matchesTag = !selectedTag || photo.tags.includes(selectedTag)
    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold mb-8">Photo Gallery</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSelectedTag(null)}
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map(photo => (
          <Link key={photo.id} href={`/photos/${photo.id}`}>
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{photo.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{photo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Photo by {photo.photographer}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}