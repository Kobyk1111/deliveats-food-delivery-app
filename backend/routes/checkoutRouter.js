import { Router } from "express";
import { checkout, getOrderDetails } from "../controllers/checkoutController.js";

const router = Router();

router.post("/", checkout);
router.post("/getOrderDetails/:id", getOrderDetails);

export default router;
