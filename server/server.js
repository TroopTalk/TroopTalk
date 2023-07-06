// * Route imports
import authRouter from "./routes/auth.js";

// * Dep Imports
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// * express as const
const app = express();

// * dotenv config
dotenv.config();

// * Server config
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cookieParser());

// * Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

// * Router mounts
app.use("/api/auth", authRouter);

// * Database and Server connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on port: ${process.env.PORT}`)))
  .catch((error) => console.log(error.message));
