import Joi from "joi";

const name = Joi.string().min(3);
const price = Joi.number()
const supplier = Joi.string();
const description = Joi.string().min(8);
const stock = Joi.number()
const category= Joi.string()
const subcategory= Joi.string()


const createProduct = Joi.object({

  name: name.required(),
  price: price.required(),
  supplier: supplier.required(),
  stock: stock.required(),
  description:description.required(),
  category:category.required(),
  subcategory:subcategory.required()

});

export default createProduct;
