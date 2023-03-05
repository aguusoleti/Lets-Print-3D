import { emailRegex } from "../helpers/validaciones.js";

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(
        res.status(400).json({
          message: error.message,
          internalCode: "bad_request",
        })
      );
    }
    next();
  };
}

export default validatorHandler;
