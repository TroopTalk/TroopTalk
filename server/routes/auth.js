import authController from "../controllers/auth.js";
import express from "express";

const authRouter = express.Router();

// User registration route
authRouter.post("/register", authController.registerUser);

// User login route
authRouter.post("/login", authController.loginUser);

// User Logout route
authRouter.post("/logout", authController.logoutUser);

export default authRouter;
