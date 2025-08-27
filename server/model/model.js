const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    created: {
      type: [
        {
          created_id: String,
        },
      ],
      default: [],
    },
    like: {
      type: [
        {
          like_id: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", UserSchema, "user")
