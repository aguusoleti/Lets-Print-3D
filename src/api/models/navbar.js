import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
  category: {
    type: [String],  
  },
  menu: {
    type: [String],  
  },
  background: {
    type: String,
  },
  heigth: {
    type: String,
  },
  width: {
    type: String,
  },
});

const Navbar = mongoose.model("Navbar", navbarSchema);
export default Navbar;
