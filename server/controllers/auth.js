import bcrypt from "bcryptjs";
import User from "../models/users.js";

const authController = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Check if the username or email already exists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists" });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Failed to register user:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if the provided password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // Authentication successful
      // Generate a token or create a session and send it back as a response
      // ...

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Failed to login user:", error);
      res.status(500).json({ message: "Failed to login user" });
    }
  },
};

export default authController;
