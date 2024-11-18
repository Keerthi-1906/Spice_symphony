const {Menu} = require("../models/menumodel");

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addMenuItem = async (req, res) => {
  try {
    const { type, name, description, price, vegetarian, spicy, image } = req.body;
    console.log("tryingg");

    // Find a menu document that contains the category with the given 'type'
    let menuType = await Menu.findOne({ 'categories.type': type });

    console.log("here");

    if (!menuType) {
      // If no menu exists with the specified type, create a new menu document
      menuType = new Menu({
        categories: [{
          type,  // The category type
          dishes: [{ name, description, price, vegetarian, spicy, image }]  // Add the first dish
        }]
      });
    } else {
      // If the menu exists, find the specific category where the dish should be added
      const category = menuType.categories.find(category => category.type === type);

      // Check if the dish already exists in the category
      const existingDish = category.dishes.find(dish => dish.name === name);
      if (existingDish) {
        return res.status(400).json({ message: 'Dish with this name already exists in this menu type' });
      }

      // Add the new dish to the category
      category.dishes.push({ name, description, price, vegetarian, spicy, image });
    }

    console.log("here-2");
    await menuType.save();

    res.status(201).json(menuType);
  } catch (error) {
    res.status(500).json({ message: error.message, catch: "from catch" });
  }
};


// Add a menu item
// const addMenuItem =  async (req, res) => {
//   try {
//     const { type, name, description, price, vegetarian, spicy, image } = req.body;
//     console.log("tryingg");
//     // Check if the type already exists
//     let menuType = await Menu.findOne({ type });
//     console.log("here");
//     if (!menuType) {
//       menuType = new Menu({
//         categories: [{
//           type,  // The category type
//           dishes: [{ name, description, price, vegetarian, spicy, image }]  // Add the first dish
//         }]
//       });
//     }else {
//       // If the menu exists, find the specific category where the dish should be added
//       const category = menuType.categories.find(category => category.type === type);

//       // Check if the dish already exists in the category
//       const existingDish = category.dishes.find(dish => dish.name === name);
//       if (existingDish) {
//         return res.status(400).json({ message: 'Dish with this name already exists in this menu type' });
//       }

//       // Add the new dish to the category
//       category.dishes.push({ name, description, price, vegetarian, spicy, image });
//     }
//     console.log("here-2")
//     await menuType.save();

//     res.status(201).json(menuType);
//   } catch (error) {
//     res.status(500).json({ message: error.message , catch: "from catch"});
//   }
// };

// Update a menu item
const updateMenuItem = async (req, res) => {
  try {
    const { type, name, description, price, vegetarian, spicy, image } = req.body;


    let menuType = await Menu.findOne({ "categories.type": type });
    if (!menuType) {
      return res.status(404).json({ message: 'Menu type not found' });
    }
    const category = menuType.categories.find(category => category.type === type);
    const dishIndex = category.dishes.findIndex(dish => dish.name === name);
    if (dishIndex === -1) {
      return res.status(404).json({ message: 'Dish not found in this category' });
    }
    category.dishes[dishIndex] = {
      ...category.dishes[dishIndex], 
      name: category.dishes[dishIndex].name, // Preserve the existing fields
      description, 
      price,
      vegetarian,
      spicy,
      image
    };

    // Save the updated menu
    await menuType.save();

    // Return the updated menu
    res.status(200).json(menuType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete a menu item
const deleteMenuItem = async (req, res) => {
  try {
    const { type, name} = req.body;
    // Find the menu type by category type
    let menuType = await Menu.findOne({ "categories.type": type });
    if (!menuType) {
      return res.status(404).json({ message: 'Menu type not found' });
    }
    const category = menuType.categories.find(category => category.type === type);
    const dishIndex = category.dishes.findIndex(dish => dish.name === name);
    if (dishIndex === -1) {
      return res.status(404).json({ message: 'Dish not found in this category' });
    }
    category.dishes.splice(dishIndex , 1);
    await menuType.save();
    res.status(200).json(menuType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
