import Personalize from "../models/personalize.js";
import cloudinary from "cloudinary";


const createPersonalize = async (req, res) => {
  try {
    const newNavbar = new Personalize(req.body);
    await newNavbar.save();
    res.status(201).json(newNavbar);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const uploadImage = async (req, res) => {
  const id = req.params.id;
  const fotos = req.files;

  const CLOUD_NAME = "dadtgahbk"
  const API_KEYS = "813537572296757"
  const API_SECRET = "ofUNe2hZ8PeTXArnKL0Qma4oKAw"
  try {
    cloudinary.config({
      cloud_name: CLOUD_NAME,
      api_key: API_KEYS,
      api_secret: API_SECRET,
    });
    const promesasDeSubida = fotos.map(async (foto) => {
      const resultado = await cloudinary.uploader.upload(foto.path);
      return resultado.secure_url;
    });

    const fotosSubidas = await Promise.all(promesasDeSubida);
    console.log(fotosSubidas);
    const documento = await Personalize.findOne({ _id: id });
    documento.imageUrls = fotosSubidas;
    console.log(documento);
    await documento.save();

    res.status(200).json(documento);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export {
  createPersonalize,
  uploadImage
}