"use client"

import { Sparkles, TrendingUp, Clock, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Discover 1000+ restaurants near you</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Find Your Next
            <span className="text-primary block mt-2">Favorite Meal</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 text-balance">
            Explore the best restaurants, cafes, and hidden gems in your city. Fresh food, fast delivery, and
            unforgettable taste.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Restaurants</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-accent mb-1">
                <Clock className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold">20min</span>
              </div>
              <p className="text-sm text-muted-foreground">Avg. Delivery</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-chart-3 mb-1">
                <Star className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold">4.8</span>
              </div>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
