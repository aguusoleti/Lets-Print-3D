import express from "express";
import multer from "multer";
import { createPersonalize, uploadImage } from "../controllers/personalizeController.js";

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

router.post("/", createPersonalize);
router.put('/uploads/:id/images',upload.array('image'),uploadImage);

// router.get('/perfil', checkAuth, perfilCliente);
export default router;
