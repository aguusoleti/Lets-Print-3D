import Joi from "joi";

const nombre = Joi.string().min(3);
const apellido = Joi.string().min(3);
const telefono = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8).uppercase(1);
const direccion = Joi.string().min(3);
const type =Joi.string().min(3)

const creteUsuario = Joi.object({

  name: nombre.required(),
  adress: direccion.required(),
  lastName: apellido.required(),
  password: password.required(),
  email: email.required(),
  celphone: telefono.required(),
  type: type.required(),
});

export default creteUsuario;
