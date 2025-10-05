"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const songs = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    reason: "Because you are perfect to me",
    audioFile: "/songs/perfect.mp3",
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    reason: "I'd wait a thousand years for you",
    audioFile: "/songs/a-thousand-years.mp3",
  },
  {
    title: "All of Me",
    artist: "John Legend",
    reason: "You have all of me, forever",
    audioFile: "/songs/all-of-me.mp3",
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    reason: "I'll love you till we're 70 and beyond",
    audioFile: "/songs/thinking-out-loud.mp3",
  },
  {
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    reason: "Falling for you was the easiest thing I've ever done",
    audioFile: "/songs/cant-help-falling-in-love.mp3",
  },
]

export default function OurPlaylist() {
  const [playingSongIndex, setPlayingSongIndex] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleSong = async (index: number) => {
    if (playingSongIndex === index) {
      // Pause current song
      if (audioRef.current) {
        audioRef.current.pause()
      }
      setPlayingSongIndex(null)
    } else {
      // Play new song
      if (audioRef.current) {
        // Pause any currently playing audio first
        audioRef.current.pause()
        audioRef.current.currentTime = 0

        // Change source
        audioRef.current.src = songs[index].audioFile

        // Load and play with error handling
        try {
          await audioRef.current.load()
          const playPromise = audioRef.current.play()

          if (playPromise !== undefined) {
            await playPromise
            setPlayingSongIndex(index)
          }
        } catch (error) {
          // Handle play interruption errors silently
          if (error instanceof Error && error.name !== "AbortError") {
            console.error("Error playing audio:", error)
          }
          setPlayingSongIndex(null)
        }
      }
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary text-balance">
        Songs That Remind Me of You
      </h2>
      <Card className="p-8 shadow-xl">
        <audio ref={audioRef} onEnded={() => setPlayingSongIndex(null)} />

        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all"
            >
              <div className="flex-shrink-0">
                <Button
                  onClick={() => toggleSong(index)}
                  size="icon"
                  variant="ghost"
                  className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30"
                >
                  {playingSongIndex === index ? (
                    <Pause className="w-6 h-6 text-primary" />
                  ) : (
                    <Play className="w-6 h-6 text-primary" />
                  )}
                </Button>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">{song.title}</h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
                <p className="text-sm text-foreground/70 italic mt-1 text-pretty">{song.reason}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-6 text-pretty">
          Every time I hear these songs, I think of you and smile
        </p>
      </Card>
    </div>
  )
}
