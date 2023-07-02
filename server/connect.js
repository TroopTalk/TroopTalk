import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = () => {
  console.log("Connecting to mongoDB");
  mongoose.connect(uri);
};
