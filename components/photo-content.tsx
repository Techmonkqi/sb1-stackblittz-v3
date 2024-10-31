"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"
import { photos } from "@/lib/photo-data"
import { Download, Eye, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

export function PhotoContent({ photo }: { photo: (typeof photos)[0] }) {
  const currentIndex = photos.findIndex(p => p.id === photo.id)
  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null

  const relatedPhotos = photos
    .filter(p => p.id !== photo.id && p.tags.some(t => photo.tags.includes(t)))
    .slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-8">
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            {prevPhoto ? (
              <Link href={`/photos/${prevPhoto.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Previous Photo
                </Button>
              </Link>
            ) : (
              <Button variant="outline" disabled className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous Photo
              </Button>
            )}

            {nextPhoto ? (
              <Link href={`/photos/${nextPhoto.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  Next Photo
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button variant="outline" disabled className="flex items-center gap-2">
                Next Photo
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <h1 className="text-4xl font-bold mb-4">{photo.title}</h1>
            <p className="text-xl text-muted-foreground">{photo.description}</p>
          </div>

          {/* Rest of the existing content remains the same until the end of lg:col-span-2 div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <span>Views: 1.2K</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>Taken on: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Location: {photo.location || "Guyana"}</span>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">Technical Details</h3>
              <div className="space-y-2 text-sm">
                <p>Camera: {photo.camera || "Canon EOS R5"}</p>
                <p>Lens: {photo.lens || "24-70mm f/2.8"}</p>
                <p>Settings: {photo.settings || "f/8, 1/250s, ISO 100"}</p>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {photo.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Related Photos Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Related Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedPhotos.map(relatedPhoto => (
                <Link key={relatedPhoto.id} href={`/photos/${relatedPhoto.id}`}>
                  <div className="relative aspect-square rounded-lg overflow-hidden group">
                    <Image
                      src={relatedPhoto.url}
                      alt={relatedPhoto.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">
                        {relatedPhoto.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* Right sidebar remains the same */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={photo.photographerAvatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"}
                  alt={photo.photographer}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{photo.photographer}</h3>
                <p className="text-sm text-muted-foreground">Professional Photographer</p>
              </div>
            </div>
            <Button className="w-full mb-4">Follow Photographer</Button>
            <Button variant="outline" className="w-full" onClick={() => window.open(photo.url, '_blank')}>
              <Download className="mr-2 h-4 w-4" /> Download Photo
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Share This Photo</h3>
            <SocialShare
              url={`https://magiccitytoursguyana.com/photos/${photo.id}`}
              title={photo.title}
              media={photo.url}
            />
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Similar Photos</h3>
            <div className="grid grid-cols-2 gap-2">
              {photos
                .filter(p => p.id !== photo.id && p.tags.some(t => photo.tags.includes(t)))
                .slice(0, 4)
                .map(p => (
                  <div key={p.id} className="relative aspect-square rounded overflow-hidden">
                    <Image
                      src={p.url}
                      alt={p.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}