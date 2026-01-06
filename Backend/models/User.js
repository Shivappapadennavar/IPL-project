const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  team: {
    type: String,
    enum: ["CSK", "RCB", "MI", "KKR", "RR"],
    default: "CSK"
  },
  role: {
    type: String,
    default: "user"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
