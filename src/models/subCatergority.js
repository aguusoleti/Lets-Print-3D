import mongoose from "mongoose";


const subCategorySchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
});

const subCategory = mongoose.model("subCategory",subCategorySchema)
export default subCategory