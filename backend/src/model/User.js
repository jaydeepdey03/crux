import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isUserVerified: {
    type: Boolean,
    default: false
  }
});

export default model("Example", UserSchema);
