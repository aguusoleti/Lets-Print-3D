import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, require: true, enum:["category","subcategory"] },
});

const Footer = mongoose.model("Footer", footerSchema);
export default Footer;
