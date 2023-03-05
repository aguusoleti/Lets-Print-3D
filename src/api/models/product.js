import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number, required: true },
  supplier: { type: String },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  imageUrls: [{ type: String }],
});

const Product = mongoose.model("Product", productSchema);
export default Product;
