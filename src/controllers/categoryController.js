import Category from "../models/category.js";


export const createCategory = async (req, res) => {
    const { nombre } = req.body;
    try {
      const newCategory = new Category({ nombre });
      await newCategory.save();
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };