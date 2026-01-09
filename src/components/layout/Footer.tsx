import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold">FeastHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Delicious food from your favorite local restaurants, delivered to your door.
            </p>
          </div>

          {/* Discover */}
          <div className="space-y-4">
            <h4 className="font-semibold">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/restaurants" className="hover:text-foreground transition-colors">Restaurants</Link></li>
              <li><Link to="/cuisines" className="hover:text-foreground transition-colors">Cuisines</Link></li>
              <li><Link to="/offers" className="hover:text-foreground transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Partner */}
          <div className="space-y-4">
            <h4 className="font-semibold">Partner with us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/for-restaurants" className="hover:text-foreground transition-colors">For Restaurants</Link></li>
              <li><Link to="/for-drivers" className="hover:text-foreground transition-colors">Become a Driver</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FeastHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
