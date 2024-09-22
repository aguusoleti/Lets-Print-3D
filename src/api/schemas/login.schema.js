import Joi from "joi";

const nombre = Joi.string().min(3);
const apellido = Joi.string().min(3);
const telefono = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8).uppercase(1);
const direccion = Joi.string().min(3);
const type =Joi.string().min(3)

const loguear = Joi.object({
  password: password.required(),
  email: email.required(),
});

export default loguear;

