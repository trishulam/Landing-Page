"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20at%2012.09.39%E2%80%AFAM-IwTlxsxs9nHsJKbnIJnavY2OYYfycV.png",
    alt: "Vessel Match Global Routes Dashboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20at%2012.09.47%E2%80%AFAM-pTgtl8hKyAcznxhGAUdQonGKzeLdPB.png",
    alt: "Vessel Match Analytics Dashboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20at%2012.12.57%E2%80%AFAM-VXrAr1CdUhjAn263oZ6JeLp4yAS9vb.png",
    alt: "Vessel Match Detailed Information View",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20at%2012.11.53%E2%80%AFAM-hUyOx7ZKsV1qKjoF1INSPklovUDEEA.png",
    alt: "Vessel Match Market Analytics",
  },
]

export default function DashboardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const previousSlide = () => {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <div className="relative w-full aspect-[2880/1640] max-w-full rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 group">
      {/* Floating effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Depth effect */}
      <div className="absolute inset-0 shadow-inner" />

      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-1 md:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-white w-3 md:w-4" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
    </div>
  )
}

