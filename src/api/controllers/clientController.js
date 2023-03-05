import Client from "../models/Client.js";
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

const registrarCliente = async (req, res) => {
  const { email,celphone,name } = req.body;
  const existeCliente = await Client.findOne({ email });

  if (
    validarTelefonoAr.test(celphone) ||
    validarTelefonoPe.test(celphone) ||
    validarTelefonoCl.test(celphone) ||
    validarTelefonoCo.test(celphone) ||
    validarTelefonoVe.test(celphone)
  ) {
   
    if (existeCliente) {
      const error = new Error("Cliente ya resgistrado");
      return res.status(400).json({ msg: error.message });
    }

    try {
      const cliente = new Client(req.body);
      const clienteGuardado = await cliente.save();
      //enviar email
      emailRegistro({
        email,
        name, 
        token: clienteGuardado.token});
      res.json(clienteGuardado);
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Formato de telefono no valido");
    return res.status(400).json({ msg: error.message });
  }
};

const perfilCliente = (req, res) => {
  const { cliente } = req;
  res.json({ perfil: cliente });
};

const confirmarCliente = async (req, res) => {
  const { token } = req.params;
  const clienteConfirmar = await Client.findOne({ token });

  if (!clienteConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  console.log(clienteConfirmar);

  try {
    clienteConfirmar.token = null;
    clienteConfirmar.confirmado = true;
    await clienteConfirmar.save();
    res.json({ msg: "Cliente confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const autenticarCliente = async (req, res) => {
  const { email, password } = req.body;
  const cliente = await Client.findOne({ email });
  if (!cliente) {
    const error = new Error("El cliente no existe");
    return res.status(403).json({ msg: error.message });
  }
  if (!cliente.confirmado) {
    const error = new Error("La cuenta del cliente no ha sido validada");
    return res.status(403).json({ msg: error.message });
  }
  if (await cliente.comprobarPasswordCliente(password)) {
    console.log(cliente);
    res.json({ token: generarJWT(cliente.id) });
    console.log("Password correcto");
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const passwordClienteOlvidada = async (req, res) => {
  const { email } = req.body;
  const existeCliente = await Client.findOne({ email });
  if (!existeCliente) {
    const error = new Error("El cliente no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeCliente.token = generarId();
    await existeCliente.save();
    emailNuevoPassword({
      email, 
      nombre: existeAdministrador.nombre,
      token: existeAdministrador.token
    })
    res.json({
      msg: "Se ha enviado un email con las instrucciones para cambiar la contraseña del cliente",
    });
  } catch (err) {
    const error = new Error("Error al enviar las instrucciones");
    res.status(400).json({ msg: error.message });
  }
};

const comprobarTokenCliente = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Client.findOne({ token });
  if (tokenValido) {
    res.json({ msg: "Token valido, el cliente existe" });
  } else {
    const error = new Error("Token no valido");
    return res.status(400).json({ msg: error.message });
  }
};

const nuevoPasswordCliente = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const cliente = await Client.findOne({ token });
  if (!cliente) {
    const error = new Error("Hubo un error");
    res.status(400).json({ msg: error.message });
  }
  try {
    cliente.token = null;
    cliente.password = password;
    await cliente.save();
    res.json({ msg: "Password del cliente modificado correctamente" });
  } catch (err) {
    const error = new Error("Error al generar nuevo password");
    res.status(400).json({ msg: error.message });
  }
};
export {
  registrarCliente,
  confirmarCliente,
  autenticarCliente,
  passwordClienteOlvidada,
  comprobarTokenCliente,
  nuevoPasswordCliente,
  perfilCliente,
};
