"use client"

import { useState } from "react"
import { Star, Clock, ChevronDown, ChevronUp, Award } from "lucide-react"
import type { Restaurant } from "@/lib/data"
import { cn } from "@/lib/utils"

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {restaurant.isPromoted && (
            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Promoted
            </span>
          )}
          {restaurant.discount && (
            <span className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
              {restaurant.discount}
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-card/95 backdrop-blur-sm rounded-lg">
          <Star className="w-4 h-4 text-chart-3 fill-chart-3" />
          <span className="font-bold text-foreground">{restaurant.rating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Restaurant Name & Cuisine */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{restaurant.cuisine.join(" • ")}</p>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-medium">₹{restaurant.priceForTwo}</span>
            <span>for two</span>
          </div>
        </div>

        {/* Menu Preview Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-secondary/50 hover:bg-secondary rounded-xl transition-colors"
        >
          <span className="font-medium text-foreground">View Menu</span>
          {isMenuOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </button>

        {/* Menu Items */}
        {isMenuOpen && (
          <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {restaurant.menuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "w-4 h-4 rounded flex items-center justify-center border-2",
                        item.isVeg ? "border-accent" : "border-destructive",
                      )}
                    >
                      <span className={cn("w-2 h-2 rounded-full", item.isVeg ? "bg-accent" : "bg-destructive")} />
                    </span>
                    <span className="font-medium text-foreground">{item.name}</span>
                    {item.isBestseller && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-chart-3/10 text-chart-3 text-xs font-medium rounded-full">
                        <Award className="w-3 h-3" />
                        Bestseller
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{item.description}</p>
                </div>
                <span className="font-semibold text-foreground ml-4">₹{item.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
