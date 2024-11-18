const mongoose = require("mongoose");
const { dishSchema } = require("../models/menumodel")
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
    },
    order_dishes: [{
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      vegetarian: { type: Boolean, required: true },
      spicy: { type: Boolean, required: true },
      image: { type: String, required: true },
      quantity: {type:Number , default: 0}
    }],
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
