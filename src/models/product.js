import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String },
  cantidad: { type: Number, required: true },
  proveedor: { type: String },
  subcategoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategoria' },
});

const Product = mongoose.model("Product",productSchema)
export default Product