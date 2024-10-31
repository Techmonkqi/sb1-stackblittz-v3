"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tour } from "@/lib/types"
import { format } from "date-fns"

interface TourDetailProps {
  tour: Tour
}

export function TourDetail({ tour }: TourDetailProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const startDates = tour.startDates.map(date => new Date(date))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] mb-8">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{tour.description}</p>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tour Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                    <p className="text-muted-foreground">{day.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-4">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">${tour.price}</p>
                  <p className="text-muted-foreground">per person</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Duration:</strong> {tour.duration}</p>
                  <p><strong>Location:</strong> {tour.location}</p>
                  <p><strong>Group Size:</strong> Up to {tour.maxGroupSize} people</p>
                  <p><strong>Difficulty:</strong> {tour.difficulty}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) =>
                  !startDates.some(
                    (startDate) =>
                      format(startDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
                  )
                }
              />
              <Button className="w-full mt-4" disabled={!selectedDate}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}