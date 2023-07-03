import { connectDB } from "./connect.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import your authentication router
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

// Mount the authentication router
app.use("/api/auth", authRouter);

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB successfully!");
    app.listen(3333, () => {
      console.log("Server is UP!");
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
