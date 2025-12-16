"use client"

import { cuisineFilters } from "@/lib/data"
import { cn } from "@/lib/utils"

interface CuisineFilterProps {
  selectedCuisine: string
  onCuisineChange: (cuisine: string) => void
}

const cuisineIcons: Record<string, string> = {
  All: "🍴",
  "North Indian": "🍛",
  "South Indian": "🥘",
  Chinese: "🥡",
  Italian: "🍝",
  Mexican: "🌮",
  Japanese: "🍣",
  Continental: "🥗",
  Biryani: "🍚",
  Pizza: "🍕",
  Cafe: "☕",
}

export function CuisineFilter({ selectedCuisine, onCuisineChange }: CuisineFilterProps) {
  return (
    <section className="py-6 bg-background sticky top-16 lg:top-20 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {cuisineFilters.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => onCuisineChange(cuisine)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                selectedCuisine === cuisine
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-102",
              )}
            >
              <span className="text-base">{cuisineIcons[cuisine] || "🍽️"}</span>
              {cuisine}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
