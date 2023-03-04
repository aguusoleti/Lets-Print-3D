import Subcategory from "../models/subcategory.js";


export const createSubCategory = async (req, res) => {
    const { nombre } = req.body;
    try {
      const newSubCategory = new Subcategory({ nombre });
      await newSubCategory.save();
      res.status(201).json(newSubCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };