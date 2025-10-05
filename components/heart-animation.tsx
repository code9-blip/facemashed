"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface FloatingHeart {
  id: number
  left: number
  delay: number
  duration: number
}

export default function HeartAnimation() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const newHearts: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-floatUp opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart className="w-6 h-6 text-primary fill-primary" />
        </div>
      ))}
    </div>
  )
}
