import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
