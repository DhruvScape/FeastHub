import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedRestaurants } from "@/components/home/FeaturedRestaurants";
import { NearbyRestaurants } from "@/components/home/NearbyRestaurants";
import { CartSidebar } from "@/components/cart/CartSidebar";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <FeaturedRestaurants />
        <NearbyRestaurants />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Index;
