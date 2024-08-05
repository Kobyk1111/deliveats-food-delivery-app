import { Router } from "express";
import {
  checkout,
  setOrderDetails,
  setOrder,
  setOrderOfUser,
  getOrderHistory,
  sendOrderToRestaurant,
} from "../controllers/checkoutController.js";

const router = Router();

router.post("/", checkout);
router.post("/setOrderDetails/:id", setOrderDetails);
router.post("/setOrder", setOrder);
router.patch("/setOrder/:id", setOrderOfUser);
router.get("/getOrderHistory/:id", getOrderHistory);
router.post("/send-to-restaurant/:id", sendOrderToRestaurant);

export default router;
