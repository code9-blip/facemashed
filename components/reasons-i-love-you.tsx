"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const reasons = [
  "Your smile lights up my entire world, even through a screen",
  "The way you laugh at my silly jokes, no matter how bad they are",
  "How you make me feel like the luckiest person alive every single day",
  "Your kindness and the way you care for everyone around you",
  "The way you understand me without me having to say a word",
  "How you make distance feel meaningless with your love",
  "Your strength and determination to chase your dreams",
  "The little things you do that show how much you care",
  "How you make ordinary moments feel extraordinary",
  "Your beautiful heart that's even more stunning than your face",
  "The way you support me through everything",
  "How you make me want to be a better person every day",
  "Your adorable quirks that make you uniquely you",
  "The comfort I feel just knowing you're in my life",
  "How you turn my bad days into good ones with just a message",
  "Your patience with me, especially during tough times",
  "The way you believe in us, no matter the distance",
  "How you make me feel at home, wherever you are",
  "Your beautiful soul that shines through everything you do",
  "Simply because you're you, and that's more than enough",
]

export default function ReasonsILoveYou() {
  const [currentReason, setCurrentReason] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const showNextReason = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentReason((prev) => (prev + 1) % reasons.length)
      setIsFlipping(false)
    }, 300)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary text-balance">
        Reasons Why I Love You
      </h2>
      <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/20 shadow-xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-2 items-center">
            <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" />
            <span className="text-2xl font-semibold text-primary">Reason #{currentReason + 1}</span>
            <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" />
          </div>

          <div
            className={`min-h-32 flex items-center justify-center transition-all duration-300 ${
              isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <p className="text-xl md:text-2xl text-center text-foreground leading-relaxed text-pretty">
              {reasons[currentReason]}
            </p>
          </div>

          <Button onClick={showNextReason} size="lg" className="mt-4">
            Show Me Another Reason
          </Button>

          <p className="text-sm text-muted-foreground text-center text-pretty">
            There are {reasons.length} reasons here, but honestly, I could write a million more
          </p>
        </div>
      </Card>
    </div>
  )
}
