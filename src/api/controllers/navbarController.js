import Navbar from "../models/navbar.js";


 const createNavbar = async (req, res) => {
    try {
      const newNavbar = new Navbar(req.body);
      await newNavbar.save();
      res.status(201).json(newNavbar);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
 

  export {
    createNavbar
  }