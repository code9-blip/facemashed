"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Confetti from "./confetti"
import { trackEvent } from "@/lib/track-event"

interface PasswordProtectionProps {
  onSuccess: () => void
}

export default function PasswordProtection({ onSuccess }: PasswordProtectionProps) {
  const [password, setPassword] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    trackEvent("site_opened")
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === "sid") {
      setShowSuccess(true)
      trackEvent("password_entered")
      setTimeout(() => {
        onSuccess()
      }, 3000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 500)
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/20 p-4">
        <Confetti />
        <div className="text-center space-y-8 animate-fadeInUp">
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image src="/celebration.gif" alt="Celebration" fill className="object-cover" unoptimized />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-foreground font-dancing">Oh, look at this girl😯</p>
            <p className="text-2xl md:text-3xl font-semibold text-primary font-dancing">
              Master was right—you are the cutest😘
            </p>
            <p className="text-3xl md:text-4xl font-bold text-accent mt-6 font-dancing">Access granted!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent/20 p-4">
      <div className={`max-w-md w-full space-y-8 text-center ${error ? "animate-shake" : ""}`}>
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 animate-float">
              <Image src="/catwgun.jpg" alt="Guardian Cat" fill className="object-contain" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance font-dancing">Hands up! 🔫</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              My master told me to keep this site exclusive to him and his girlfriend.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground font-dancing">
                Enter the name of your boyfriend to access this
              </label>
              <Input
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type here..."
                className="text-center text-lg bg-card"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Enter
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
