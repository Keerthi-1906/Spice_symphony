const mongoose = require("mongoose");
const {dishSchema} = require("../models/menumodel")
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      unique: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Validates phone number format
    },
    order_dishes: [dishSchema],
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
