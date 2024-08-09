import { Router } from "express";
import {
  registerRestaurant,
  loginRestaurant,
  updateRestaurant,
  getRestaurant,
  updateRestaurantMenu,
  updateOrderStatus,
  checkAuthenticationOfRestaurant,
  getRestaurantOrderHistory,
} from "../controllers/restaurantsController.js";
import { authenticateTokenOfRestaurant } from "../middlewares/authenticateToken.js";

const router = Router();

router.get("/check-auth", authenticateTokenOfRestaurant, checkAuthenticationOfRestaurant);

router.get("/:id", getRestaurant);
router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);
router.post("/update/profile/:id/:section", updateRestaurant);
router.post("/update/menu/:id", updateRestaurantMenu);
router.post("/update-order-status", updateOrderStatus);
router.get("/get-restaurant-order-history/:id", getRestaurantOrderHistory);

export default router;
