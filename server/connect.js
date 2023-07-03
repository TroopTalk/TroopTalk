import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = 'mongodb+srv://root:root@trooptalk.7epqmov.mongodb.net/';

export const connectDB = () => {
  console.log("Connecting to MongoDB");
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));
};
