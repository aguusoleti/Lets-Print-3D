import Personalize from "../models/personalize.js";
import cloudinary from "cloudinary";
import Navbar from "../models/navbar.js";
import Footer from "../models/footer.js";

const personalizeControllers = async (req, res) => {

  try {
    const { name, description, navbarData, footerData, imageUrls } = req.body;
    let personalize = await Personalize.findOne();
    if (!personalize) {
      console.log("Personalize no existe");
      let navbar = null;
      let footer= null;

      if (navbarData) {
        console.log("Entre a Navbar");
        const existingNavbar = await Navbar.findOne()
        try {
          if (existingNavbar) {
             await Navbar.findByIdAndUpdate(
              existingNavbar._id,
              req.body.navbarData,
              { new: true }
            );
            navbar= existingNavbar._id
          } else {
            const newNavbar = new Navbar(req.body.navbarData);
            navbar= newNavbar._id
            await newNavbar.save();
          }
        } catch (error) {
          res.status(409).json({ message: error.message });
        }
      }
      if (footerData) { 
        const existingFooter = await Footer.findOne()
        try {
          if (existingFooter) {
             await Footer.findByIdAndUpdate(
              existingFooter._id,
              req.body.footerData,
              { new: true }
            );
            footer= existingFooter._id
          } else {
            const newFooter = new Footer(req.body.footerData);
            footer= newFooter._id
            await newFooter.save();
          }
        } catch (error) {
          res.status(409).json({ message: error.message });
        }
      }     
      personalize = new Personalize({
        name,
        description,
        navbar: navbar?._id,
        footer: footer?._id,
        imageUrls,
      });
      await personalize.save();
      return res.status(201).json({ personalize });
    }
    if (personalize) {
      console.log("Entre a personalize");
      if (navbarData) {
        console.log("Entre a Navbar");
        const existingNavbar = await Navbar.findOne()
        try {
          if (existingNavbar) {
             await Navbar.findByIdAndUpdate(
              existingNavbar._id,
              req.body.navbarData,
              { new: true }
            );
            personalize.navbar= existingNavbar._id
          } else {
            const newNavbar = new Navbar(req.body.navbarData);
            personalize.navbar= newNavbar._id
            await newNavbar.save();
          }
        } catch (error) {
          res.status(409).json({ message: error.message });
        }
      }
      if (footerData) { 
        const existingFooter = await Footer.findOne()
        try {
          if (existingFooter) {
             await Footer.findByIdAndUpdate(
              existingFooter._id,
              req.body.footerData,
              { new: true }
            );
            personalize.footer= existingFooter._id
          } else {
            const newFooter = new Footer(req.body.footerData);
            personalize.footer= newFooter._id
            await newFooter.save();
          }
        } catch (error) {
          res.status(409).json({ message: error.message });
        }
      }
      
     personalize.name = name || personalize.name;
     personalize.description = description || personalize.description;
     personalize.imageUrls = imageUrls || personalize.imageUrls;
      await personalize.save();
      console.log(personalize);
      return res.status(200).json({ personalize });
    }
  } catch (error) {
    console.error("Error al crear o actualizar Personalize:", error);
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};
const getPersonalize = async (req, res) => {
  try {
    // Buscar el primer documento Personalize y popular las referencias de Navbar y Footer
    const personalize = await Personalize.findOne()
      .populate("navbar")  // Populate trae los datos del Navbar asociado
      .populate("footer"); // Populate trae los datos del Footer asociado

    // Verificar si existe Personalize
    if (!personalize) {
      return res.status(404).json({ message: "No se encontró ningún documento de personalización" });
    }

    // Devolver el documento de Personalize con Navbar y Footer
    return res.status(200).json({ personalize });
  } catch (error) {
    console.error("Error al obtener Personalize:", error);
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};
const uploadImage = async (req, res) => {

  let personalize = await Personalize.findOne();
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
    const documento = await Personalize.findOne({ _id: personalize._id });
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
  personalizeControllers,
  getPersonalize,
  uploadImage
}