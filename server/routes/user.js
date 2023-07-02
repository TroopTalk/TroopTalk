import UserController from "../controllers/users.js";
import express from "express";

const router = express.Router();
router.post("/login", UserController.loginUser);

export default router;
