import { restaurants } from "@/data/mockData";
import { RestaurantCard } from "./RestaurantCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function NearbyRestaurants() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Near You</h2>
            <p className="mt-2 text-muted-foreground">
              Quick delivery from restaurants in your area
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/restaurants">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.slice(0, 8).map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link to="/restaurants">
              View All Restaurants
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
