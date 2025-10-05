"use client"

import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const dreams = [
  {
    title: "Travel the World Together",
    description:
      "I want to explore every corner of the world with you by my side, creating memories in every city we visit",
  },
  {
    title: "Build Our Home",
    description: "A cozy place filled with love, laughter, and all our favorite things, where we can grow old together",
  },
  {
    title: "Morning Coffee Rituals",
    description: "Waking up next to you every day, sharing coffee and talking about our dreams for the future",
  },
  {
    title: "Celebrate Every Milestone",
    description: "From the small victories to the big achievements, I want to be there cheering you on through it all",
  },
  {
    title: "Create Our Own Traditions",
    description: "Building a life full of special moments, inside jokes, and traditions that are uniquely ours",
  },
  {
    title: "Grow Old Together",
    description: "Watching sunsets together when we're old and gray, still holding hands and still in love",
  },
]

export default function FutureDreams() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary text-balance">Our Future Together</h2>
      <p className="text-center text-lg text-muted-foreground mb-8 text-pretty">
        Here are all the beautiful things I dream about for us
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {dreams.map((dream, index) => (
          <Card
            key={index}
            className="p-6 bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-2 text-balance">{dream.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{dream.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <p className="text-center text-lg text-foreground/80 mt-8 italic text-pretty">
        Every dream I have for the future has you in it
      </p>
    </div>
  )
}
