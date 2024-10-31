import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MapView } from "@/components/map-view"
import { directoryListings } from "@/lib/directory-data"
import { Star, Globe, Twitter, Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"

export function generateStaticParams() {
  return directoryListings.map((listing) => ({
    id: listing.id,
  }))
}

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  const business = directoryListings.find((b) => b.id === params.id)

  if (!business) {
    return <div>Business not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={business.image}
              alt={business.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{business.name}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{business.rating}</span>
            </div>
            <span className="text-muted-foreground">
              ({business.reviewCount} reviews)
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{business.priceRange}</span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p>{business.description}</p>
            <p>
              {business.name} is a premier destination in {business.city}, offering visitors 
              an exceptional experience in the heart of {business.region}. With a strong 
              commitment to quality service and authentic Guyanese hospitality, we've 
              established ourselves as a trusted name in the local tourism industry. Our 
              location provides easy access to major attractions while maintaining the 
              perfect balance of comfort and convenience for all our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {business.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="h-2 w-2 bg-primary rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <MapView
              address={business.address}
              name={business.name}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">{business.address}</p>
                </div>
              </div>

              {business.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{business.phone}</p>
                  </div>
                </div>
              )}

              {business.email && (
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{business.email}</p>
                  </div>
                </div>
              )}

              {business.openingHours && (
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-muted-foreground">
                      {business.openingHours.days}
                      <br />
                      {business.openingHours.hours}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              {business.website && (
                <Button asChild variant="outline" size="icon" className="social-button">
                  <Link href={business.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Website</span>
                  </Link>
                </Button>
              )}
              {business.socialMedia?.twitter && (
                <Button asChild variant="outline" size="icon" className="social-button">
                  <Link href={business.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              )}
              {business.socialMedia?.facebook && (
                <Button asChild variant="outline" size="icon" className="social-button">
                  <Link href={business.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </Button>
              )}
              {business.socialMedia?.instagram && (
                <Button asChild variant="outline" size="icon" className="social-button">
                  <Link href={business.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}