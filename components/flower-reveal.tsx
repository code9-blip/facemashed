"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FlowerReveal() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <Card className="p-8 max-w-3xl mx-auto text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">A Special Gift for You 🎁</h2>

      {!isRevealed ? (
        <div className="space-y-6">
          <div
            className="relative w-full h-96 rounded-lg overflow-hidden cursor-pointer backdrop-blur-2xl bg-secondary/50 flex items-center justify-center"
            onClick={() => setIsRevealed(true)}
          >
            <div className="text-center space-y-4">
              <div className="text-6xl animate-float">🎁</div>
              <p className="text-xl font-semibold text-foreground">Tap to reveal your surprise</p>
            </div>
          </div>
          <Button size="lg" onClick={() => setIsRevealed(true)} className="w-full md:w-auto">
            Open Gift
          </Button>
        </div>
      ) : (
        <div className="space-y-6 animate-fadeInUp">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image src="/cutecat.jpg" alt="Cat with flowers" fill className="object-contain animate-float" />
          </div>

          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-primary text-balance">
              Here are the flowers for you, love 💐
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              I always wanted to give you flowers but never got the chance. These virtual flowers are easier to hide,
              will stay fresh forever, and will always be with you.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}
