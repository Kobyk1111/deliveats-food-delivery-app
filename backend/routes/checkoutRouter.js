import { Router } from "express";
import { checkout, setOrderDetails } from "../controllers/checkoutController.js";

const router = Router();

router.post("/", checkout);
router.post("/setOrderDetails/:id", setOrderDetails);

export default router;
