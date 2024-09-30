import express from "express";
import multer from "multer";
import {  getPersonalize, personalizeControllers, uploadImage } from "../controllers/personalizeController.js";

// import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ dest:'uploads/',storage: storage });


  router.post("/", personalizeControllers);
  router.get("/", getPersonalize);
  router.put('/uploads/images',upload.array('image'),uploadImage);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
