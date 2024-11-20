const { category } = require("../models/menumodel");

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const menu = await category.find();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addMenuItem = async (req, res) => {
  try {
    console.log(req.body);
    const { type, name, description, price, vegetarian, spicy, image } = req.body;
    console.log(type);
    let categorytype = await category.findOne({ 'type': type });
    if (!categorytype) {
      categorytype = new category({
        type,
        dishes: [{ name, description, price, vegetarian, spicy, image }]
      })
    } else {
      categorytype.dishes.push({ name, description, price, vegetarian, spicy, image })
    }
    console.log("here-2");
    await categorytype.save();
    res.status(201).json(categorytype);
  } catch (error) {
    res.status(500).json({ message: error.message, catch: "from catch" });
  }
};

// Update a menu item
const updateMenuItem = async (req, res) => {
  try {
    const { type, name, description, price, vegetarian, spicy, image } = req.body;

    let categorytype = await category.findOne({ type: type });
    if (!categorytype) {
      return res.status(400).json({ message: 'category not found' });
    }
    let dishindex = categorytype.dishes.findIndex(dish => dish.name === name);
    if (dishindex === -1) {
      return res.status(400).json({ message: "dish not found" });
    }
    categorytype.dishes[dishindex] = {
      name,
      description,
      price,
      vegetarian,
      spicy,
      image
    }

    await categorytype.save();
    res.status(200).json(categorytype);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};


// Delete a menu item
const deleteMenuItem = async (req, res) => {
  try {
    const { type, name } = req.body;
    console.log(type, name, req.body)
    let categorytype = await category.findOne({ type: type });
    if (!categorytype) {
      return res.status(400).json({ message: 'category not found' });
    }
    let dishindex = categorytype.dishes.findIndex(dish => dish.name === name);
    if (dishindex === -1) {
      return res.status(400).json({ message: "dish not found" });
    }
    categorytype.dishes.splice(dishindex, 1);
    const newdishes = categorytype.dishes
    if (categorytype.dishes.length === 0) {
      await categorytype.deleteOne()
    }
    console.log(categorytype);
    try {
      await category.findOneAndUpdate({ type: type}, { $set: { dishes: { newdishes } } })
    } catch (err) {
      console.log(err);
    }
    res.status(200).json(categorytype);
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};


module.exports = {
  getAllMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
