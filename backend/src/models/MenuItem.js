import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true }, // in INR
    image: String,
    category: String,
    popular: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", menuItemSchema);
