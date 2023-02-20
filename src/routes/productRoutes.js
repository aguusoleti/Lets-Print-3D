import express from "express";
import createProducts  from "../controllers/productController.js.js";
import validatorHandler from "../middleware/validator.handler.js";
import createProduct from "../schemas/product.schema.js";

const router = express.Router();

router.post("/create", validatorHandler(createProduct, 'body') ,createProducts);


// router.get('/perfil', checkAuth, perfilCliente);
export default router;