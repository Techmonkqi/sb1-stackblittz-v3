"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tour } from "@/lib/types"
import { format } from "date-fns"

export function TourBooking({ tour }: { tour: Tour }) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const startDates = tour.startDates.map(date => new Date(date))

  return (
    <>
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
    </>
  )
}