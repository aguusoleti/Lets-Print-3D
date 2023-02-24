import express from "express";
import  { createProducts, searchAllProducts, searchProducts }  from "../controllers/productController.js.js";
import validatorHandler from "../middleware/validator.handler.js";
import createProduct from "../schemas/product.schema.js";

const router = express.Router();

router.post("/create", validatorHandler(createProduct, 'body') ,createProducts);
router.get("/search", searchProducts);
router.get("/searchAll", searchAllProducts);


// router.get('/perfil', checkAuth, perfilCliente);
export default router;