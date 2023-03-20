const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requirde: [true, "Please enter a name"],
    },
    email: {
      type: String,
      requirde: [true, "Please enter a email address"],
    },
    phone: {
      type: Number,
      requirde: [true, "Please enter a number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =mongoose.model("Contact", contactSchema);