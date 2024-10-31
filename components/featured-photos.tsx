"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { photos } from "@/lib/photo-data"

export function FeaturedPhotos() {
  // Get 3 most recent photos
  const recentPhotos = photos.slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Amazing Guyana Photos</h2>
        <Link
          href="/photos"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          View All Photos →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPhotos.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{photo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {photo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={photo.photographerAvatar}
                      alt={photo.photographer}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {photo.photographer}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}