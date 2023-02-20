import express from "express";
import conectarDB from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";

import clientRoutes from "./routes/clientRoutes.js";

dotenv.config({ path: ".env" });

const app = express();
conectarDB();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
})

app.use("/api/clientes", clientRoutes);



// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`);
});
