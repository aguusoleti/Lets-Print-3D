import express from "express";
import { autenticarCliente, comprobarTokenCliente, confirmarCliente, nuevoPasswordCliente, passwordClienteOlvidada, perfilCliente, registrarCliente } from "../controllers/clientController.js";

// import checkAuth from '../middleware/authMiddleware.js';
import validatorHandler from "../middleware/validator.handler.js";
import creteUsuario from "../schemas/user.schema.js";


const router = express.Router();

router.post("/register", validatorHandler(creteUsuario, 'body') ,registrarCliente);
router.get("/perfil",perfilCliente)
router.get("/confirmar/:token", confirmarCliente);
router.post("/login",autenticarCliente);
router.post("/password-olvidada",passwordClienteOlvidada)
router.get("/password-olvidada/:token", comprobarTokenCliente);
router.post("/password-olvidada/:token",  nuevoPasswordCliente);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;