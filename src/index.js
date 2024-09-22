import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import conectarDB from "./database/db.js";

import clientRoutes from "./api/routes/clientRoutes.js";
import productRoutes from "./api/routes/productRoutes.js";
import categoryRoutes from "./api/routes/categoryRoutes.js";
import personalizeRoutes from "./api/routes/personalizeRoutes.js";
import navbarRoutes from "./api/routes/navbarRoutes.js";
import footerRoutes from "./api/routes/footerRoutes.js";

const PORT = process.env.PORT || 5000;

(async () => {
  await conectarDB();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("¡Hola, mundo!");
  });

  // app.use("/api/login", clientRoutes);
  app.use("/api/client", clientRoutes);
  app.use("/api/product", productRoutes);
  app.use("/api/category", categoryRoutes);
  app.use("/api/personalize", personalizeRoutes);
  app.use("/api/navbar", navbarRoutes);
  app.use("/api/footer", footerRoutes);

  app.listen(PORT, () => {
    console.log(`Servidor arrancado en el http://localhost:${PORT}`);
  });
})();
