import { registerUser, loginUser, logoutUser } from "../controllers/auth.js";
import express from "express";

const authRouter = express.Router();

// User registration route
authRouter.post("/register", registerUser);

// User login route
authRouter.post("/login", loginUser);

// User Logout
authRouter.post("/logout", logoutUser);

export default authRouter;
