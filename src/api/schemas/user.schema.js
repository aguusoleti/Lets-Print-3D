import Joi from "joi";

const nombre = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().min(8).uppercase(1);
const type =Joi.string().min(3)

const creteUsuario = Joi.object({

  name: nombre.required(),
  password: password.required(),
  email: email.required(),
  type: type.required(),
});

export default creteUsuario;
