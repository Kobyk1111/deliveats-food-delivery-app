import { Router } from "express";
import {
  registerRestaurant,
  loginRestaurant,
  updateRestaurant,
  getRestaurant,
  updateRestaurantMenu,
} from "../controllers/restaurantsController.js";

const router = Router();

router.get("/:id", getRestaurant);
router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);
router.post("/update/profile/:id/:section", updateRestaurant);
router.post("/update/menu/:id", updateRestaurantMenu);

export default router;
