import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, require: true, enum:["category","subcategory"] },
});

const Navbar = mongoose.model("Navbar", navbarSchema);
export default Navbar;
