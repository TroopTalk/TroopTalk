import express from "express";
import authController from "../controllers/auth.js";

const router = express.Router();

// User registration route
router.post("/register", authController.registerUser);

// User login route
router.post("/login", authController.loginUser);

export default router;
