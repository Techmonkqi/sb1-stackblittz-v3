"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"
import { videos } from "@/lib/video-data"
import { Eye, Clock, Calendar, ThumbsUp, Youtube } from "lucide-react"

export function ReelContent({ video }: { video: (typeof videos)[0] }) {
  const relatedVideos = videos
    .filter(v => v.id !== video.id && v.category === video.category)
    .slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
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

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <h1 className="text-4xl font-bold mb-4">{video.title}</h1>
            <p className="text-xl text-muted-foreground">{video.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <span>{video.views} views</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>{video.duration}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-muted-foreground" />
                <span>2.5K likes</span>
              </div>
            </Card>
          </div>

          <Card className="p-6 mb-8">
            <h3 className="font-semibold mb-4">About This Video</h3>
            <p className="text-muted-foreground">
              This video showcases the incredible beauty and diversity of Guyana's landscapes
              and culture. Join us on this journey as we explore one of South America's hidden gems.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {video.tags?.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* Related Videos Section */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedVideos.map(relatedVideo => (
                <div key={relatedVideo.id} className="group">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary">Watch Now</Button>
                    </div>
                  </div>
                  <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {relatedVideo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {relatedVideo.views} views • {relatedVideo.duration}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={video.creatorAvatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"}
                  alt={video.creator || "Video Creator"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{video.creator || "Magic City Tours"}</h3>
                <p className="text-sm text-muted-foreground">Video Creator</p>
              </div>
            </div>
            <Button className="w-full mb-3">Subscribe</Button>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2"
              onClick={() => window.open(video.channelUrl || `https://www.youtube.com/channel/${video.channelId}`, '_blank')}
            >
              <Youtube className="h-5 w-5" />
              Visit Channel
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Share This Video</h3>
            <SocialShare
              url={`https://magiccitytoursguyana.com/reels/${video.id}`}
              title={video.title}
            />
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">More From This Creator</h3>
            <div className="space-y-4">
              {videos
                .filter(v => v.id !== video.id && v.creator === video.creator)
                .slice(0, 3)
                .map(v => (
                  <div key={v.id} className="flex gap-4">
                    <div className="relative w-24 h-16 rounded overflow-hidden">
                      <Image
                        src={v.thumbnail}
                        alt={v.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 text-sm">{v.title}</h4>
                      <p className="text-xs text-muted-foreground">{v.views} views</p>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}