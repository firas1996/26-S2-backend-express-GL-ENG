const { Schema, model } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "The email is required !!!!"],
    unique: true,
    validate: [validator.isEmail, "This email is not valid !!!"],
    lowercase: true,
    // uppercase: true,
  },
  name: {
    type: String,
    required: [true, "The name is required !!!!"],
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, "The password is required !!!!"],
    minlength: 8,
    // validate:validator.isStrongPassword
  },
  confirm_password: {
    type: String,
    required: [true, "The password is required !!!!"],
    minlength: 8,
    validate: {
      validator: function (confirm_password) {
        return confirm_password === this.password;
      },
      message: "Password and confirm pass does not match !!!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"], //{0:"admin",1:"user"}
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  password_changed_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = model("User", userSchema);

module.exports = User;
