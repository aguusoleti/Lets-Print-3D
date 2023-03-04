import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  supplier: { type: String },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategoria' },
  image:[{type: String}]
});

const Product = mongoose.model("Product",productSchema)
export default Product