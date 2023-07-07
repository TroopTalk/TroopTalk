import { bcrypt, jwt } from "../packages.js";
import User from "../models/users.js";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, serviceBranch, username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username or email already exists" });
    }

    // Generate a random salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      serviceBranch,
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Failed to register user:", error);
    res.status(500).json({ message: "Failed to register user", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email }).maxTimeMS(30000);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the provided password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Return the user object along with the token
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Failed to login user:", error);
    res.status(500).json({ message: "Failed to login user" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    // Perform any necessary logout operations
    // For example, if using sessions, you can clear the session data:
    req.session = null;

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Failed to logout user:", error);
    res.status(500).json({ message: "Failed to logout user" });
  }
};
