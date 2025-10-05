"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function RelationshipTimer() {
  const [relationshipTime, setRelationshipTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [proposalTime, setProposalTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const startDate = new Date("2024-05-10T00:00:00")
    const proposalDate = new Date("2025-05-09T00:30:00")

    const updateTimer = () => {
      const now = new Date()

      // Calculate relationship time
      const relationshipDiff = now.getTime() - startDate.getTime()
      const relDays = Math.floor(relationshipDiff / (1000 * 60 * 60 * 24))
      const relHours = Math.floor((relationshipDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const relMinutes = Math.floor((relationshipDiff % (1000 * 60 * 60)) / (1000 * 60))
      const relSeconds = Math.floor((relationshipDiff % (1000 * 60)) / 1000)
      setRelationshipTime({ days: relDays, hours: relHours, minutes: relMinutes, seconds: relSeconds })

      const proposalDiff = now.getTime() - proposalDate.getTime()
      const propDays = Math.floor(proposalDiff / (1000 * 60 * 60 * 24))
      const propHours = Math.floor((proposalDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const propMinutes = Math.floor((proposalDiff % (1000 * 60 * 60)) / (1000 * 60))
      const propSeconds = Math.floor((proposalDiff % (1000 * 60)) / 1000)
      setProposalTime({ days: propDays, hours: propHours, minutes: propMinutes, seconds: propSeconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-8 max-w-3xl mx-auto text-center space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Time Together ⏱️</h2>
        <p className="text-lg text-muted-foreground text-pretty">I hope this stopwatch never stops</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">{relationshipTime.days}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Days</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">{relationshipTime.hours}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Hours</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">{relationshipTime.minutes}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutes</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">{relationshipTime.seconds}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Seconds</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-8 space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">Since You Proposed 💍</h3>
        <p className="text-lg text-muted-foreground text-pretty">
          May 9, 2025 at 00:30 - The moment you made me the happiest
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-rose-500">{proposalTime.days}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Days</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-rose-500">{proposalTime.hours}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Hours</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-rose-500">{proposalTime.minutes}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutes</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-rose-500">{proposalTime.seconds}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Seconds</div>
          </div>
        </div>
      </div>
    </Card>
  )
}
