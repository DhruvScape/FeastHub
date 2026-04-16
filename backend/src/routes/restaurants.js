import { Router } from "express";
import {
  listRestaurants,
  getRestaurant,
  getRestaurantMenu,
} from "../controllers/restaurantController.js";

const router = Router();

router.get("/", listRestaurants);
router.get("/:id", getRestaurant);
router.get("/:id/menu", getRestaurantMenu);

export default router;
