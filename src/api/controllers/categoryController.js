import Category from "../models/category.js";


 const createCategory = async (req, res) => {
    const { name ,type} = req.body;
    try {
      const newCategory = new Category({name,type});
      await newCategory.save();
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };


  export {
    createCategory
  }