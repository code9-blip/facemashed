"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function LoveLetter() {
  const [sliderValue, setSliderValue] = useState(50)
  const [showLetter, setShowLetter] = useState(false)

  const getMessage = () => {
    if (sliderValue < 10) {
      return "Are you crazy?! 😱 Move that slider right now!"
    } else if (sliderValue < 25) {
      return "Really? That's all? 🥺 I think you can do better..."
    } else if (sliderValue < 40) {
      return "Getting warmer... but still not quite there! 💕"
    } else if (sliderValue < 60) {
      return "Hmm, we're halfway there! Keep going! 💗"
    } else if (sliderValue < 75) {
      return "Now we're talking! But I love you even more! 💖"
    } else if (sliderValue < 90) {
      return "So close! You're almost there, my love! 💝"
    } else if (sliderValue < 99) {
      return "Almost perfect! Just a little bit more! 💞"
    } else {
      if (!showLetter) {
        setShowLetter(true)
      }
      return "Yes, you are right! That's exactly how much I love you! 💕✨"
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!showLetter ? (
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-2 animate-heartbeat">
            <Heart className="w-12 h-12 text-primary fill-primary" />
            <Heart className="w-12 h-12 text-primary fill-primary" />
            <Heart className="w-12 h-12 text-primary fill-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance font-[family-name:var(--font-dancing-script)]">
            One More Thing...
          </h2>
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/30 shadow-xl">
            <div className="space-y-8">
              <p className="text-2xl font-semibold text-foreground text-balance font-[family-name:var(--font-dancing-script)]">
                How much do you think I love you?
              </p>

              <div className="space-y-6">
                <div className="relative pt-8 pb-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-muted via-primary/30 to-primary rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-background
                      [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110
                      [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:hover:scale-110"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Not at all</span>
                    <span>To infinity! 💕</span>
                  </div>
                </div>

                <div className="min-h-[80px] flex items-center justify-center">
                  <p className="text-xl md:text-2xl font-semibold text-primary text-balance animate-fadeIn font-[family-name:var(--font-dancing-script)]">
                    {getMessage()}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <div className="animate-fadeInUp">
          <div className="text-center mb-8 space-y-4">
            <div className="flex justify-center gap-2 animate-heartbeat">
              <Heart className="w-12 h-12 text-primary fill-primary" />
              <Heart className="w-12 h-12 text-primary fill-primary" />
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance font-[family-name:var(--font-dancing-script)]">
              A Letter From My Heart
            </h2>
            <p className="text-lg text-muted-foreground italic text-pretty">
              You found it! Here's the most important gift of all...
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/30 shadow-2xl">
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-pretty font-[family-name:var(--font-dancing-script)] text-2xl">My Dearest Love,</p>

              <p className="text-pretty">
                As I sit here writing this, my heart is overflowing with emotions that I struggle to put into words. But
                for you, I'll try, because you deserve to know just how deeply you've changed my life.
              </p>

              <p className="text-pretty">
                From the moment you came into my life, everything changed. The world became brighter, colors more vivid,
                and suddenly, every song on the radio seemed to be about us. You didn't just walk into my life - you
                danced into it, bringing light to corners I didn't even know were dark.
              </p>

              <p className="text-pretty">
                Loving you across the distance hasn't always been easy, but it has taught me something beautiful: true
                love isn't measured in miles, but in moments. Every video call, every text message, every "good morning"
                and "goodnight" - they're all threads weaving together the tapestry of our love story.
              </p>

              <p className="text-pretty">
                You are my best friend, my confidant, my partner in crime, and my greatest adventure. You make me laugh
                until my stomach hurts, you listen to my rambles about nothing and everything, and you love me even when
                I'm being difficult (which, let's be honest, is more often than I'd like to admit).
              </p>

              <p className="text-pretty">
                I want you to know that every day I wake up grateful that you chose me. Out of all the people in this
                vast world, you chose to give your heart to me, and I promise to treasure it, protect it, and love it
                for as long as I live.
              </p>

              <p className="text-pretty">
                This birthday is just one of many we'll celebrate together. I dream of the day when I won't have to
                celebrate through a screen, when I can hold you close and whisper "happy birthday" in your ear. Until
                then, know that my love for you grows stronger with each passing day.
              </p>

              <p className="text-pretty">
                Thank you for being patient with me, for believing in us, and for making this long-distance journey
                worthwhile. Thank you for your beautiful smile, your infectious laugh, and your incredible heart. Thank
                you for being exactly who you are.
              </p>

              <p className="text-pretty">
                Happy Birthday, my love. Here's to you, to us, and to all the beautiful tomorrows we'll share together.
              </p>

              <div className="pt-8 space-y-2">
                <p className="text-pretty">Forever and always yours,</p>
                <p className="text-2xl font-bold text-primary font-[family-name:var(--font-dancing-script)]">Sid ❤️</p>
              </div>

              <div className="pt-8 border-t border-primary/20 text-center">
                <p className="text-xl font-semibold text-primary italic text-balance font-[family-name:var(--font-dancing-script)]">
                  P.S. I love you more than all the stars in the sky, and that's a lot of love ✨
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
