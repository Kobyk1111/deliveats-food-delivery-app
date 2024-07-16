import { Router } from "express";

import { registerUser, loginUser, checkAuthentication, updateUser, deleteUser, getUserData } from "../controllers/userController.js";
import authenticateToken from "../middlewares/authenticateToken.js";


const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);
router.get("/getData/:userId", getUserData);

router.use(authenticateToken);
router.get("/check-auth", checkAuthentication);

export default router;
