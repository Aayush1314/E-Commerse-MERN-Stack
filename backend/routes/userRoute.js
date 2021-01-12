import express from "express";
import { authUser, registerUser , userProfile} from '../controllers/userController.js'
import { routeAuth } from '../middleware/authMiddleware.js'
const router = express.Router();

router.post("/", registerUser )
router.post("/login", authUser )
router.get("/profile", routeAuth , userProfile )

export default router;
