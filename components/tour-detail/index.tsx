import { TourHeader } from "./tour-header"
import { TourItinerary } from "./tour-itinerary"
import { TourInclusions } from "./tour-inclusions"
import { TourBooking } from "./tour-booking"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Tour } from "@/lib/types"

export function TourDetail({ tour }: { tour: Tour }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TourHeader tour={tour} />
          <TourItinerary tour={tour} />
          <TourInclusions tour={tour} />
        </div>
        <div className="space-y-6">
          <TourBooking tour={tour} />
        </div>
      </div>
    </div>
  )
}