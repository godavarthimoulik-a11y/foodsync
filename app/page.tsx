"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CuisineFilter } from "@/components/cuisine-filter"
import { RestaurantGrid } from "@/components/restaurant-grid"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"
import { restaurants } from "@/lib/data"

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      // City filter
      if (selectedCity !== "All Cities" && restaurant.city !== selectedCity) {
        return false
      }

      // Cuisine filter
      if (selectedCuisine !== "All" && !restaurant.cuisine.includes(selectedCuisine)) {
        return false
      }

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = restaurant.name.toLowerCase().includes(query)
        const matchesCuisine = restaurant.cuisine.some((c) => c.toLowerCase().includes(query))
        const matchesMenu = restaurant.menuItems.some((item) => item.name.toLowerCase().includes(query))

        if (!matchesName && !matchesCuisine && !matchesMenu) {
          return false
        }
      }

      return true
    })
  }, [selectedCity, selectedCuisine, searchQuery])

  return (
    <main className="min-h-screen bg-background">
      <Navbar
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <HeroSection />
      <CuisineFilter selectedCuisine={selectedCuisine} onCuisineChange={setSelectedCuisine} />
      <RestaurantGrid restaurants={filteredRestaurants} selectedCity={selectedCity} />
      <Footer />
      <Chatbot />
    </main>
  )
}
