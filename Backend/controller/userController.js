const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateTokenAndSetCookie = require("../utils/generateTokenAndSetCookie");
const crypto = require("crypto");
//Register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    //checking if user exists by email
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // const verificationToken = Math.floor(100000 + Math.random() * 900000);

    const user = await User.create({
      name,
      email,
      // verificationToken,
      password: hashedPassword,
      // verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    //jwt
    generateTokenAndSetCookie(res, user._id);

    // await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
    console.log("User registered:", user.email);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ SIGN TOKEN ONCE
    const token = generateTokenAndSetCookie(res, user._id);

    res.status(200).json({
      success: true,
      token, // 👈 THIS token goes to Postman
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

module.exports = {
  registerUser,
  getAllUsers,
  loginUser,
  logoutUser,
};
