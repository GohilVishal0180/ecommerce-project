"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/placeholder.svg?height=600&width=1600",
    title: "Next Generation Technology",
    description: "Experience the future of digital innovation",
    cta: "Shop Now",
    color: "blue",
  },
  {
    image: "/placeholder.svg?height=600&width=1600",
    title: "Smart Home Devices",
    description: "Transform your home with smart technology",
    cta: "Discover More",
    color: "green",
  },
  {
    image: "/placeholder.svg?height=600&width=1600",
    title: "Premium Gadgets",
    description: "Explore our collection of premium devices",
    cta: "View Collection",
    color: "purple",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 max-w-3xl px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{slide.title}</h2>
              <p className="text-lg sm:text-xl md:text-2xl">{slide.description}</p>
              <Button size="lg" className="mt-4">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${current === index ? "w-8 bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

