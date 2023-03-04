import Joi from "joi";

const name = Joi.string().min(3);
const price = Joi.number()
const supplier = Joi.string();
const description = Joi.string().min(8);
const amount = Joi.number()
const subcategory= Joi.isRef()


const createProduct = Joi.object({

  name: name.required(),
  price: price.required(),
  supplier: supplier.required(),
  amount: amount.required(),
  description:description.required(),
  subcategory:subcategory
});

export default createProduct;
