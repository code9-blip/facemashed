"use client"

import { useEffect, useState } from "react"

export default function Confetti() {
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{
      id: number
      left: number
      delay: number
      duration: number
      color: string
    }>
  >([])

  useEffect(() => {
    const colors = ["#f8b4d9", "#ffd4a3", "#ffb6c1", "#ffc0cb", "#ff69b4"]
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setConfettiPieces(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${piece.left}%`,
            top: "-10px",
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.duration}s linear forwards`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
