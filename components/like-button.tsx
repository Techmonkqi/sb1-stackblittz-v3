"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Heart } from "lucide-react"

interface LikeButtonProps {
  initialLikes: number
}

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className={`like-button flex items-center gap-2 ${
        isLiked 
          ? "text-red-500 hover:text-red-600 hover:bg-red-50" 
          : "text-muted-foreground hover:text-red-500 hover:bg-red-50"
      }`}
    >
      <Heart className={`h-4 w-4 transition-all duration-300 ${isLiked ? "fill-current scale-110" : "scale-100"}`} />
      <span className="transition-all duration-300">{likes}</span>
    </Button>
  )
}