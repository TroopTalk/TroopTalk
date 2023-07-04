import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

export const connectDB = () => {
  console.log("Connecting to MongoDB");
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));
};