"use client"

import type { Restaurant } from "@/lib/data"
import { RestaurantCard } from "./restaurant-card"
import { SearchX } from "lucide-react"

interface RestaurantGridProps {
  restaurants: Restaurant[]
  selectedCity: string
}

export function RestaurantGrid({ restaurants, selectedCity }: RestaurantGridProps) {
  if (restaurants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
          <SearchX className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">No restaurants found</h3>
        <p className="text-muted-foreground max-w-sm">
          Try adjusting your filters or search query to find more options.
        </p>
      </div>
    )
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {selectedCity === "All Cities" ? "All Restaurants" : `Restaurants in ${selectedCity}`}
            </h2>
            <p className="text-muted-foreground mt-1">
              {restaurants.length} restaurant{restaurants.length !== 1 ? "s" : ""} available
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  )
}
