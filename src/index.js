import express from 'express';
import conectarDB from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Configurar variables de entorno
dotenv.config({ path: '.env' });

// Crear la aplicación Express
const app = express();

// Conectar la base de datos
conectarDB();

// Configurar middleware CORS
app.use(cors());

// Configurar middleware para analizar solicitudes con JSON
app.use(express.json());

// Definir la ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto ${PORT}`);
});