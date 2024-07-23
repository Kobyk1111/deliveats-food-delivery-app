import { Router } from "express";
import { registerRestaurant, loginRestaurant } from "../controllers/restaurantsController.js";

const router = Router();

router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);

export default router;
