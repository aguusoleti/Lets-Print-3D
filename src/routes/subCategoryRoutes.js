import express from "express";
import { createSubCategory } from "../controllers/subcategoryController.js";

// import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/new", createSubCategory);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
