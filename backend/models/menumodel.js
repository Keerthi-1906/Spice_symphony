const mongoose = require('mongoose');

// Define the schema for a dish
const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  vegetarian: { type: Boolean, required: true },
  spicy: { type: Boolean, required: true },
  image: { type: String, required: true }
});

// Define the schema for a menu category
const menuCategorySchema = new mongoose.Schema({
  type: { type: String, required: true },
  dishes: [dishSchema]  // Array of dishes within each category
});

// Define the model for the menu
const menuSchema = new mongoose.Schema({
  categories: [menuCategorySchema]  // Array of menu categories
});

// Create and export the model
const Menu = mongoose.model('Menu', menuSchema);

module.exports = {Menu, dishSchema};
