const asyncHandler = require("express-async-handler");
//@desc Register a user
//@route Get /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
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

module.exports = { registerUser, loginUser,currentUser };
