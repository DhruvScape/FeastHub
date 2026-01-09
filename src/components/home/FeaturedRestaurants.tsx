import { restaurants } from "@/data/mockData";
import { RestaurantCard } from "./RestaurantCard";

export function FeaturedRestaurants() {
  const featured = restaurants.filter((r) => r.featured);

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold md:text-3xl">Featured Restaurants</h2>
        <p className="mt-2 text-muted-foreground">
          Handpicked favorites with outstanding reviews
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}
