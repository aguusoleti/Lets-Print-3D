import express from "express";
import  {createProducts,searchAllProducts, searchProducts, uploadImage }  from "../controllers/productController.js";
import validatorHandler from "../middleware/validator.handler.js";
import createProduct from "../schemas/product.schema.js";



const router = express.Router();

router.post("/create", validatorHandler(createProduct, 'body') ,createProducts);
router.get("/search", searchProducts);
router.get("/searchAll", searchAllProducts);
router.post('/uploads/:id/images',uploadImage);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;