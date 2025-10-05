"use client"

import { useState, useRef, useEffect } from "react"
import { Music, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        if (isPlaying) {
          try {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
              await playPromise
            }
          } catch (error) {
            // Handle play interruption errors silently
            if (error instanceof Error && error.name !== "AbortError") {
              console.error("Error playing audio:", error)
            }
            setIsPlaying(false)
          }
        } else {
          audioRef.current.pause()
        }
      }
    }

    playAudio()
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  if (!isVisible) return null

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed bottom-6 right-6 z-50 animate-float">
        <Button
          onClick={togglePlay}
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Music className="w-6 h-6" />}
        </Button>
      </div>
    </>
  )
}
