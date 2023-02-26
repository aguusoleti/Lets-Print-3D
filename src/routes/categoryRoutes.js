import express from "express";
import { createCategory } from "../controllers/categoryController.js";

// import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/new", createCategory);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
