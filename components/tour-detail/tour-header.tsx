import Image from "next/image"
import { Tour } from "@/lib/types"

export function TourHeader({ tour }: { tour: Tour }) {
  return (
    <>
      <div className="relative h-[400px] mb-8">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{tour.description}</p>
    </>
  )
}