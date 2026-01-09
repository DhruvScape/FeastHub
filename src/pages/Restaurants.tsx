import { useState } from "react";
import { Search, SlidersHorizontal, Star, Clock, DollarSign } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { RestaurantCard } from "@/components/home/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { restaurants, categories } from "@/data/mockData";

export default function Restaurants() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("recommended");

  const filteredRestaurants = restaurants
    .filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCuisine = !selectedCuisine || r.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase());
      return matchesSearch && matchesCuisine;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "delivery-time":
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        case "delivery-fee":
          return a.deliveryFee - b.deliveryFee;
        default:
          return b.featured ? 1 : -1;
      }
    });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold">All Restaurants</h1>
            <p className="mt-2 text-muted-foreground">
              {restaurants.length} restaurants available for delivery
            </p>

            {/* Search & Filters */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search restaurants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="rating">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" /> Highest Rated
                    </div>
                  </SelectItem>
                  <SelectItem value="delivery-time">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Fastest Delivery
                    </div>
                  </SelectItem>
                  <SelectItem value="delivery-fee">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" /> Lowest Fee
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cuisine Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant={selectedCuisine === null ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCuisine(null)}
              >
                All
              </Button>
              {categories.slice(0, 8).map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCuisine === category.name ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSelectedCuisine(
                    selectedCuisine === category.name ? null : category.name
                  )}
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="container py-8">
          {filteredRestaurants.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg font-medium">No restaurants found</p>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or filters
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCuisine(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-muted-foreground">
                {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? "s" : ""} found
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
      <CartSidebar />
    </div>
  );
}
