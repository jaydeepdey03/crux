import { Schema, model, Document } from "mongoose";

export interface User extends Document {
  name: string;
  id: string;
  password: string,
  isUserVerified: boolean,
}

const UserSchema: Schema = new Schema({
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

export default model<User>("Example", UserSchema);
