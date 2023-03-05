import Category from "../models/category.js";
import Product from "../models/product.js";
import cloudinary from "cloudinary";
import {findAllAndPopulate,buildFilterProductQuery} from '../utils/product.utils.js'
const createProducts = async (req, res) => {
  try {
    const { category, subcategory } = req.body;
    const categoria = await Category.findById({ _id: category });
    const subcategoria = await Category.findById({ _id: subcategory });
    const product = new Product({ ...req.body, category: categoria.name, subcategory: subcategoria.name });
    const productSave = await product.save();
    res.json(productSave);
  } catch (error) {
    console.log(error);
  }
};
const searchProducts = async (req, res) => {
  const{name}=req.query
  try {
    const data = await findAllAndPopulate(buildFilterProductQuery(req.query));  
    res.status(200).json(data);
    
  } catch (err) {
    console.log(err.message)
    res.status(500).json({message: "internal server error"});
  }
};
const findAllProducts = async (req, res) => {
  try {
    const data = await findAllAndPopulate()
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    const error = new Error("Error al buscar un servicio");
    res.status(404).json({ msg: error.message });
  }
};
const uploadImage = async (req, res) => {
  const id = req.params.id;
  const fotos = req.files;

  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const promesasDeSubida = fotos.map(async (foto) => {
      const resultado = await cloudinary.uploader.upload(foto.path);
      return resultado.secure_url;
    });

    const fotosSubidas = await Promise.all(promesasDeSubida);
    const documento = await Product.findOne({ _id: id });
    documento.imageUrls = fotosSubidas;
    await documento.save();

    res.status(200).json(documento);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export { createProducts, searchProducts, findAllProducts, uploadImage };
