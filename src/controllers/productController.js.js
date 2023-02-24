import Product from "../models/product.js";
const createProducts = async (req, res) => {
 
  try {

    const product = new Product(req.body);
    const productSave = await product.save();
    res.json(productSave);

  } catch (error) {
    console.log(error);
  }
};
const searchProducts = async(req,res)=>{
  const {nombre} = req.body
  try {
    await Product.find({ nombre: { $regex: nombre, $options: "i" } })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        const error = new Error("No existe Turno con ese servicio");
        res.status(404).json({ msg: error.message });
      });
  } catch (err) {
    const error = new Error("Error al buscar un servicio");
    res.status(404).json({ msg: error.message });
  }
}
const searchAllProducts = async(req,res)=>{
  const {nombre} = req.body
  try {
    await Product.find({  })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        const error = new Error("No existe Turno con ese servicio");
        res.status(404).json({ msg: error.message });
      });
  } catch (err) {
    const error = new Error("Error al buscar un servicio");
    res.status(404).json({ msg: error.message });
  }
}
export  {
  createProducts,
  searchProducts,
  searchAllProducts
}
