const express = require('express');
const router = express.Router();
const validate = require("../middleware/validateTokenHandler")

const { getAllMenuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getmenuitems_admin } = require('../controllers/menuController');

router.route('/get-menu').get(getAllMenuItems);
router.route('/get-admin-menu').get(validate ,getmenuitems_admin);
router.route('/add-dish').post(validate,addMenuItem);
router.route('/update-dish').put(validate,updateMenuItem);
router.route('/delete-dish').delete(validate,deleteMenuItem);

module.exports = router;
