import Footer from "../models/footer.js";


 const createFooter = async (req, res) => {
    try {
      const newFooter = new Footer(req.body);
      await newFooter.save();
      res.status(201).json(newFooter);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
 

  export {
    createFooter
  }