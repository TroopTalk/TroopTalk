import { connectDB } from "./connect.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CORS_ORG,
  }),
);

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
