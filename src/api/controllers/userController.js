import User from "../models/users.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import {
  validarTelefonoAr,
  validarTelefonoPe,
  validarTelefonoCl,
  validarTelefonoCo,
  validarTelefonoVe,
} from "../helpers/validaciones.js";
import emailRegistro from "../helpers/emailRegistroClientes.js";
import emailNuevoPassword from "../helpers/emailPasswordOlvidadaClientes.js";

const registrarUsuario = async (req, res) => {
  const { email,celphone,name } = req.body;
  const existeUsuario = await User.findOne({ email });

  if (
    validarTelefonoAr.test(celphone) ||
    validarTelefonoPe.test(celphone) ||
    validarTelefonoCl.test(celphone) ||
    validarTelefonoCo.test(celphone) ||
    validarTelefonoVe.test(celphone)
  ) {
   
    if (existeUsuario) {
      const error = new Error("Usuario ya resgistrado");
      return res.status(400).json({ msg: error.message });
    }

    try {
      const usuario = new Client(req.body);
      const usuarioGuardado = await usuario.save();
      //enviar email
      emailRegistro({
        email,
        name, 
        token: usuarioGuardado.token});
      res.json(usuarioGuardado);
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Formato de telefono no valido");
    return res.status(400).json({ msg: error.message });
  }
};

const perfilUsuario = (req, res) => {
  const { usuario } = req;
  res.json({ perfil: usuario });
};

const confirmarUsuario = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await User.findOne({ token });

  if (!usuarioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  console.log(usuarioConfirmar);

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const autenticarUsuario = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await User.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(403).json({ msg: error.message });
  }
  if (!usuario.confirmado) {
    const error = new Error("La cuenta del usuario no ha sido validada");
    return res.status(403).json({ msg: error.message });
  }
  if (await usuario.comprobarPasswordUsuario(password)) {
    console.log(usuario);
    res.json({ token: generarJWT(usuario.id) });
    console.log("Password correcto");
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const passwordUsuarioOlvidada = async (req, res) => {
  const { email } = req.body;
  const existeUsuario = await User.findOne({ email });
  if (!existeUsuario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeUsuario.token = generarId();
    await existeUsuario.save();
    emailNuevoPassword({
      email, 
      nombre: existeAdministrador.nombre,
      token: existeAdministrador.token
    })
    res.json({
      msg: "Se ha enviado un email con las instrucciones para cambiar la contraseña del usuario",
    });
  } catch (err) {
    const error = new Error("Error al enviar las instrucciones");
    res.status(400).json({ msg: error.message });
  }
};

const comprobarTokenUsuario = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await User.findOne({ token });
  if (tokenValido) {
    res.json({ msg: "Token valido, el usuario existe" });
  } else {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }
};

const nuevoPasswordUsuario = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const usuario = await User.findOne({ token });
  if (!usuario) {
    const error = new Error("Hubo un error");
    res.status(400).json({ msg: error.message });
  }
  try {
    usuario.token = null;
    usuario.password = password;
    await usuario.save();
    res.json({ msg: "Password del usuario modificado correctamente" });
  } catch (err) {
    const error = new Error("Error al generar nuevo password");
    res.status(400).json({ msg: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user.type === "admin") {
      if (await user.comprobarPassword(password)) {
          return res.json({
              token: generarJWT(user.id),
              data: admin,
          });
      } else {
          const error = new Error("El password es incorrecto");
          return res.json({ msg: error.message });
      }
  }else if (user.type === "business") {
      if (await negocio.comprobarPasswordNegocio(password)) {
          return res.json({
              token: generarJWT(user.id),
              data: negocio,
          });
      } else {
          const error = new Error("El password es incorrecto");
          return res.json({ msg: error.message });
      }
  }else if (user.type === "client") {
      if (await user.comprobarPasswordCliente(password)) {
          return res.json({
              token: generarJWT(user.id),
              data: cliente,
          });
      } else {
          const error = new Error("El password es incorrecto");
          return res.json({ msg: error.message });
      }
  }
  if (!user) {
      const error = new Error("El Usuario no existe");
      return res.json({ msg: error.message });
  }
  if (!user.confirmado) {
      const error = new Error("La cuenta del cliente no ha sido validada");
      return res.json({ msg: error.message });
  }

};
export {
  registrarUsuario,
  confirmarUsuario,
  autenticarUsuario,
  passwordUsuarioOlvidada,
  comprobarTokenUsuario,
  nuevoPasswordUsuario,
  perfilUsuario,
  login,
};
