import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin, Phone, Info } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { MenuItemCard } from "@/components/restaurant/MenuItemCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { restaurants, menuItems } from "@/data/mockData";

export default function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const items = menuItems[id || ""] || [];

  if (!restaurant) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container flex-1 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Restaurant not found</h1>
            <p className="mt-2 text-muted-foreground">
              The restaurant you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-4">
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Group items by category
  const categories = [...new Set(items.map((item) => item.category))];
  const popularItems = items.filter((item) => item.popular);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

          {/* Back button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-4"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Restaurant Info */}
        <div className="container -mt-20 relative z-10">
          <div className="rounded-xl bg-card p-6 shadow-lg">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold md:text-3xl">
                    {restaurant.name}
                  </h1>
                  {!restaurant.isOpen && (
                    <Badge variant="secondary">Closed</Badge>
                  )}
                </div>
                <p className="mt-1 text-muted-foreground">{restaurant.cuisine}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-success">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{restaurant.rating}</span>
                    <span className="text-muted-foreground">
                      ({restaurant.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
              <span>₹{restaurant.deliveryFee} delivery</span>
              <span>•</span>
              <span>₹{restaurant.minOrder} minimum order</span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="container py-8">
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="mb-6 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
              <TabsTrigger
                value="popular"
                className="rounded-full border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Popular
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="popular" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2">
                {popularItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name}
                  />
                ))}
              </div>
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  {items
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        restaurantId={restaurant.id}
                        restaurantName={restaurant.name}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
      <CartSidebar />
    </div>
  );
}
