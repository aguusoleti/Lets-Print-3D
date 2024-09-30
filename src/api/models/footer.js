import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
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

const Footer = mongoose.model("Footer", footerSchema);
export default Footer;
