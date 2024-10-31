import { videos } from "@/lib/video-data"
import { ReelContent } from "@/components/reel-content"

export function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }))
}

export default function ReelDetailPage({ params }: { params: { id: string } }) {
  const video = videos.find(v => v.id === params.id)

  if (!video) {
    return <div>Video not found</div>
  }

  return <ReelContent video={video} />
}