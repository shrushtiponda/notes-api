const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("All fields are required");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error(
        "Password must be at least 6 characters"
      );
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      res.status(400);
      throw new Error("Invalid email format");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400);
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400);
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400);
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ token });

  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// UPLOAD PROFILE PICTURE
const uploadProfilePic = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    if (!req.file) {
      res.status(400);
      throw new Error("Please upload an image");
    }

    user.profilePic = req.file.path;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile picture uploaded",
      profilePic: user.profilePic,
    });

  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

module.exports = { registerUser, loginUser, uploadProfilePic };