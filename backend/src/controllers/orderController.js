import Order from "../models/Order.js";

export async function createOrder(req, res) {
  const { restaurantId, items, subtotal, deliveryFee, total } = req.body;
  if (!restaurantId || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "restaurantId and items are required" });
  }

  const order = await Order.create({
    userId: req.user.id,
    restaurantId,
    items,
    subtotal,
    deliveryFee,
    total,
  });

  res.status(201).json({ order });
}

export async function listMyOrders(req, res) {
  const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json({ orders });
}
