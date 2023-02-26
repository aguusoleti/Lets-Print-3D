import subCategory from "../models/subCategory.js";


export const createSubCategory = async (req, res) => {
    const { nombre } = req.body;
    try {
      const newSubCategory = new subCategory({ nombre });
      await newSubCategory.save();
      res.status(201).json(newSubCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };