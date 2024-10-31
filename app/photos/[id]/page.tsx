import { photos } from "@/lib/photo-data"
import { PhotoContent } from "@/components/photo-content"

export function generateStaticParams() {
  return photos.map((photo) => ({
    id: photo.id.toString(),
  }))
}

export default function PhotoDetailPage({ params }: { params: { id: string } }) {
  const photo = photos.find(p => p.id.toString() === params.id)

  if (!photo) {
    return <div>Photo not found</div>
  }

  return <PhotoContent photo={photo} />
}