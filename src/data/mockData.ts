export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  distance: string;
  isOpen: boolean;
  featured: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "pizza", name: "Pizza", icon: "🍕", count: 24 },
  { id: "burgers", name: "Burgers", icon: "🍔", count: 18 },
  { id: "sushi", name: "Sushi", icon: "🍣", count: 12 },
  { id: "mexican", name: "Mexican", icon: "🌮", count: 15 },
  { id: "chinese", name: "Chinese", icon: "🥡", count: 22 },
  { id: "indian", name: "Indian", icon: "🍛", count: 14 },
  { id: "thai", name: "Thai", icon: "🍜", count: 10 },
  { id: "italian", name: "Italian", icon: "🍝", count: 16 },
  { id: "healthy", name: "Healthy", icon: "🥗", count: 20 },
  { id: "desserts", name: "Desserts", icon: "🍰", count: 11 },
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    cuisine: "Italian",
    rating: 4.8,
    reviewCount: 324,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    minOrder: 15,
    distance: "1.2 km",
    isOpen: true,
    featured: true,
  },
  {
    id: "2",
    name: "Sakura Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    cuisine: "Japanese",
    rating: 4.9,
    reviewCount: 512,
    deliveryTime: "30-40 min",
    deliveryFee: 3.99,
    minOrder: 20,
    distance: "2.1 km",
    isOpen: true,
    featured: true,
  },
  {
    id: "3",
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    cuisine: "American",
    rating: 4.6,
    reviewCount: 287,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    minOrder: 12,
    distance: "0.8 km",
    isOpen: true,
    featured: true,
  },
  {
    id: "4",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    cuisine: "Indian",
    rating: 4.7,
    reviewCount: 198,
    deliveryTime: "35-45 min",
    deliveryFee: 2.49,
    minOrder: 18,
    distance: "1.8 km",
    isOpen: true,
    featured: false,
  },
  {
    id: "5",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    cuisine: "Mexican",
    rating: 4.5,
    reviewCount: 156,
    deliveryTime: "25-35 min",
    deliveryFee: 2.29,
    minOrder: 14,
    distance: "1.5 km",
    isOpen: true,
    featured: false,
  },
  {
    id: "6",
    name: "Golden Dragon",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    cuisine: "Chinese",
    rating: 4.4,
    reviewCount: 243,
    deliveryTime: "30-40 min",
    deliveryFee: 2.99,
    minOrder: 16,
    distance: "2.3 km",
    isOpen: true,
    featured: false,
  },
  {
    id: "7",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    cuisine: "Healthy",
    rating: 4.8,
    reviewCount: 178,
    deliveryTime: "20-30 min",
    deliveryFee: 3.49,
    minOrder: 15,
    distance: "1.0 km",
    isOpen: true,
    featured: true,
  },
  {
    id: "8",
    name: "Thai Orchid",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80",
    cuisine: "Thai",
    rating: 4.6,
    reviewCount: 134,
    deliveryTime: "35-45 min",
    deliveryFee: 2.79,
    minOrder: 17,
    distance: "2.0 km",
    isOpen: false,
    featured: false,
  },
];

export const menuItems: Record<string, MenuItem[]> = {
  "1": [
    { id: "1-1", name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil, olive oil", price: 14.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", category: "Pizza", popular: true },
    { id: "1-2", name: "Pepperoni Pizza", description: "Spicy pepperoni, mozzarella, tomato sauce", price: 16.99, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80", category: "Pizza", popular: true },
    { id: "1-3", name: "Quattro Formaggi", description: "Four cheese blend with gorgonzola", price: 17.99, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", category: "Pizza", popular: false },
    { id: "1-4", name: "Spaghetti Carbonara", description: "Creamy egg sauce, pancetta, parmesan", price: 13.99, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80", category: "Pasta", popular: true },
    { id: "1-5", name: "Lasagna", description: "Layers of pasta, beef ragù, béchamel", price: 15.99, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80", category: "Pasta", popular: false },
    { id: "1-6", name: "Tiramisu", description: "Coffee-soaked ladyfingers, mascarpone cream", price: 7.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", category: "Desserts", popular: true },
    { id: "1-7", name: "Bruschetta", description: "Grilled bread, tomatoes, garlic, basil", price: 8.99, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80", category: "Starters", popular: false },
    { id: "1-8", name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, balsamic", price: 10.99, image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80", category: "Starters", popular: false },
  ],
  "2": [
    { id: "2-1", name: "Salmon Nigiri (6pc)", description: "Fresh Atlantic salmon over seasoned rice", price: 12.99, image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&q=80", category: "Nigiri", popular: true },
    { id: "2-2", name: "Dragon Roll", description: "Eel, avocado, cucumber with special sauce", price: 16.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80", category: "Rolls", popular: true },
    { id: "2-3", name: "Spicy Tuna Roll", description: "Fresh tuna, spicy mayo, cucumber", price: 13.99, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80", category: "Rolls", popular: true },
    { id: "2-4", name: "Miso Soup", description: "Traditional Japanese soup with tofu", price: 4.99, image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=400&q=80", category: "Soups", popular: false },
    { id: "2-5", name: "Edamame", description: "Steamed soybeans with sea salt", price: 5.99, image: "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=400&q=80", category: "Starters", popular: false },
    { id: "2-6", name: "Sashimi Platter", description: "Chef's selection of fresh fish", price: 24.99, image: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=400&q=80", category: "Sashimi", popular: true },
  ],
  "3": [
    { id: "3-1", name: "Classic Cheeseburger", description: "Angus beef, cheddar, lettuce, tomato, special sauce", price: 11.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", category: "Burgers", popular: true },
    { id: "3-2", name: "Bacon BBQ Burger", description: "Crispy bacon, BBQ sauce, onion rings", price: 13.99, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80", category: "Burgers", popular: true },
    { id: "3-3", name: "Truffle Fries", description: "Crispy fries with truffle oil and parmesan", price: 6.99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80", category: "Sides", popular: true },
    { id: "3-4", name: "Onion Rings", description: "Beer-battered crispy onion rings", price: 5.99, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80", category: "Sides", popular: false },
    { id: "3-5", name: "Milkshake", description: "Creamy vanilla, chocolate, or strawberry", price: 5.99, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", category: "Drinks", popular: false },
  ],
};

// Generate menu items for other restaurants
["4", "5", "6", "7", "8"].forEach((id) => {
  menuItems[id] = [
    { id: `${id}-1`, name: "House Special", description: "Chef's signature dish with premium ingredients", price: 18.99, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80", category: "Specials", popular: true },
    { id: `${id}-2`, name: "Classic Favorite", description: "Traditional recipe loved by all", price: 14.99, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", category: "Main Course", popular: true },
    { id: `${id}-3`, name: "Light Starter", description: "Perfect appetizer to begin your meal", price: 8.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80", category: "Starters", popular: false },
    { id: `${id}-4`, name: "Sweet Ending", description: "Delicious dessert to complete your experience", price: 7.99, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80", category: "Desserts", popular: false },
  ];
});
