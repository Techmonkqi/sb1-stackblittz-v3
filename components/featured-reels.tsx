"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { videos } from "@/lib/video-data"
import { Play } from "lucide-react"

export function FeaturedReels() {
  // Get 3 most recent videos
  const recentVideos = videos.slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Guyana Reels</h2>
        <Link
          href="/reels"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          View All Reels →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentVideos.map((video) => (
          <Link key={video.id} href={`/reels/${video.id}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-video">
                <iframe 
                  width="560" 
                  height="315" 
                  src={`${video.youtubeUrl}?si=ejX09sbHWO5XFFj5`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <span>{video.views} views</span>
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={video.creatorAvatar}
                      alt={video.creator}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {video.creator}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}