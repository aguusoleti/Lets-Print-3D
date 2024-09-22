import express from "express";
import { createFooter } from "../controllers/footerController.js";

// import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/", createFooter);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
