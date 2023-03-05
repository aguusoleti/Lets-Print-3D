import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, require: true, enum:["Category","Subcategory"] },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
