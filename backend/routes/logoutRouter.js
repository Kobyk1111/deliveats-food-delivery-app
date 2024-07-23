import { Router } from "express";
import { logoutUser, logoutRestaurant } from "../controllers/logoutController.js";

const router = Router();

router.post("/user", logoutUser);
router.post("/restaurant", logoutRestaurant);

export default router;
