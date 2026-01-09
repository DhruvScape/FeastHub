import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Restaurant } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className={cn(
        "group block overflow-hidden rounded-xl bg-card transition-all hover:shadow-lg",
        !restaurant.isOpen && "opacity-75"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {restaurant.featured && (
          <Badge className="absolute left-3 top-3 bg-primary">Featured</Badge>
        )}
        {!restaurant.isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <Badge variant="secondary">Currently Closed</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center gap-1 rounded-md bg-success/10 px-2 py-0.5 text-success">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">{restaurant.cuisine}</p>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{restaurant.distance}</span>
          </div>
        </div>

        <div className="mt-2 text-sm text-muted-foreground">
          ${restaurant.deliveryFee.toFixed(2)} delivery · ${restaurant.minOrder} min order
        </div>
      </div>
    </Link>
  );
}
