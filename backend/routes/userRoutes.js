const express = require("express");
const {loginuser , registeruser , currentuser , addOrder} = require("../controllers/userController")
const validate = require("../middleware/validateTokenHandler")
const router = express.Router();

router.route("/register").post(registeruser);
router.route("/login").post(loginuser);
router.route("/current").get(validate,currentuser);
router.route("/add").post(validate, addOrder);
module.exports = router;
