"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import RelationshipTimer from "@/components/relationship-timer"
import FlowerReveal from "@/components/flower-reveal"
import MemoryJar from "@/components/memory-jar"
import Confetti from "@/components/confetti"
import ReasonsILoveYou from "@/components/reasons-i-love-you"
import PhotoGallery from "@/components/photo-gallery"
import OpenWhenLetters from "@/components/open-when-letters"
import OurPlaylist from "@/components/our-playlist"
import LoveLetter from "@/components/love-letter"
import HeartAnimation from "@/components/heart-animation"
import MusicPlayer from "@/components/music-player"
import { trackEvent } from "@/lib/track-event"

export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [sectionsViewed, setSectionsViewed] = useState<Set<string>>(new Set())
  const [showLoveLetter, setShowLoveLetter] = useState(false)
  const [currentNameIndex, setCurrentNameIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const petNames = ["My Love", "Pragya", "Proton", "Gauri", "", "Rasmalai", "Chaand"]

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentNameIndex((prev) => (prev + 1) % petNames.length)
        setIsAnimating(false)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [petNames.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setSectionsViewed((prev) => new Set(prev).add(sectionId))
              trackEvent("section_viewed", { section: sectionId })
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (sectionsViewed.size >= 7) {
      setTimeout(() => setShowLoveLetter(true), 1000)
    }
  }, [sectionsViewed])

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/20 relative overflow-hidden">
      {showConfetti && <Confetti />}
      <HeartAnimation />
      <MusicPlayer />

      <div className="container mx-auto px-4 py-12 space-y-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-6 animate-fadeInUp" data-section="hero">
          <h1 className="text-5xl md:text-7xl font-bold text-primary animate-heartbeat text-balance font-[family-name:var(--font-dancing-script)]">
            Happy Birthday,{" "}
            <span
              className={`inline-block transition-all duration-300 text-rose-500 ${
                isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
              }`}
              key={currentNameIndex}
            >
              {petNames[currentNameIndex]}!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            To the girl who makes every day brighter, every moment sweeter, and every distance feel a little shorter
          </p>
          <p className="text-lg text-foreground/80 italic max-w-xl mx-auto text-pretty">
            I've created this special place filled with all the love I have for you. Take your time exploring each gift,
            and there's a special surprise waiting at the end...
          </p>
        </section>

        {/* Our Photo */}
        <section className="flex justify-center animate-fadeInUp" data-section="photo">
          <Card className="p-4 max-w-2xl w-full shadow-xl">
            {/* drop aspect-video & overflow-hidden; allow natural height */}
            <div className="relative w-full rounded-lg">
              <Image
                src="/she.jpg"
                alt="Us together"
                width={0} // Next.js will read natural width/height
                height={0}
                sizes="(max-width: 768px) 100vw, 42rem"
                className="w-full h-auto block" // keeps original ratio
              />
            </div>
            <p className="text-center mt-4 text-lg text-muted-foreground italic text-pretty font-[family-name:var(--font-dancing-script)]">
              My favorite view is always you.💖✨
            </p>
          </Card>
        </section>

        {/* Relationship Timer */}
        <section className="animate-fadeInUp" data-section="timer">
          <RelationshipTimer />
        </section>

        {/* Reasons I Love You */}
        <section className="animate-fadeInUp" data-section="reasons">
          <ReasonsILoveYou />
        </section>

        {/* Flower Reveal */}
        <section className="animate-fadeInUp" data-section="flowers">
          <FlowerReveal />
        </section>

        {/* Photo Gallery */}
        <section className="animate-fadeInUp" data-section="gallery">
          <PhotoGallery />
        </section>

        {/* Our Playlist */}
        <section className="animate-fadeInUp" data-section="playlist">
          <OurPlaylist />
        </section>

        {/* Memory Jar */}
        <section className="animate-fadeInUp" data-section="memories">
          <MemoryJar />
        </section>

        {/* Open When Letters */}
        <section className="animate-fadeInUp" data-section="letters">
          <OpenWhenLetters />
        </section>

        {showLoveLetter && (
          <section className="animate-fadeInUp">
            <LoveLetter />
          </section>
        )}

        {!showLoveLetter && (
          <div className="fixed bottom-8 right-8 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm">
            {sectionsViewed.size}/7 gifts discovered
          </div>
        )}
      </div>
    </div>
  )
}
