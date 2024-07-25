import { Router } from "express";
import { registerRestaurant, loginRestaurant, updateRestaurant } from "../controllers/restaurantsController.js";

const router = Router();

router.post("/register", registerRestaurant);
router.post("/login", loginRestaurant);
router.post("/update/:id/:section", updateRestaurant);

export default router;
