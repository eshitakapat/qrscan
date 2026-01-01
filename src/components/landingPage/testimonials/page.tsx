"use client"

import { useEffect, useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Operations Manager",
      company: "LogiCore Solutions",
      quote:
        "Storelytics completely changed how we manage inventory. Forecasting is accurate, alerts are timely, and decisions are faster.",
    },
    {
      name: "Neha Sharma",
      role: "Supply Chain Lead",
      company: "UrbanMart",
      quote:
        "The AI insights helped us reduce stockouts significantly. The system feels intuitive and reliable.",
    },
    {
      name: "Rohit Verma",
      role: "Founder",
      company: "WareIQ",
      quote:
        "From real-time tracking to anomaly detection, Storelytics gives us confidence in every inventory decision.",
    },
  ]

  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(prev =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrent(prev =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-4xl font-semibold text-foreground">
          Trusted by Growing Teams
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Hear from teams using Storelytics to simplify inventory management
          and make smarter decisions.
        </p>

        {/* Carousel */}
        <div className="relative mt-16 overflow-hidden">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 flex items-center justify-center rounded-full
              bg-secondary text-primary hover:opacity-80 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 flex items-center justify-center rounded-full
              bg-secondary text-primary hover:opacity-80 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>

          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center px-10"
              >
                <div className="bg-card rounded-xl p-8 max-w-xl text-left shadow-sm border border-border">
                  <Quote className="h-6 w-6 text-secondary mb-4" />

                  <p className="text-sm text-foreground/90 leading-relaxed">
                    “{item.quote}”
                  </p>

                  <div className="h-px bg-border my-6" />

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition ${
                current === index
                  ? "bg-primary"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
