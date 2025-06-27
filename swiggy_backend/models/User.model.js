import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;

// Example data
// {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   password: "hashed_password"
// }
