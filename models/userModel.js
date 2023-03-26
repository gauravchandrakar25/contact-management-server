const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: "string",
    required: [true, "Please enter a username"],
  },
  email:{
    type: "string",
    required: [true, "Please enter email"],
    unique: [true, "Email is already taken"]
  },
  password:{
    type: "string",
    required : [true, "Please enter a password"],
  }
},{
    timestamps:true,
});

module.exports = mongoose.model("User", userSchema);