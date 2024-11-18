const express = require('express');
const router = express.Router();
const { getAllMenuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem, } = require('../controllers/menuController');

// Route to add a dish

router.route('/add-dish').post(addMenuItem);
// router.post('/adddish', addMenuItem);

// Route to get the entire menu
router.get('/get-menu', getAllMenuItems);

// Route to update a dish
router.put('/update-dish', updateMenuItem);

// Route to delete a dish
router.delete('/delete-dish', deleteMenuItem);

module.exports = router;
