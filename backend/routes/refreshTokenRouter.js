import { Router } from "express";
import { authenticateToken, authenticateTokenOfRestaurant } from "../middlewares/authenticateToken.js";

const router = Router();

router.get("/", authenticateToken);
router.get("/restaurant-token", authenticateTokenOfRestaurant);

export default router;
