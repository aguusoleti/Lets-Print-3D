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
  const { email,name} = req.body;
  const existeUsuario = await User.findOne({ email });

  if ( true
    // validarTelefonoAr.test(celphone) ||
    // validarTelefonoPe.test(celphone) ||
    // validarTelefonoCl.test(celphone) ||
    // validarTelefonoCo.test(celphone) ||
    // validarTelefonoVe.test(celphone)
  ) {
   
    if (existeUsuario) {
      const error = new Error("Usuario ya resgistrado");
      return res.status(400).json({ msg: error.message });
    }

    try {
      const usuario = new User(req.body);
      const usuarioGuardado = await usuario.save();
      console.log(usuarioGuardado)
      //enviar email
      emailRegistro({
        email,
        name, 
        token: usuarioGuardado.token});
        res.json(usuarioGuardado);
    } catch (error) {
      console.log(error);
    }
  }
  //  else {
  //   const error = new Error("Formato de telefono no valido");
  //   return res.status(400).json({ msg: error.message });
  // }
};

const perfilUsuario = async (req, res) => {
  const email = req.query.email
  const usuarioConfirmar = await User.findOne({ email });
  console.log(email)
  console.log(usuarioConfirmar)
  try {
    if(usuarioConfirmar){
      res.json(usuarioConfirmar)
    }
  } catch (error) {
    res.json(error)
  }
  
};
const validate = async (req, res) => {
  const { email } = req.body;
  const existeUsuario = await User.findOne({ email });
  if (!existeUsuario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    res.json({
      validated: existeUsuario.confirmation,
      token: existeUsuario.token
    });
  } catch (err) {
    const error = new Error("Error al enviar las instrucciones");
    res.status(400).json({ msg: error.message });
  }
};

const confirmarUsuario = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await User.findOne({ token });
console.log(token)
  if (!usuarioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  console.log(usuarioConfirmar);

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmation = true;
    await usuarioConfirmar.save();
    console.log(usuarioConfirmar)
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
  const usuario = await User.findOne({ email });
  console.log(usuario + "  Soy user")
  if (usuario) {
      if (await usuario.comprobarPasswordUsuario(password)) {
          return res.json({
              token: generarJWT(usuario.id),
              data: usuario,
          });
      } else {
          const error = new Error("El password es incorrecto");
          return res.json({ msg: error.message });
      }
  }
  if (!usuario) {
      const error = new Error("El Usuario no existe");
      return res.json({ msg: error.message });
  }
  console.log(usuario + "  Soy user")
  if (!usuario.confirmation) {
  console.log(usuario + "  Soy user")
  const error = new Error("La cuenta del cliente no ha sido validada");
      return res.json({ msg: error.message });
  }

};

// const searchUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findOne({ id });

//   if (user) {
//     const error = new Error("Token no valido");
//     return res.status(404).json({ msg: error.message });
//   }
// }
export {
  registrarUsuario,
  confirmarUsuario,
  autenticarUsuario,
  passwordUsuarioOlvidada,
  comprobarTokenUsuario,
  nuevoPasswordUsuario,
  perfilUsuario,
  login,
  validate,
};
