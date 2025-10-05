"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, X } from "lucide-react"

const letters = [
  {
    title: "Open When You Miss Me",
    content:
      "I miss you too, more than words can say. Close your eyes and imagine I'm right there with you, holding you close. Remember that no matter the distance, my heart is always with you. Look at our photos, read our messages, and know that every moment apart is one moment closer to being together again. I love you endlessly.",
  },
  {
    title: "Open When You're Sad",
    content:
      "My love, I wish I could be there to wipe away your tears and hold you tight. Remember that it's okay to not be okay sometimes. You're the strongest person I know, and this feeling will pass. Think of all the beautiful moments we've shared and all the amazing ones still to come. You're never alone - I'm always here for you, just a message away. I love you so much.",
  },
  {
    title: "Open When You Can't Sleep",
    content:
      "Hey sleepyhead, I know your mind is racing right now. Take a deep breath with me. Imagine we're lying together under the stars, and I'm holding your hand. Feel the warmth and comfort of knowing you're loved beyond measure. Tomorrow is a new day full of possibilities. Close your eyes and dream of us. Sweet dreams, my love.",
  },
  {
    title: "Open When You Need Motivation",
    content:
      "You are absolutely incredible, and I believe in you with every fiber of my being. Remember why you started and how far you've already come. You have the strength, intelligence, and determination to achieve anything you set your mind to. I'm so proud of you, and I'll be here celebrating every victory with you. You've got this, my love!",
  },
  {
    title: "Open When You're Happy",
    content:
      "Your happiness is my happiness! I'm so glad you're having a wonderful moment. You deserve all the joy in the world and so much more. Your smile is the most beautiful thing I've ever seen, and knowing you're happy makes my heart soar. Keep shining bright, my love. I can't wait to hear all about what made you smile today!",
  },
  {
    title: "Open When You Need a Laugh",
    content:
      "Remember that time I tried to be smooth and totally embarrassed myself? Or when we stayed up all night talking about the most random things? You make even the silliest moments special. Here's a reminder: you're stuck with my terrible jokes forever! Why did the scarecrow win an award? Because he was outstanding in his field! (I know, I know, I'm hilarious 😄) Love you!",
  },
]

export default function OpenWhenLetters() {
  const [openLetter, setOpenLetter] = useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary text-balance">
        Open When... Letters
      </h2>
      <p className="text-center text-lg text-muted-foreground mb-8 text-pretty">
        For those moments when you need a little extra love from me
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {letters.map((letter, index) => (
          <Card
            key={index}
            className="p-6 cursor-pointer hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 hover:border-primary/40"
            onClick={() => setOpenLetter(index)}
          >
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg text-foreground text-balance">{letter.title}</h3>
            </div>
          </Card>
        ))}
      </div>

      {openLetter !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <Card className="max-w-2xl w-full p-8 relative animate-scaleIn">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setOpenLetter(null)}>
              <X className="w-5 h-5" />
            </Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary text-balance">{letters[openLetter].title}</h3>
              </div>

              <p className="text-lg leading-relaxed text-foreground text-pretty">{letters[openLetter].content}</p>

              <div className="pt-6 border-t border-border">
                <p className="text-right text-muted-foreground italic">With all my love, Sid ❤️</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
