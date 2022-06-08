import express from "express";

import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

//@desc     Auth user & get token
//@route    POST /api/user/login
//@access   Public
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
