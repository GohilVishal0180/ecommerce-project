"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DealOfDay() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1
        if (totalSeconds <= 0) {
          clearInterval(timer)
          return prev
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Deal of the Day</h2>
            <p className="text-gray-600 mb-6">Get up to 50% off on the latest smartphones. Limited time offer!</p>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
            <Button size="lg">Shop Now</Button>
          </div>
          <div className="flex-1">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Deal of the Day"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold">Latest Smartphone</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-blue-600">$499</span>
                    <span className="text-gray-500 line-through">$999</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

