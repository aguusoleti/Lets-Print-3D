import express from "express";
import { login, autenticarUsuario, comprobarTokenUsuario, confirmarUsuario, nuevoPasswordUsuario, passwordUsuarioOlvidada, perfilUsuario, registrarUsuario } from "../controllers/userController.js";

// import checkAuth from '../middleware/authMiddleware.js';
import validatorHandler from "../middleware/validator.handler.js";
import loguear from "../schemas/login.schema.js";
import creteUsuario from "../schemas/user.schema.js";

const router = express.Router();

router.post("/login", validatorHandler(loguear, 'body'),login);
router.post("/register", validatorHandler(creteUsuario, 'body') ,registrarUsuario);
router.get("/perfil",perfilUsuario)
router.get("/confirm/:token", confirmarUsuario);
// router.post("/login",autenticarUsuario);
router.post("/password-olvidada",passwordUsuarioOlvidada)
router.get("/password-olvidada/:token", comprobarTokenUsuario);
router.post("/password-olvidada/:token",  nuevoPasswordUsuario);

// router.get('/perfil', checkAuth, perfilUsuario);
export default router;