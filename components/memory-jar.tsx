"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const memories = [
  {
    id: 1,
    text: "The first time we texted on WhatsApp and started this beautiful journey",
    date: "2021",
  },
  {
    id: 2,
    text: "Our first whole night of texting - talking until sunrise, not wanting the conversation to end",
    date: "January 20, 2023",
  },
  {
    id: 3,
    text: "Our first date - the day I got to see your beautiful smile in person",
    date: "August 28, 2023",
  },
  {
    id: 4,
    text: "The magical moment when you proposed to me at midnight - the best 'yes' I've ever said",
    date: "May 9, 2025 at 00:30",
  },
  {
    id: 5,
    text: "The first time you made me laugh so hard I couldn't breathe",
    date: "A moment I'll never forget",
  },
  {
    id: 6,
    text: "The first time I realized I was falling for you",
    date: "It happened so naturally",
  },
  {
    id: 7,
    text: "Our late-night conversations that became my favorite part of the day",
    date: "Every single one",
  },
  {
    id: 8,
    text: "The first time you called me and I heard your voice - my heart skipped a beat",
    date: "Still does every time",
  },
  {
    id: 9,
    text: "All the inside jokes that only we understand - our own little world",
    date: "Too many to count",
  },
  {
    id: 10,
    text: "The first time you told me about your dreams and I knew I wanted to be part of them",
    date: "A promise I keep",
  },
  {
    id: 11,
    text: "Every 'good morning' and 'goodnight' message that makes the distance feel smaller",
    date: "Daily treasures",
  },
]

export default function MemoryJar() {
  const [selectedMemory, setSelectedMemory] = useState<(typeof memories)[0] | null>(null)

  const pickRandomMemory = () => {
    const randomIndex = Math.floor(Math.random() * memories.length)
    setSelectedMemory(memories[randomIndex])
  }

  return (
    <Card className="p-8 max-w-3xl mx-auto text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance font-[family-name:var(--font-dancing-script)]">
        Our Memory Jar 🫙
      </h2>
      <p className="text-lg text-muted-foreground text-pretty">
        Each memory is a treasure I hold close to my heart - our firsts, our moments, our story
      </p>

      <div className="min-h-48 flex items-center justify-center p-6">
        {selectedMemory ? (
          <div className="space-y-4 animate-fadeInUp">
            <div className="text-sm font-semibold text-accent uppercase tracking-wide">{selectedMemory.date}</div>
            <p className="text-xl md:text-2xl text-foreground text-balance leading-relaxed">"{selectedMemory.text}"</p>
          </div>
        ) : (
          <div className="text-6xl animate-float">💝</div>
        )}
      </div>

      <Button size="lg" onClick={pickRandomMemory} className="w-full md:w-auto">
        Pick a Memory
      </Button>

      <p className="text-sm text-muted-foreground">{memories.length} precious memories stored</p>
    </Card>
  )
}
