import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, require: true, enum:["category","subcategory"] },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
