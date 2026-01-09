import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Delicious food,{" "}
            <span className="text-primary">delivered fast</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Order from the best local restaurants with easy, on-demand delivery.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <div className="relative flex-1 max-w-md">
              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Enter your delivery address"
                className="h-12 pl-12 pr-4 text-base bg-background border shadow-sm"
              />
            </div>
            <Button size="lg" className="h-12 px-8">
              <Search className="mr-2 h-5 w-5" />
              Find Food
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍕</span>
              <span><strong className="text-foreground">500+</strong> Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span><strong className="text-foreground">4.8</strong> Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span><strong className="text-foreground">25 min</strong> Avg Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-1/2 -right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -top-1/2 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
