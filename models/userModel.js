const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

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
    enum: ["admin", "user", "test1", "test2"], //{0:"admin",1:"user"}
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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
    this.confirm_password = undefined;
  }
  return next;
});

const User = model("User", userSchema);

module.exports = User;
