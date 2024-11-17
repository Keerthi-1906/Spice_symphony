const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")


const loginuser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All feilds are mandatory");
    }
    const userexist = await User.findOne({ email });
    if (!userexist) {
        res.status(400);
        throw new Error("User does not exist");
    }
    if (await bcrypt.compare(password, userexist.password)) {
        const accessToken = jwt.sign({
            user: {
                username: userexist.username,
                email: userexist.email,
                id: userexist.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
        res.status(200).json({ accessToken })
    } else {
        res.status(400);
        throw new Error("Incorrect credentials")
    }
})

const registeruser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All feilds are mandatory");
    }
    console.log(username, email, password);
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("Email already exists");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username, email, password: hashedPassword
    });

    console.log("gveruigv");

    if(user){
        res.status(200).json({_id: user.id , email: user.email})
    }else{
        res.status(400);
        throw new Error("User data not valid");
    }
})

//private
const currentuser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
})

const addOrder = async (req, res) => {
    try {
        const { order_dishes } = req.body;
        const userdetails = req.user;
        const email = userdetails.email;
        // Validate if the user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(order_dishes)
        // Add order dishes to the user's order_dishes array
        user.order_dishes = order_dishes;
        await user.save();

        res.status(200).json({ message: "Order changed successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { loginuser, registeruser, currentuser, addOrder }