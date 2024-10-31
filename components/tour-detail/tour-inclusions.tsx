import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tour } from "@/lib/types"

export function TourInclusions({ tour }: { tour: Tour }) {
  return (
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
  )
}