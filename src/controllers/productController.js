import Category from "../models/category.js";
import Product from "../models/product.js";
import multer from 'multer';
import Subcategory from "../models/subcategory.js";

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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });
const uploadImage = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    upload.array('images')(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: 'Error al subir las imágenes' });
      }

      const images = req.files.map(file => {
        return  file.path
        
      });
console.log(images)
      product.images = images;
    
      await product.save();

      return res.status(200).json({ message: 'Imágenes subidas correctamente' });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export {
  createProducts,
  searchProducts,
  searchAllProducts,
  uploadImage
}