import User from "../models/users.js";

const UserController = {
  // Other controller methods...

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if the provided password is correct
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // User authentication successful
      // You can generate a token here (e.g., JWT) and send it back as a response
      // Or create a session for the user

      return res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Failed to login user:", error);
      return res.status(500).json({ message: "Failed to login user" });
    }
  },
};

export default UserController;
