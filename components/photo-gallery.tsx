"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  {
    src: "/us.jpg",
    caption: "Every moment with you is a treasure",
  },
  {
    src: "/couple-holding-hands-at-sunset.jpg",
    caption: "Your hand in mine feels like home",
  },
  {
    src: "/couple-laughing.png",
    caption: "You make me laugh like no one else can",
  },
  {
    src: "/couple-looking-at-stars.jpg",
    caption: "Under the same sky, thinking of you",
  },
  {
    src: "/couple-hugging.jpg",
    caption: "Can't wait for the next time I can hold you",
  },
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary text-balance">
        Our Moments Together
      </h2>
      <Card className="p-6 shadow-xl">
        <div className="relative">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
            <Image
              src={photos[currentIndex].src || "/placeholder.svg"}
              alt={photos[currentIndex].caption}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-between gap-4 mb-4">
            <Button onClick={goToPrevious} variant="outline" size="icon">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <p className="text-lg text-center text-muted-foreground italic flex-1 text-pretty">
              {photos[currentIndex].caption}
            </p>

            <Button onClick={goToNext} variant="outline" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
