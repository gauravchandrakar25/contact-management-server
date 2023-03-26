const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Register a user
//@route Get /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Email already registered");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if(user){
    res.status(201).json({_id:user.id, email: user.email});
  }else{
    res.status(404);
    throw new Error("User data is not valid")
  }

  console.log(`User created ${user}`);
  res.json({ message: "register the user" });
});

//@desc Login  user
//@route Get /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

//@desc Current user information
//@route Get /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
