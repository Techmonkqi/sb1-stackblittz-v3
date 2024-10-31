"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Magic City Tours</h1>
        
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=2000"
            alt="Kaieteur Falls"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2>Our Story</h2>
          <p>
            Magic City Tours was founded in 2018 with a vision to showcase the authentic beauty and rich cultural heritage of Guyana. As local experts, we understand that Guyana is more than just a destination – it's a living tapestry of diverse cultures, pristine rainforests, and unforgettable experiences.
          </p>

          <h2>Our Mission</h2>
          <p>
            We are committed to providing exceptional travel experiences that connect visitors with the heart and soul of Guyana. Through sustainable tourism practices and partnerships with local communities, we strive to preserve our natural heritage while creating meaningful cultural exchanges.
          </p>

          <h2>What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p>Our team consists of experienced local guides who bring deep knowledge and authentic insights to every tour.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
                <p>We prioritize eco-friendly practices and support local communities through responsible tourism initiatives.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Customized Experiences</h3>
                <p>Each tour is tailored to provide unique and personalized adventures that match your interests.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <p>Your safety is our priority, with comprehensive measures and experienced guides ensuring peace of mind.</p>
              </CardContent>
            </Card>
          </div>

          <h2>Our Commitment to Sustainability</h2>
          <p>
            At Magic City Tours, we believe in responsible tourism that benefits both visitors and local communities. We work closely with indigenous communities, support local conservation efforts, and implement eco-friendly practices in all our operations.
          </p>

          <h2>Join Us on the Journey</h2>
          <p>
            Whether you're an adventure seeker, nature enthusiast, or cultural explorer, we invite you to discover the magic of Guyana with us. Our team is dedicated to creating unforgettable experiences that will leave you with lasting memories of this remarkable country.
          </p>
        </div>
      </div>
    </div>
  )
}