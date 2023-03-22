// import { bcrypt, crypto, dotenv, jwt } from "../packages.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { db } from "../connect.js";

dotenv.config();

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [req.body.username, req.body.email, hashedPassword, req.body.name];

    db.query(q, [values], (err) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
    if (!checkPassword) return res.status(400).json("Wrong password or username!");

    const secret = crypto.randomBytes(16).toString(process.env.AUTH_ENCODING); // Generate a random 16-byte secret key
    const token = jwt.sign({ id: data[0].id }, secret); // Use the secret key to sign the JWT

    const { password, ...others } = data[0];

    res
      .cookie(process.env.AUTH_TOKEN, token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie(process.env.AUTH_TOKEN, {
      secure: true,
      sameSite: true,
    })
    .status(200)
    .json("User has been logged out.");
};
