import Category from "../models/category.js";
import Product from "../models/product.js";
import Subcategory from "../models/subcategory.js";
import cloudinary from 'cloudinary'
const createProducts = async (req, res) => {
  try {
    const subCategoriaTaza = await Subcategory.findOne({ nombre: 'Tazones' });
    const categoriaCeramica = await Category.findOne({ nombre: 'ceramica' });
    const product = new Product(req.body,{subCategoriaTaza});
    const productSave = await product.save();
    res.json(productSave);
  } catch (error) {
    console.log(error);
  }
};
const searchProducts = async(req,res)=>{
  const {nombre} = req.body;
  try {
    const data = await Product.find({ nombre: { $regex: nombre, $options: "i" } });
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    const error = new Error("Error al buscar un servicio");
    res.status(404).json({ msg: error.message });
  }
};
const searchAllProducts = async(req,res)=>{
  try {
    const data = await Product.find({});
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
    try{
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
      });
    
      const promesasDeSubida = fotos.map(async foto => {
        const resultado = await cloudinary.uploader.upload(foto.path);
        return resultado.secure_url
      });

      const fotosSubidas = await Promise.all(promesasDeSubida);
      console.log(fotosSubidas + 'soy fotos subidas')
    
      const documento = await Product.findOne({_id: id});
      documento.image = fotosSubidas;
      await documento.save();
    
      res.send('Fotos agregadas');
    }catch(err){
      res.status(400).json({message: err.message});
    }
  
}

export {
  createProducts,
  searchProducts,
  searchAllProducts,
  uploadImage
}