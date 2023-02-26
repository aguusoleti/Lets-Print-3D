import express from "express";
import { createSubCategory } from "../controllers/subCategoryController.js";

// import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/new", createSubCategory);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
