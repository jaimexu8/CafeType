import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", TestSchema);
export default UserModel;
