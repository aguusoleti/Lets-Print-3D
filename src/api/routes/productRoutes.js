import express from "express";
import multer from "multer";
import  {createProducts,findAllProducts, searchProducts, uploadImage }  from "../controllers/productController.js";
import validatorHandler from "../middleware/validator.handler.js";
import createProduct from "../schemas/product.schema.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ dest:'uploads/',storage: storage });

const router = express.Router();


router.post("/", validatorHandler(createProduct, 'body') ,createProducts);
router.get("/search", searchProducts);
router.get("/", findAllProducts);
router.put('/uploads/:id/images',upload.array('image'),uploadImage);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;