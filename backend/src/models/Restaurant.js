import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: String,
    cuisine: String,
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    deliveryTime: String,
    deliveryFee: { type: Number, default: 0 }, // in INR
    minOrder: { type: Number, default: 0 },    // in INR
    distance: String,
    isOpen: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);
