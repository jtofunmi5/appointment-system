const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
    // oneTimePassword: { type: String },
    // resetPasswordToken: { type: String },
    // resetPasswordExpiresAt: { type: Date },
    // verificationToken: { type: String },
    // verificationTokenExpiresAt: { type: Date },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
