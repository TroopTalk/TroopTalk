import express from "express";
import cors from "cors";
import mysql from "mysql";
const app = express();
app.use(express.json());

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.listen(3001, () => {
  console.log("Server running!");
});
