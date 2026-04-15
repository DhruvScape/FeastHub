import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
}

export function MenuItemCard({ item, restaurantId, restaurantName }: MenuItemCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group flex gap-4 rounded-xl bg-card p-4 transition-all hover:shadow-md">
      <div className="flex flex-1 flex-col">
        <div className="flex items-start gap-2">
          <h4 className="font-medium">{item.name}</h4>
          {item.popular && (
            <Badge variant="secondary" className="text-xs">Popular</Badge>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
        <p className="mt-auto pt-2 font-semibold">₹{item.price}</p>
      </div>

      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-lg object-cover"
        />
        <Button
          size="icon"
          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-md"
          onClick={() => addItem(item, restaurantId, restaurantName)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
