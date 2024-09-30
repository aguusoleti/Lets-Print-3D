import express from "express";
import { getNavbar, upsertNavbar } from "../controllers/navbarController.js";

// import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/", upsertNavbar);
router.get("/", getNavbar);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
