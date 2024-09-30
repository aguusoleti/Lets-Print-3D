import Navbar from "../models/navbar.js";

const upsertNavbar = async (req, res) => {
  try {
    const existingNavbar = await Navbar.findOne()
    if (existingNavbar) {
      const updatedNavbar = await Navbar.findByIdAndUpdate(
        existingNavbar._id, 
        req.body, 
        { new: true }
      );
      return res.status(200).json(updatedNavbar);
    } else {
      const newNavbar = new Navbar(req.body);
      await newNavbar.save();
      return res.status(201).json(newNavbar);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Controlador para obtener el Navbar
const getNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findOne(); // Busca el único documento en la colección Navbar
    if (!navbar) {
      return res.status(404).json({ message: "Navbar no encontrado" });
    }
    res.status(200).json(navbar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { 
  upsertNavbar,
  getNavbar
 };
