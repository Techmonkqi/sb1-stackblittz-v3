import { tours } from "@/lib/data"
import { TourDetail } from "@/components/tour-detail"

export function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id.toString(),
  }))
}

export default function TourDetailsPage({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === parseInt(params.id))
  
  if (!tour) {
    return <div>Tour not found</div>
  }

  return <TourDetail tour={tour} />
}