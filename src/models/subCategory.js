import mongoose from "mongoose";


const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
});

const Subcategory = mongoose.model("subCategory",subcategorySchema)
export default Subcategory