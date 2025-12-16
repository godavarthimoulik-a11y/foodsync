"use client"

import { useState } from "react"
import { Search, MapPin, ChevronDown, User, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cities } from "@/lib/data"
import { cn } from "@/lib/utils"

interface NavbarProps {
  selectedCity: string
  onCityChange: (city: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Navbar({ selectedCity, onCityChange, searchQuery, onSearchChange }: NavbarProps) {
  const [isCityOpen, setIsCityOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-xl">🍽️</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:block">Smart Food Finder</span>
          </div>

          {/* City Selector & Search - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
            {/* City Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCityOpen(!isCityOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-l-xl border border-r-0 border-border bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{selectedCity}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground transition-transform duration-200",
                    isCityOpen && "rotate-180",
                  )}
                />
              </button>

              {isCityOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        onCityChange(city)
                        setIsCityOpen(false)
                      }}
                      className={cn(
                        "w-full text-left px-4 py-3 hover:bg-secondary transition-colors",
                        selectedCity === city && "bg-primary/10 text-primary font-medium",
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 rounded-r-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <ShoppingBag className="w-4 h-4" />
              Cart
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Mobile City Selector */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => onCityChange(city)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    selectedCity === city
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 gap-2 bg-transparent">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button className="flex-1 gap-2">
                <ShoppingBag className="w-4 h-4" />
                Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
