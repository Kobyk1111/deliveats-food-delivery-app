import { Router } from "express";
import { getAllRestaurants } from "../controllers/restaurantsController.js";

const router = Router();

router.post("/restaurants", getAllRestaurants);
export default router;
