import  {emailRegex}  from "../helpers/validaciones.js";

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    const errores = [];

 
      if (error) {
        error.details.forEach((element) => {
          errores.push(element.context.key);
        });
        next(res.status(400).json({
          error,
          msg:error.message,
          arr:errores
        }));
      }
      next();
    
  }};


export default validatorHandler;
