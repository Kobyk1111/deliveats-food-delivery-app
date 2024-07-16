import { Router } from "express";
import { registerUser, loginUser, checkAuthentication } from "../controllers/userController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.use(authenticateToken);
router.get("/check-auth", checkAuthentication);

export default router;
