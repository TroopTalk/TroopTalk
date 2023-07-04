import { connectDB } from "./connect.js";
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// * Routes
import authRouter from "./routes/auth.js";

// * Server config
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

// * Middlewares
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS.split(","),
    credentials: true,
  }),
);

// * Router mounts
app.use(process.env.AUTH_ROUTE, authRouter);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB successfully!");
    app.listen(process.env.SERVER_PORT, () => {
      console.log("Server is UP!");
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
