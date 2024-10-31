import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tour } from "@/lib/types"

export function TourItinerary({ tour }: { tour: Tour }) {
  return (
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
  )
}