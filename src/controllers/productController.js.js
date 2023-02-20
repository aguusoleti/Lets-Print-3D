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
export default createProducts
