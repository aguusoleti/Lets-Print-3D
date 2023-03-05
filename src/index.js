import express from "express";
import conectarDB from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";

import clientRoutes from "./api/routes/clientRoutes.js";
import productRoutes from "./api/routes/productRoutes.js";
import categoryRoutes from "./api/routes/categoryRoutes.js";

dotenv.config({ path: ".env" });

const app = express();
conectarDB();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
})

app.use("/api/client", clientRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);





// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`);
});
