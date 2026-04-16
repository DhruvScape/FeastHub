import Restaurant from "../models/Restaurant.js";
import MenuItem from "../models/MenuItem.js";

export async function listRestaurants(_req, res) {
  const restaurants = await Restaurant.find().sort({ featured: -1, rating: -1 });
  res.json({ restaurants });
}

export async function getRestaurant(req, res) {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
  res.json({ restaurant });
}

export async function getRestaurantMenu(req, res) {
  const items = await MenuItem.find({ restaurantId: req.params.id });
  res.json({ items });
}
