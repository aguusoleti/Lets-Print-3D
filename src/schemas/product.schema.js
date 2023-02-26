import Joi from "joi";

const nombre = Joi.string().min(3);
const price = Joi.number()
const proveedor = Joi.string();
const descripcion = Joi.string().min(8);
const cantidad = Joi.number()
const subcategoria= Joi.isRef()


const createProduct = Joi.object({

  nombre: nombre.required(),
  precio: price.required(),
  proveedor: proveedor.required(),
  cantidad: cantidad.required(),
  descripcion:descripcion.required(),
  subcategoria:subcategoria
});

export default createProduct;
